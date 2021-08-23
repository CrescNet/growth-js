<template>
  <tr>
    <td>
      <q-input
        outlined
        type="date"
        :value="local.date"
        debounce="500"
        @update:model-value="update('date', $event)"
      />
    </td>
    <td>
      <q-input
        outlined
        type="number"
        step="any"
        min="0"
        title="in cm"
        debounce="500"
        :value="local.height"
        @update:model-value="update('height', $event)"
      />
    </td>
    <td>
      <q-input
        outlined
        type="number"
        step="any"
        min="0"
        title="in kg"
        debounce="500"
        :value="local.weight"
        @update:model-value="update('weight', $event)"
      />
    </td>
    <td>
      <q-btn round color="red" icon="clear" @click="$emit('deleteRow')" />
    </td>
  </tr>
</template>

<script>
export default {
  props: ["modelValue"],
  computed: {
    local() {
      console.log(this.modelValue)
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
