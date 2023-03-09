import { defineStore } from 'pinia'
import { ReferenceData, ReferenceDataRow, ReferenceDeclaration, SexReferenceData } from 'src/components/models'
import { api } from 'boot/axios'
import { useI18n } from 'vue-i18n'
import { computed, ref } from 'vue'
import useReferences from 'src/mixins/useReferences'

type SexReferenceDataKey = keyof SexReferenceData

export const useReferenceStore = defineStore('reference', () => {
  const { t } = useI18n()
  const { rawFromReference, sdsFromReference } = useReferences()

  const reference = ref<ReferenceDeclaration|undefined>()
  const referenceData = ref<ReferenceData|undefined>()
  const availableReferences = computed(() => [
    {
      value: 'normal_german',
      label: t('normal_german'),
      authors: 'Kromeyer-Hauschild et al. 2001',
      url: 'https://doi.org/10.1007/s001120170107',
      disease: false
    },
    {
      value: 'normal_china',
      label: t('normal_china'),
      authors: 'Zong et al. 2013',
      url: 'https://doi.org/10.1371/journal.pone.0059569',
      disease: false
    },
    {
      value: 'normal_who',
      label: t('normal_who'),
      authors: 'WHO',
      url: 'https://doi.org/10.2471/blt.07.043497',
      disease: false
    },
    {
      value: 'normal_turkish_germany',
      label: t('normal_turkish_germany'),
      authors: 'Redlefsen 2008',
      url: 'https://d-nb.info/990166104/34',
      disease: false
    },
    {
      value: 'achondroplasia_sweden',
      label: t('achondroplasia_sweden'),
      authors: 'Merker et al. 2019',
      url: 'https://doi.org/10.1002/ajmg.a.38853',
      disease: true
    },
    {
      value: 'hypochondroplasia_argentinia',
      label: t('hypochondroplasia_argentinia'),
      authors: 'Arenas et al. 2018',
      url: 'https://doi.org/10.1515/jpem-2018-0046',
      disease: true
    },
    {
      value: 'noonan_japan',
      label: t('noonan_japan'),
      authors: 'Isojima et al. 2016',
      url: 'https://doi.org/10.1038/pr.2015.254',
      disease: true
    },
    {
      value: 'trisomy21_america',
      label: t('trisomy21_america'),
      authors: 'Zemel et al. 2015',
      url: 'https://doi.org/10.1542/peds.2015-1652',
      disease: true
    }
  ])

  const resetRefernce = () => {
    reference.value = undefined
    referenceData.value = undefined
  }

  const getTargetHeightSds = (fatherHeight: number, motherHeight: number, coefficient = 0.72) => {
    if (reference.value?.disease || !referenceData.value?.height)
      return undefined
    const fatherHeightSds = sdsFromReference(referenceData.value.height.male || [], 18, fatherHeight)
    const motherHeightSds = sdsFromReference(referenceData.value.height.female || [], 18, motherHeight)
    if (!fatherHeightSds || !motherHeightSds) return undefined
    return (fatherHeightSds + motherHeightSds) / 2 * coefficient
  }

  return {
    reference,
    availableReferences,

    async loadReference (referenceId?: string) {
      if (!referenceId) {
        resetRefernce()
      } else {
        return await api
          .get(`./references/${referenceId}.json`)
          .then(r => {
            reference.value = availableReferences.value.find(r => r.value === referenceId)
            referenceData.value = r.data
          })
          .catch(() => resetRefernce())
      }
    },

    getReferenceData (property: string, sex: string) {
      if (!referenceData.value) return []
      type ReferenceDataKey = keyof ReferenceData
      const propertyReferenceData = referenceData.value[property as ReferenceDataKey]
      if (!propertyReferenceData) return []
      return propertyReferenceData[sex as SexReferenceDataKey]
    },

    /**
     * Target height calculation according to Hermanussen et al.
     * This function does not take secular changes into account!
     * The reference values applicable to the subject are also used for the parents.
     * 
     * @param fatherHeight Height of father in cm
     * @param motherHeight Height of mother in cm
     * @param sex Sex of subject ('female' or 'male')
     * @param coefficient Used for the target height calculation, defaults to 0.72
     * @returns Target height in cm
     */
    getTargetHeight (fatherHeight: number, motherHeight: number, sex: string, coefficient = 0.72) {
      if (!referenceData.value?.height || !referenceData.value?.height[sex as SexReferenceDataKey])
        return undefined
      const targetHeightSds = getTargetHeightSds(fatherHeight, motherHeight, coefficient)
      if (!targetHeightSds)
        return undefined
      return rawFromReference(referenceData.value?.height[sex as SexReferenceDataKey] as ReferenceDataRow[], 18, targetHeightSds)
    },

    getTargetHeightSds
  }
})
