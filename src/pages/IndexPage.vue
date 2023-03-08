<template>
  <q-page class="q-pa-md">
    <q-splitter v-model="splitterModel" :horizontal="$q.screen.lt.md" :limits="[30, 80]" class="q-mb-md" :separator-class="{
      'q-mx-md': $q.screen.gt.sm,
      'q-my-md': $q.screen.lt.md,
    }">
      <template v-slot:before>
        <q-card bordered class="q-mb-md">
          <q-card-section class="description q-pb-none">
            <strong>{{ t("description.label") }}</strong>:
            <p>{{ t("description.text") }}</p>
          </q-card-section>
          <q-card-section class="data-privacy q-pt-none">
            <strong>{{ t("dataPrivacy.label") }}</strong>:
            <p>{{ t("dataPrivacy.text") }}</p>
          </q-card-section>
        </q-card>

        <q-card bordered class="scroll">
          <user-input-form
            v-model="userInput"
            :available-references="availableReferences"
            :bmi-reference-data="bmiReferenceData"
            :height-reference-data="heightReferenceData"
            :weight-reference-data="weightReferenceData"
            @update:reference="loadReferenceData($event)"
          />
          <q-separator />
          <q-card-actions class="justify-center">
            <q-btn-group rounded push>
              <q-btn color="primary" icon="save" :label="t('export.title')" @click="showExportDialog = true" />
              <q-btn color="primary" icon="file_download" :label="t('import.title')" @click="showImportDialog = true" />
              <q-btn color="red" icon="restart_alt" :label="t('reset')" @click="resetUserInput" />
            </q-btn-group>
          </q-card-actions>
        </q-card>
      </template>

      <template v-slot:separator>
        <q-avatar v-show="$q.screen.gt.sm" color="primary" text-color="white" size="30px" icon="drag_indicator" />
      </template>

      <template v-slot:after>
        <q-card bordered>
          <q-tabs v-model="chartTab" dense active-color="primary" indicator-color="primary" align="justify"
            narrow-indicator>
            <q-tab name="height" :label="t('height')" />
            <q-tab name="weight" :label="t('weight')" />
            <q-tab name="bmi" :label="t('bmi')" />
          </q-tabs>

          <q-separator />

          <q-tab-panels v-model="chartTab" animated keep-alive>
            <q-tab-panel name="height">
              <growth-chart :property-name="t('height') + ' (cm)'" :scatter-data="heightData" :color="chartColor"
                :centile-data="heightReferenceData" />
            </q-tab-panel>
            <q-tab-panel name="weight">
              <growth-chart :property-name="t('weight') + ' (kg)'" :scatter-data="weightData" :color="chartColor"
                :centile-data="weightReferenceData" />
            </q-tab-panel>
            <q-tab-panel name="bmi">
              <growth-chart :property-name="t('bmi') + ' (kg/m²)'" :scatter-data="bmiData" :color="chartColor"
                :centile-data="bmiReferenceData" />
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </template>
    </q-splitter>

    <export-dialog v-model:show="showExportDialog" :userInput="userInput" />

    <import-dialog v-model:show="showImportDialog" v-model:userInput="userInput" />
  </q-page>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import { ReferenceData, ReferenceDeclaration, SexReferenceData, UserInput, Visit } from 'components/models'
import GrowthChart from 'components/GrowthChart.vue'
import UserInputForm from 'src/components/UserInputForm.vue'
import ExportDialog from 'components/ExportDialog.vue'
import ImportDialog from 'components/ImportDialog.vue'
import { useI18n } from 'vue-i18n'
import { api } from 'boot/axios'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'IndexPage',
  components: { GrowthChart, UserInputForm, ExportDialog, ImportDialog },
  setup() {
    const { t } = useI18n()
    const $q = useQuasar()

    const availableReferences = computed(() => {
      return [
        {
          value: 'normal_german',
          label: t('normal_german'),
          authors: 'Kromeyer-Hauschild et al. 2001',
          url: 'https://doi.org/10.1007/s001120170107',
        },
        {
          value: 'normal_china',
          label: t('normal_china'),
          authors: 'Zong et al. 2013',
          url: 'https://doi.org/10.1371/journal.pone.0059569',
        },
        {
          value: 'normal_who',
          label: t('normal_who'),
          authors: 'WHO',
          url: 'https://doi.org/10.2471/blt.07.043497',
        },
        {
          value: 'normal_turkish_germany',
          label: t('normal_turkish_germany'),
          authors: 'Redlefsen 2008',
          url: 'https://d-nb.info/990166104/34',
        },
        {
          value: 'achondroplasia_sweden',
          label: t('achondroplasia_sweden'),
          authors: 'Merker et al. 2019',
          url: 'https://doi.org/10.1002/ajmg.a.38853',
        },
        {
          value: 'hypochondroplasia_argentinia',
          label: t('hypochondroplasia_argentinia'),
          authors: 'Arenas et al. 2018',
          url: 'https://doi.org/10.1515/jpem-2018-0046',
        },
        {
          value: 'noonan_japan',
          label: t('noonan_japan'),
          authors: 'Isojima et al. 2016',
          url: 'https://doi.org/10.1038/pr.2015.254',
        },
        {
          value: 'trisomy21_america',
          label: t('trisomy21_america'),
          authors: 'Zemel et al. 2015',
          url: 'https://doi.org/10.1542/peds.2015-1652',
        },
      ] as ReferenceDeclaration[]
    })

    const userInput = ref({
      visits: [{}],
      reference: availableReferences.value[0]?.value
    } as UserInput)
    const referenceData = ref({} as ReferenceData)
    const birthdateDate = computed(() =>
      userInput.value.birthdate ? new Date(userInput.value.birthdate) : undefined
    )

    const dateDiffYears = (d1: Date | undefined, d2: Date | undefined): number | undefined => {
      if (!d1 || !d2) return undefined
      const local1 = new Date(d1.getTime())
      const local2 = new Date(d2.getTime())
      local1.setHours(0, 0, 0, 0)
      local2.setHours(0, 0, 0, 0)
      return (local1.getTime() - local2.getTime()) / (1000 * 60 * 60 * 24 * 365.25)
    }

    const getData = (property: string) => {
      if (!userInput.value.birthdate) return []
      return userInput.value.visits?.map((v) => {
        if (!v.date) return undefined
        type VisitKey = keyof Visit
        return {
          x: dateDiffYears(new Date(v.date), birthdateDate.value),
          y: v[property as VisitKey],
        }
      })
    }

    const loadReferenceData = (referenceId?: string) => {
      if (!referenceId) {
        referenceData.value = {}
      } else {
        api
          .get(`./references/${referenceId}.json`)
          .then((response) => {
            referenceData.value = response.data
          })
          .catch(() => {
            referenceData.value = {}
            $q.notify(t('referenceDataLoadFailed'))
          })
      }
    }

    const getReferenceDataByProperty = (property: string) => {
      type ReferenceDataKey = keyof ReferenceData
      const propertyReferenceData = referenceData.value[property as ReferenceDataKey]
      if (!userInput.value.sex || !propertyReferenceData) return []
      type SexReferenceDataKey = keyof SexReferenceData
      return propertyReferenceData[userInput.value.sex as SexReferenceDataKey]
    }

    onMounted(() => {
      const prefill = localStorage.getItem('userInput')
      if (prefill) userInput.value = JSON.parse(prefill)
      loadReferenceData(userInput.value.reference)
    })

    return {
      t,
      userInput,
      availableReferences,
      showExportDialog: ref(false),
      showImportDialog: ref(false),
      splitterModel: ref(57),
      chartTab: ref('height'),
      loadReferenceData,

      heightData: computed(() => getData('height')),

      weightData: computed(() => getData('weight')),

      bmiData: computed(() => {
        if (!userInput.value.birthdate) return [];
        return userInput.value.visits?.map((v) => {
          if (!v.date || !v.height || !v.weight) return undefined
          return {
            x: dateDiffYears(new Date(v.date), birthdateDate.value),
            y: v.weight / (v.height / 100) ** 2,
          }
        })
      }),

      heightReferenceData: computed(() => getReferenceDataByProperty('height')),

      weightReferenceData: computed(() => getReferenceDataByProperty('weight')),

      bmiReferenceData: computed(() => getReferenceDataByProperty('bmi')),

      chartColor: computed(() => {
        if (userInput.value.sex == 'male')
          return '#2086e8'
        else if (userInput.value.sex == 'female')
          return '#f392a3'
        return 'black'
      }),

      resetUserInput: () => {
        userInput.value = {
          reference: availableReferences.value[0]?.value,
          birthdate: undefined,
          sex: undefined,
          visits: [{}],
        }
        localStorage.removeItem('userInput')
      }
    }
  }
})
</script>
