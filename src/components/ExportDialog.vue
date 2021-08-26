<template>
  <q-dialog
    :model-value="local"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <q-card>
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6" v-t="'export.title'" />
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>
      <q-separator inset />
      <q-card-section class="q-gutter-sm">
        <p v-t="'export.description'" />
        <div class="row justify-between items-center">
          <q-btn
            rounded
            stack
            class="col-4"
            color="primary"
            icon="save"
            :disabled="!dirty"
            :title="!dirty ? $t('export.browser.noChanges') : ''"
            :label="$t('export.browser.title')"
            @click="saveUserInput"
          />
          <div class="col-7" v-t="'export.browser.description'" />
        </div>
        <div class="row justify-between items-center">
          <q-btn
            rounded
            stack
            class="col-4"
            color="primary"
            icon="download"
            :label="$t('export.file.title')"
            @click="saveFile"
          />
          <div class="col-7" v-t="'export.file.description'" />
        </div>
        <div class="row justify-between items-center">
          <q-btn
            rounded
            stack
            class="col-4"
            color="primary"
            icon="qr_code_2"
            :label="$t('export.qrCode.title')"
            @click="showQrCode = true"
          />
          <div class="col-7" v-t="'export.qrCode.description'" />
        </div>
      </q-card-section>
    </q-card>

    <QrCodeDialog v-model="showQrCode" :content="userInput" />
  </q-dialog>
</template>

<script>
import QrCodeDialog from "./QrCodeDialog.vue";

export default {
  name: "ExportDialog",
  components: { QrCodeDialog },
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    userInput: Object,
  },
  data() {
    return {
      showQrCode: false,
      dirty: false,
    };
  },
  computed: {
    local() {
      return this.modelValue;
    },
  },
  watch: {
    userInput: {
      deep: true,
      handler: function () {
        this.setDirty(true);
      },
    },
  },
  methods: {
    saveUserInput() {
      localStorage.setItem("userInput", JSON.stringify(this.userInput));
      this.setDirty(false);
    },
    saveFile() {
      const data = JSON.stringify(this.userInput);
      const blob = new Blob([data], { type: "text/plain" });
      const e = document.createEvent("MouseEvents"),
        a = document.createElement("a"),
        today = new Date().toLocaleDateString();
      a.download = "data_" + today + ".json";
      a.href = window.URL.createObjectURL(blob);
      a.dataset.downloadurl = ["text/json", a.download, a.href].join(":");
      e.initEvent(
        "click",
        true,
        false,
        window,
        0,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null
      );
      a.dispatchEvent(e);
    },
    setDirty(dirty) {
      this.dirty = dirty;
    },
  },
};
</script>