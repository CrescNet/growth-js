<script>
import { Scatter } from "vue3-chart-v2"

export default {
  name: "GrowthChart",
  extends: Scatter,
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
          scales: {
            xAxes: [{ scaleLabel: { display: true, labelString: 'Age (years)' } }],
            yAxes: [{ scaleLabel: { display: true, labelString: 'Height (cm)' } }],
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
  mounted () {
    this.renderChart()
  },
  watch: {
    centileData () {
      this.state.chartObj.destroy()
      this.renderChart()
    },
  }
}
</script>
