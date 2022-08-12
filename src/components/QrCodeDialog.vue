<template>
  <q-dialog
    :model-value="local"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <q-card>
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6" v-t="'export.qrCode.title'" />
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>
      <q-separator inset />
      <q-card-section class="text-center">
        <p v-t="'export.qrCode.description2'" />
        <qrcode-vue :value="JSON.stringify(content)" :size="size" level="H" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import QrcodeVue from 'qrcode.vue';
import { UserInput } from './models';

export default defineComponent({
  components: { QrcodeVue },
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    content: {
      type: Object as () => UserInput,
      default: () => { {} }
    }
  },
  emits: ['update:modelValue'],
  setup (props) {
    return {
      local: computed(() => props.modelValue),
      size: computed(() => props.content.visits ? Math.sqrt(props.content.visits.length || 1) * 100 : 0)
    }
  }
})
</script>
