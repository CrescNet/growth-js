<template>
  <tr class="q-tr--no-hover">
    <td>
      <q-input
        outlined
        type="date"
        debounce="500"
        :modelValue="local.date"
        @update:model-value="update('date', $event)"
      />
    </td>
    <td>
      <q-input
        outlined
        type="number"
        step="any"
        min="0"
        :title="t('inUnit', { unit: 'cm' })"
        debounce="500"
        :modelValue="local.height"
        @update:model-value="update('height', $event)"
      />
    </td>
    <td>
      <q-input
        outlined
        type="number"
        step="any"
        min="0"
        :title="t('inUnit', { unit: 'kg' })"
        debounce="500"
        :modelValue="local.weight"
        @update:model-value="update('weight', $event)"
      />
    </td>
    <td>
      <q-input
        outlined
        readonly
        class="cursor-inherit"
        type="number"
        step="any"
        :title="t('inUnit', { unit: 'kg/m²' })"
        :modelValue="bmi"
      />
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
import { Visit } from './models'

export default defineComponent({
  props: {
    modelValue: {
      type: Object as () => Visit,
      default: () => { {} }
    }
  },
  emits: ['update:modelValue', 'deleteRow'],
  setup (props, { emit }) {
    const { t } = useI18n()
    const local = computed(() => props.modelValue ? props.modelValue : {})

    return {
      t,
      local,

      bmi: computed(() => {
        if (!local.value.height || !local.value.weight) return undefined
        return (local.value.weight / (local.value.height / 100)**2).toFixed(2)
      }),

      update (key: string, value: number|undefined) {
        emit('update:modelValue', { ...props.modelValue, [key]: value })
      }
    }
  }
})
</script>

<style lang="sass" scoped>
.cursor-inherit input
  cursor: inherit !important
</style>
