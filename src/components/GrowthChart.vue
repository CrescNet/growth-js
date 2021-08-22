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
    scatterData: {
      type: Array,
      default () { [] },
    },
    centileData: {
      type: Object,
      default () {
        return {
          height: { p03: [], p50: [], p97: [] },
          weight: { p03: [], p50: [], p97: [] },
        }
      },
    },
    options: {
      type: Object,
      default () {
        return {
          responsive: true,
          scales: {
            x: { beginAtZero: true, title: { display: true, text: 'Age (years)' } },
            y: { beginAtZero: true, title: { display: true, text: 'Height (cm)' } },
          }
        }
      },
    },
  },
  computed: {
    heightData: function () {
      return this.scatterData.map(s => {
        return {
          x: s.age,
          y: s.height,
        }
      })
    },
    weightData: function () {
      return this.scatterData.map(s => {
        return {
          x: s.age,
          y: s.weight,
        }
      })
    },
    chartData: function () {
      return {
        datasets: [
          {
            label: "Height",
            type: "scatter",
            data: this.heightData,
            backgroundColor: "#ff6384",
          },
          {
            label: "Weight",
            type: "scatter",
            data: this.weightData,
            backgroundColor: "#36a2eb",
          },
          {
            label: "p50",
            type: "line",
            fill: false,
            borderDash: [5],
            borderWidth: 2,
            data: this.centileData.height.p50,
            borderColor: 'black',
            pointRadius: 0,
          },
          {
            label: "p97",
            type: "line",
            fill: false,
            borderWidth: 2,
            data: this.centileData.height.p97,
            borderColor: 'black',
            pointRadius: 0,
          },
          {
            label: "p03",
            type: "line",
            fill: false,
            borderWidth: 2,
            data: this.centileData.height.p03,
            borderColor: 'black',
            pointRadius: 0,
          },
        ],
      }
    },
  },
}
</script>
