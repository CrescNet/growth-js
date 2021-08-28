<template>
  <tr>
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
        :title="$t('inUnit', { unit: 'cm' })"
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
        :title="$t('inUnit', { unit: 'kg' })"
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
        :title="$t('inUnit', { unit: 'kg/m²' })"
        :modelValue="bmi"
      />
    </td>
    <td>
      <q-btn
        round
        color="red"
        icon="clear"
        :title="$t('deleteRow')"
        @click="$emit('deleteRow')"
      />
    </td>
  </tr>
</template>

<script>
export default {
  props: ["modelValue"],
  computed: {
    local() {
      return this.modelValue ? this.modelValue : {};
    },
    bmi() {
      if (!this.local.height || !this.local.weight) return null;
      return (this.local.weight / (this.local.height / 100)**2).toFixed(2);
    },
  },
  methods: {
    update(key, value) {
      this.$emit("update:modelValue", { ...this.modelValue, [key]: value });
    },
  },
};
</script>

<style>
.cursor-inherit input {
  cursor: inherit !important;
}
</style>