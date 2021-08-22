<template>
  <div>
    <div class="header">
      <h1>Growth JS</h1>
      <div class="description">App for visualization of growth data</div>
      <div class="data-privacy">Data Privacy: ...</div>
    </div>

    <hr>

    <div class="content">
      <div class="data-entry">
        Sex:
        <input type="radio" id="male" value="male" v-model="sex">
        <label for="male">male</label>
        <input type="radio" id="female" value="female" v-model="sex">
        <label for="female">female</label>

        <br>

        <label for="birthdate">Birthdate:</label>
        <input type="date" id="birthdate" v-model="birthdate" />

        <hr>

        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Height</th>
              <th>Weight</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <VisitRow
              v-for="(visit, index) in visits"
              :key="index"
              v-model="visits[index]"
              @deleteRow="removeVisit(visit)"
            />
            <tr><td colspan="4"><input type="button" value="Add visit" @click="addVisit"></td></tr>
          </tbody>
        </table>
      </div>
      <div class="data-visualization">
        <GrowthChart
          :heightData="heightData"
          :centileData="centiles[sex]"
        />
      </div>
    </div>
  </div>
</template>

<script>
import GrowthChart from "./components/GrowthChart.vue"
import VisitRow from "./components/VisitRow.vue"

export default {
  name: "App",
  components: { GrowthChart, VisitRow },
  data() {
    return {
      birthdate: null,
      sex: null,
      visits: [{ date: "2020-01-01", height: 60, weight: 4 }],
      centiles: {
        male: {
          p50: [
            { x: 0, y: 47 },
            { x: 0.2, y: 53 },
            { x: 0.5, y: 62 },
            { x: 0.8, y: 81 },
            { x: 1, y: 100 },
          ],
        },
      },
    }
  },
  computed: {
    birthdateDate () {
      return new Date(this.birthdate).setHours(0, 0, 0, 0)
    },
    heightData() {
      return this.visits.map(v => {
        return {
          x: this.dateDiffYears(new Date(v.date).setHours(0, 0, 0, 0), this.birthdateDate),
          y: v.height,
        }
      })
    },
  },
  methods: {
    addVisit () {
      this.visits.push({})
    },
    removeVisit (visit) {
      this.visits.splice(this.visits.indexOf(visit), 1)
    },
    dateDiffYears (d1, d2) {
      return (d1 - d2) / (1000 * 60 * 60 * 24 * 365.25)
    }
  },
}
</script>
