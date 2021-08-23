<template>
  <ScatterChart :chartData="chartData" :options="options" />
</template>

<script>
import { ScatterChart } from "vue-chart-3"
import { Chart, registerables } from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";

Chart.register(...registerables, zoomPlugin);

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
            x: { min: 0, max: 18 },
            y: { min: 0 },
          },
          plugins: {
            zoom: {
              limits: {
                x: { min: 0, max: 100, minRange: 1 },
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
            }
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
