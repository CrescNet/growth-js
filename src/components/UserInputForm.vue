<template>
  <div>
    <q-card-section>
      <div class="row">
        <div class="col-12 col-md">
          <q-select
            v-model="local.reference"
            outlined
            :label="t('selectReference')"
            emit-value
            map-options
            :options="availableReferences"
            @update:model-value="$emit('update:reference', $event)"
          />
          <div class="text-caption" v-if="selectedReference && selectedReference.url">
            {{ t("source") }}:
            <a :href="selectedReference.url" target="_blank" class="q-link text-primary">
              {{
                selectedReference.authors
                ? selectedReference.authors
                : selectedReference.url
              }}
            </a>
          </div>
        </div>

        <div class="col-12 col-md q-gutter-md text-center q-pt-sm">
          <q-radio v-model="local.sex" val="male" :label="t('male')" />
          <q-radio v-model="local.sex" val="female" :label="t('female')" />
        </div>

        <div class="col-12 col-md">
          <q-input
            outlined
            type="date"
            :label="t('birthdate')"
            stack-label
            debounce="500"
            v-model="local.birthdate"
          />
          <q-btn
            flat
            dense
            no-caps
            :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
            :label="expanded ? t('collapse') : t('expand')"
            class="text-caption float-right"
            v-if="selectedReference && selectedReference.url"
            @click="expanded = !expanded"
          />
        </div>
      </div>
      <q-slide-transition>
        <div v-show="expanded" class="row items-center q-gutter-md">
          <q-input
            v-model.number="local.motherHeight"
            type="number"
            class="col-12 col-md"
            outlined
            stack-label
            debounce="500"
            :label="t('motherHeight')"
          />
          <q-input
            v-model.number="local.fatherHeight"
            type="number"
            class="col-12 col-md"
            outlined
            stack-label
            debounce="500"
            :label="t('fatherHeight')"
          />
          <div class="col-12 col-md">
            <span v-show="!!targetHeight" :title="t('targetHeightDescription')">
              {{ t('targetHeight') }}: {{ targetHeight }} cm
              <q-icon name="info" />
            </span>
          </div>
        </div>
      </q-slide-transition>
    </q-card-section>

    <q-separator />

    <q-card-section class="q-pa-none">
      <q-markup-table flat>
        <thead>
          <tr>
            <th v-t="'date'" />
            <th>
              {{ t("height") + ' (cm)' }}
            </th>
            <th>
              {{ t("weight") + ' (kg)' }}
            </th>
            <th>
              {{ t('bmi') + ' (kg/m²)' }}
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <visit-row
            v-for="(visit, index) in local.visits"
            :key="index"
            v-model="local.visits[index]"
            :birthdate="local.birthdate"
            :bmi-reference-data="bmiReferenceData"
            :height-reference-data="heightReferenceData"
            :weight-reference-data="weightReferenceData"
            @deleteRow="removeVisit(visit)"
          />
          <tr class="q-tr--no-hover">
            <td colspan="5">
              <q-btn
                rounded
                color="secondary"
                icon="add"
                :label="t('addRow')"
                @click="addVisit"
              />
            </td>
          </tr>
        </tbody>
      </q-markup-table>
    </q-card-section>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, ref } from 'vue'
import VisitRow from './VisitRow.vue'
import { useI18n } from 'vue-i18n'
import { UserInput, Visit, ReferenceDeclaration, ReferenceDataRow } from './models'
import useReferences from 'src/mixins/useReferences'

export default defineComponent({
  props: {
    modelValue: {
      type: Object as () => UserInput,
      default: () => { { } }
    },
    availableReferences: {
      type: Array as () => ReferenceDeclaration[],
      default: () => []
    },
    bmiReferenceData: Array as () => ReferenceDataRow[],
    heightReferenceData: Array as () => ReferenceDataRow[],
    weightReferenceData: Array as () => ReferenceDataRow[]
  },
  components: { VisitRow },
  emits: ['update:reference'],
  setup(props) {
    const { t } = useI18n()
    const { targetHeight } = useReferences()
    const local = computed(() => props.modelValue)
    const expanded = ref(false)

    onMounted(() => {
      if (local.value.motherHeight || local.value.fatherHeight)
        expanded.value = true
    })

    return {
      t,
      local,
      expanded,

      selectedReference: computed(
        () => props.availableReferences.find((r) => r.value == local.value.reference)
      ),

      addVisit() {
        if (!local.value.visits)
          local.value.visits = []
        local.value.visits.push({})
      },

      removeVisit(visit: Visit) {
        local.value.visits?.splice(local.value.visits?.indexOf(visit), 1)
      },

      targetHeight: computed(() => {
        if (!local.value.motherHeight || !local.value.fatherHeight || !local.value.sex) return undefined
        return targetHeight(local.value.motherHeight, local.value.fatherHeight, local.value.sex).toFixed(1)
      })
    }
  }
})
</script>
