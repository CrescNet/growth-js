<template>
  <tr>
    <td>
      <input
        type="date"
        :value="local.date"
        @input="update('date', $event.target.value)">
    </td>
    <td>
      <input
        type="number"
        step="any"
        min="0"
        title="in cm"
        :value="local.height"
        @input="update('height', $event.target.value)">
    </td>
    <td>
      <input
        type="number"
        step="any"
        min="0"
        title="in kg"
        :value="local.weight"
        @input="update('weight', $event.target.value)">
    </td>
    <td>
      <input type="button" value="Delete" @click="$emit('deleteRow')">
    </td>
  </tr>
</template>

<script>
export default {
  props: ['modelValue'],
  computed: {
    local () {
      return this.modelValue ? this.modelValue : {}
    },
  },
  methods: {
    update (key, value) {
      this.$emit('update:modelValue', { ...this.modelValue, [key]: value })
    },
  },
}
</script>
