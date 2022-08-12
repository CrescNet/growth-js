<template>
  <ScatterChart v-if="mounted" :chartData="chartData" :options="options" />
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import { ScatterChart } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'
import zoomPlugin from 'chartjs-plugin-zoom'

Chart.register(...registerables, zoomPlugin)

export default defineComponent({
  components: { ScatterChart },
  props: {
    scatterData: {
      type: Array,
      default: () => { [] }
    },
    centileData: {
      type: Array,
      default: () => { [] }
    },
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
    propertyName: String,
  },
  setup (props) {
    const mounted = ref(false)
    const localCentileData = computed(() => {
      var result = {}
      if (props.centileData) {
        for (var centile of ['p03', 'p50', 'p97']) {
          result[centile] = props.centileData.map((c) => {
            return { x: c.age, y: c[centile] }
          })
        }
      }
      return result
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
              label: 'p03',
              type: 'line',
              fill: false,
              borderWidth: 2,
              data: localCentileData.value.p03,
              borderColor: 'black',
              pointRadius: 0,
              pointHitRadius: 0,
            },
            {
              label: 'p50',
              type: 'line',
              fill: false,
              borderDash: [5],
              borderWidth: 2,
              data: localCentileData.value.p50,
              borderColor: 'black',
              pointRadius: 0,
              pointHitRadius: 0,
            },
            {
              label: 'p97',
              type: 'line',
              fill: false,
              borderWidth: 2,
              data: localCentileData.value.p97,
              borderColor: 'black',
              pointRadius: 0,
              pointHitRadius: 0,
            },
          ],
        }
      })
    }
  }
})
</script>
