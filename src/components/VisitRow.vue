<template>
  <tr class="q-tr--no-hover">
    <td>
      <q-input
        outlined
        type="date"
        debounce="500"
        :modelValue="modelValue.date"
        :title="age === undefined ? undefined : t('year', Math.round(age * 10) / 10)"
        @update:model-value="update('date', $event)"
      />
    </td>
    <td>
      <q-input
        outlined
        type="number"
        step="any"
        min="0"
        title="cm"
        debounce="500"
        :model-value="modelValue.height"
        @update:model-value="update('height', $event)"
      >
        <template #append>
          <div v-if="heightSds" :title="t('sdsDescription')" class="text-subtitle2" :class="sdsClass(heightSds)">
            {{ heightSds.toFixed(2) }} SDS
          </div>
        </template>
      </q-input>
    </td>
    <td>
      <q-input
        outlined
        type="number"
        step="any"
        min="0"
        title="kg"
        debounce="500"
        :model-value="modelValue.weight"
        @update:model-value="update('weight', $event)"
      >
        <template #append>
          <div v-if="weightSds" :title="t('sdsDescription')" class="text-subtitle2" :class="sdsClass(weightSds)">
            {{ weightSds.toFixed(2) }} SDS
          </div>
        </template>
      </q-input>
    </td>
    <td>
      <q-input
        outlined
        readonly
        class="cursor-inherit"
        type="number"
        step="any"
        title="kg/m²"
        :model-value="bmi"
      >
        <template #append>
          <div v-if="bmiSds" :title="t('sdsDescription')" class="text-subtitle2" :class="sdsClass(bmiSds)">
            {{ bmiSds.toFixed(2) }} SDS
          </div>
        </template>
      </q-input>
    </td>
    <td>
      <q-btn
        round
        color="red"
        icon="clear"
        :title="t('deleteRow')"
        @click="$emit('deleteRow')"
      />
    </td>
  </tr>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { ReferenceDataRow, Visit } from './models'
import useReferences from 'src/mixins/useReferences'

export default defineComponent({
  props: {
    modelValue: {
      type: Object as () => Visit,
      default: () => { {} }
    },
    birthdate: String,
    bmiReferenceData: Array as () => ReferenceDataRow[],
    heightReferenceData: Array as () => ReferenceDataRow[],
    weightReferenceData: Array as () => ReferenceDataRow[]
  },
  emits: ['update:modelValue', 'deleteRow'],
  setup (props, { emit }) {
    const { t } = useI18n()
    const { sds, age, bmi } = useReferences()

    const ageYears = computed(() => age(props.birthdate, props.modelValue.date))
    const bmiValue = computed(() => bmi(props.modelValue.height, props.modelValue.weight))

    return {
      t,
      age: ageYears,

      bmi: computed(() => {
        if (!bmiValue.value) return undefined
        return bmiValue.value.toFixed(2)
      }),

      bmiSds: computed(() => sds(props.bmiReferenceData, ageYears.value, bmiValue.value)),

      heightSds: computed(() => sds(props.heightReferenceData, ageYears.value, props.modelValue.height)),

      weightSds: computed(() => sds(props.weightReferenceData, ageYears.value, props.modelValue.weight)),

      update (key: string, value?: string|number|null) {
        emit('update:modelValue', { ...props.modelValue, [key]: value })
      },

      sdsClass (sds: number): string {
        if (Math.abs(sds) >= 1.881) return 'text-negative'
        if (Math.abs(sds) >= 1.644) return 'text-warning'
        return 'text-positive'
      }
    }
  }
})
</script>

<style lang="sass" scoped>
.cursor-inherit input
  cursor: inherit !important
</style>
