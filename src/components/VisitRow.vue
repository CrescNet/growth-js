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
  },
  methods: {
    update(key, value) {
      this.$emit("update:modelValue", { ...this.modelValue, [key]: value });
    },
  },
};
</script>
