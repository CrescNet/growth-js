<template>
  <ScatterChart :chartData="chartData" :options="options" />
</template>

<script>
import { ScatterChart } from "vue-chart-3"
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default {
  name: "GrowthChart",
  components: { ScatterChart },
  props: {
    heightData: {
      type: Array,
      default () { [] },
    },
    centileData: {
      type: Object,
      default () {
        return { p03: [], p50: [], p97: [] }
      },
    },
    options: {
      type: Object,
      default () {
        return {
          responsive: true,
          scales: {
            x: { title: { display: true, text: 'Age (years)' } },
            y: { title: { display: true, text: 'Height (cm)' } },
          }
        }
      },
    },
  },
  computed: {
    chartData: function () {
      return {
        datasets: [
          {
            label: "Height",
            type: "scatter",
            data: this.heightData,
            backgroundColor: "rgb(255, 99, 132)",
          },
          {
            label: "p50",
            type: "line",
            fill: false,
            borderDash: [5],
            borderWidth: 2,
            data: this.centileData.p50,
            borderColor: 'black',
            pointRadius: 0,
          },
          {
            label: "p97",
            type: "line",
            fill: false,
            borderWidth: 2,
            data: this.centileData.p97,
            borderColor: 'black',
            pointRadius: 0,
          },
          {
            label: "p03",
            type: "line",
            fill: false,
            borderWidth: 2,
            data: this.centileData.p03,
            borderColor: 'black',
            pointRadius: 0,
          },
        ],
      }
    },
  },
}
</script>
