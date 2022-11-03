<template>
  <q-dialog
    :model-value="show"
    @update:model-value="$emit('update:show', $event)"
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
            :title="!dirty ? t('export.browser.noChanges') : ''"
            :label="t('export.browser.title')"
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
            :label="t('export.file.title')"
            @click="saveToFile(JSON.stringify(userInput), exportFileName)"
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
            :label="t('export.qrCode.title')"
            @click="showQrCode = true"
          />
          <div class="col-7" v-t="'export.qrCode.description'" />
        </div>
      </q-card-section>
    </q-card>

    <qr-code-dialog v-model="showQrCode" :content="userInput" />
  </q-dialog>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import QrCodeDialog from './QrCodeDialog.vue'
import fileHandler from 'src/mixins/fileHandler.js'
import { useI18n } from 'vue-i18n'
import { UserInput } from 'components/models'

export default defineComponent({
  components: { QrCodeDialog },
  mixins: [ fileHandler ],
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    dirty: {
      type: Boolean,
      default: false,
    },
    userInput: {
      type: Object as () => UserInput,
      default: () => { {} }
    },
  },
  emits: ['update:dirty', 'update:show'],
  setup (params, { emit }) {
    const { t } = useI18n()
    const showQrCode = ref(false)
    return {
      t,
      showQrCode,

      exportFileName: computed(() => 'data_' + new Date().toLocaleDateString() + '.json'),

      saveUserInput () {
        localStorage.setItem('userInput', JSON.stringify(params.userInput))
        emit('update:dirty', false)
      }
    }
  }
})
</script>
