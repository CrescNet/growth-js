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
      type: Array,
      default () { [] },
    },
    options: {
      type: Object,
      default () {
        return {
          responsive: true,
          scales: {
            x: { min: -0.5, max: 20, title: { display: true, text: 'Age (years)' } },
            y: { beginAtZero: true, title: { display: true } },
          }
        }
      },
    },
    color: {
      type: String,
      default: "#ff6384",
    },
    propertyName: String,
  },
  computed: {
    localCentileData: function () {
      var result = {}
      if (this.centileData != undefined) {
        for (var centile of ["p03", "p50", "p97"]) {
          result[centile] = this.centileData.map(c => { return { x: c.age, y: c[centile] } })
        }
      }
      return result
    },
    chartData: function () {
      return {
        datasets: [
          {
            label: this.propertyName,
            type: "scatter",
            data: this.scatterData,
            backgroundColor: this.color,
          },
          {
            label: "p50",
            type: "line",
            fill: false,
            borderDash: [5],
            borderWidth: 2,
            data: this.localCentileData.p50,
            borderColor: 'black',
            pointRadius: 0,
            pointHitRadius: 0,
          },
          {
            label: "p97",
            type: "line",
            fill: false,
            borderWidth: 2,
            data: this.localCentileData.p97,
            borderColor: 'black',
            pointRadius: 0,
            pointHitRadius: 0,
          },
          {
            label: "p03",
            type: "line",
            fill: false,
            borderWidth: 2,
            data: this.localCentileData.p03,
            borderColor: 'black',
            pointRadius: 0,
            pointHitRadius: 0,
          },
        ],
      }
    },
  },
}
</script>
