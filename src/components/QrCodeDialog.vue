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

<script>
import QrcodeVue from "qrcode.vue";

export default {
  name: "QrCodeDialog",
  components: { QrcodeVue },
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    content: Object,
  },
  computed: {
    local() {
      return this.modelValue;
    },
    size() {
      return Math.sqrt(this.content.visits.length) * 100;
    },
  },
};
</script>