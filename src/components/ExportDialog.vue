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
            @click="doFileExport"
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
import { useI18n } from 'vue-i18n'
import { ReferenceDataRow, UserInput } from 'components/models'
import useReferences from 'src/mixins/useReferences'
import useFileHandler from 'src/mixins/useFileHandler'

export default defineComponent({
  components: { QrCodeDialog },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    userInput: {
      type: Object as () => UserInput,
      default: () => { {} }
    },
    bmiReferenceData: Array as () => ReferenceDataRow[],
    heightReferenceData: Array as () => ReferenceDataRow[],
    weightReferenceData: Array as () => ReferenceDataRow[]
  },
  emits: ['update:show'],
  setup (props) {
    const { t } = useI18n()
    const showQrCode = ref(false)
    const { sds, age, bmi } = useReferences()
    const exportFileName = computed(() => 'data_' + new Date().toLocaleDateString() + '.json')
    const { saveToFile } = useFileHandler()

    return {
      t,
      showQrCode,
      exportFileName,

      saveUserInput() {
        localStorage.setItem('userInput', JSON.stringify(props.userInput))
      },

      doFileExport() {
        const visits = props.userInput.visits.map(v => {
          const ageYears = age(props.userInput.birthdate, v.date)
          const bmiValue = bmi(v.height, v.weight)
          return {
            date: v.date,
            age: ageYears,
            height: v.height ? +v.height : undefined,
            heightSds: sds(props.heightReferenceData, ageYears, v.height),
            weight: v.weight ? +v.weight : undefined,
            weightSds: sds(props.weightReferenceData, ageYears, v.weight),
            bmi: bmiValue,
            bmiSds: sds(props.bmiReferenceData, ageYears, bmiValue)
          }
        })
        const data = {
          birthdate: props.userInput.birthdate,
          motherHeight: props.userInput.motherHeight,
          fatherHeight: props.userInput.fatherHeight,
          sex: props.userInput.sex,
          reference: props.userInput.reference,
          visits
        }

        saveToFile(JSON.stringify(data), exportFileName.value)
      }
    }
  }
})
</script>
