<template>
  <ScatterChart v-if="mounted" :chartData="chartData" :options="options" />
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import { ScatterChart } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'
import zoomPlugin from 'chartjs-plugin-zoom'
import { CentileData, Coordinate, ReferenceDataRow } from 'components/models'
import { useI18n } from 'vue-i18n'
import useReferences from 'src/mixins/useReferences'

Chart.register(...registerables, zoomPlugin)

export default defineComponent({
  components: { ScatterChart },
  props: {
    scatterData: {
      type: Array as () => Coordinate[],
      default: () => { [] }
    },
    centileData: {
      type: Array as () => ReferenceDataRow[],
      default: () => { [] }
    },
    targetSds: Number,
    options: {
      type: Object,
      default: () => {
        return {
          responsive: true,
          scales: {
            x: { min: 0, max: 18 },
            y: { min: 0 },
          },
          plugins: {
            zoom: {
              limits: {
                x: { min: 0, max: 25, minRange: 1 },
                y: { min: 0, max: 300, minRange: 5 },
              },
              zoom: {
                wheel: { enabled: true },
                pinch: { enabled: true },
                mode: 'xy',
              },
              pan: {
                enabled: true,
                mode: 'xy',
              },
            },
          },
        }
      },
    },
    color: {
      type: String,
      default: 'black',
    },
    targetColor: {
      type: String,
      default: '#3d9970'
    },
    propertyName: String,
  },
  setup (props) {
    const { t } = useI18n()
    const { rawFromLms } = useReferences()
    const mounted = ref(false)
    const localCentileData = computed(() => {
      var result = { } as CentileData
      if (props.centileData) {
        type CentileDataKey = keyof CentileData
        type ReferenceDataRowKey = keyof ReferenceDataRow
        for (var centile of ['p03', 'p50', 'p97']) {
          result[centile as CentileDataKey] = props.centileData.map((c) => {
            return { x: c.age, y: c[centile as ReferenceDataRowKey] } as Coordinate
          })
        }
      }
      return result
    })

    const targetData = computed(() => {
      if (!props.targetSds || !props.centileData) return []
      return props.centileData.map((c) => {
        return {
          x: c.age,
          y: rawFromLms(props.targetSds as number, c.l, c.m, c.s)
        } as Coordinate
      })
    })

    onMounted(() => mounted.value = true)

    return {
      mounted,

      chartData: computed(() => {
        return {
          datasets: [
            {
              label: props.propertyName,
              type: 'scatter',
              data: props.scatterData,
              backgroundColor: props.color,
            },
            {
              label: t('parentalEstimatedValue'),
              type: 'line',
              data: targetData.value,
              borderColor: props.targetColor,
              borderWidth: 2,
              pointHitRadius: 0,
              pointRadius: 0
            },
            {
              label: 'p03',
              type: 'line',
              data: localCentileData.value.p03,
              borderColor: 'black',
              borderWidth: 2,
              pointHitRadius: 0,
              pointRadius: 0
            },
            {
              label: 'p50',
              type: 'line',
              borderDash: [5],
              data: localCentileData.value.p50,
              borderColor: 'black',
              borderWidth: 2,
              pointHitRadius: 0,
              pointRadius: 0
            },
            {
              label: 'p97',
              type: 'line',
              data: localCentileData.value.p97,
              borderColor: 'black',
              borderWidth: 2,
              pointHitRadius: 0,
              pointRadius: 0
            }
          ],
          options: {
            elements: {
              line: {
                fill: false
              }
            }
          }
        }
      })
    }
  }
})
</script>
