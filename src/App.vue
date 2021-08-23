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
        Reference:
        <select v-model="reference">
          <option :value="null">Please select a reference...</option>
          <option value="normal_german">German children without chronic diseases</option>
          <option value="noonan_japan">Children with Noonan Syndrome</option>
        </select>

        <br>

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
          propertyName="Height (cm)"
          :scatterData="heightData"
          :centileData="centiles.height ? centiles.height[sex] : []"
        />
        <GrowthChart
          propertyName="Weight (kg)"
          :scatterData="weightData"
          :centileData="centiles.weight ? centiles.weight[sex] : []"
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
  data () {
    return {
      birthdate: null,
      sex: null,
      visits: [{}],
      reference: null,
      centiles: {},
    }
  },
  computed: {
    birthdateDate () {
      if (this.birthdate == null) return null
      return new Date(this.birthdate).setHours(0, 0, 0, 0)
    },
    heightData () {
      if (this.birthdateDate == null) return []
      return this.visits.map(v => {
        return {
          x: this.dateDiffYears(new Date(v.date).setHours(0, 0, 0, 0), this.birthdateDate),
          y: v.height,
        }
      })
    },
    weightData () {
      if (this.birthdateDate == null) return []
      return this.visits.map(v => {
        return {
          x: this.dateDiffYears(new Date(v.date).setHours(0, 0, 0, 0), this.birthdateDate),
          y: v.weight,
        }
      })
    },
  },
  watch: {
    reference: function () {
      this.$cookie.setCookie('reference', this.reference)
      if (this.reference == null) {
        this.centiles = {}
        return
      }
      var self = this
      this.axios.get(`/references/${this.reference}.json`).then((response) => {
        self.centiles = response.data
      }).catch(() => {
        self.reference = null
        self.centiles = {}
      })
    },
    birthdate: function () {
      this.$cookie.setCookie('birthdate', this.birthdate)
    },
    sex: function () {
      this.$cookie.setCookie('sex', this.sex)
    },
    visits: {
      deep: true,
      handler () {
        this.$cookie.setCookie('visits', { data: this.visits })
      }
    }
  },
  mounted () {
    if (this.$cookie.getCookie('reference'))
      this.reference = this.$cookie.getCookie('reference')
    if (this.$cookie.getCookie('birthdate'))
      this.birthdate = this.$cookie.getCookie('birthdate')
    if (this.$cookie.getCookie('sex'))
      this.sex = this.$cookie.getCookie('sex')

    if (this.$cookie.getCookie('visits')) {
      try {
        this.visits = this.$cookie.getCookie('visits').data
      } catch (e) {
        console.log(e)
        this.$cookie.removeCookie('visits')
      }
    }
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
    },
  }
}
</script>
