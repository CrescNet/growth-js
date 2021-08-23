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
        <select v-model="userInput.reference">
          <option :value="null">Please select a reference...</option>
          <option value="normal_german">German children without chronic diseases</option>
          <option value="noonan_japan">Children with Noonan Syndrome</option>
        </select>

        <br>

        Sex:
        <input type="radio" id="male" value="male" v-model="userInput.sex">
        <label for="male">male</label>
        <input type="radio" id="female" value="female" v-model="userInput.sex">
        <label for="female">female</label>

        <br>

        <label for="birthdate">Birthdate:</label>
        <input type="date" id="birthdate" v-model="userInput.birthdate" />

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
              v-for="(visit, index) in userInput.visits"
              :key="index"
              v-model="userInput.visits[index]"
              @deleteRow="removeVisit(visit)"
            />
            <tr><td colspan="4"><input type="button" value="Add visit" @click="addVisit"></td></tr>
          </tbody>
        </table>

        <hr>

        <input type="button" value="Save data for later" @click="saveUserInput">
        <input type="button" value="Reset data" @click="resetUserInput">
      </div>
      <div class="data-visualization">
        <GrowthChart
          propertyName="Height (cm)"
          :scatterData="heightData"
          :centileData="centiles.height ? centiles.height[userInput.sex] : []"
        />
        <GrowthChart
          propertyName="Weight (kg)"
          :scatterData="weightData"
          :centileData="centiles.weight ? centiles.weight[userInput.sex] : []"
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
      userInput: {
        reference: null,
        birthdate: null,
        sex: null,
        visits: [{}],
      },
      centiles: {},
    }
  },
  computed: {
    birthdateDate () {
      if (this.userInput.birthdate == null) return null
      return new Date(this.userInput.birthdate).setHours(0, 0, 0, 0)
    },
    heightData () {
      if (this.birthdateDate == null) return []
      return this.userInput.visits.map(v => {
        return {
          x: this.dateDiffYears(new Date(v.date).setHours(0, 0, 0, 0), this.birthdateDate),
          y: v.height,
        }
      })
    },
    weightData () {
      if (this.birthdateDate == null) return []
      return this.userInput.visits.map(v => {
        return {
          x: this.dateDiffYears(new Date(v.date).setHours(0, 0, 0, 0), this.birthdateDate),
          y: v.weight,
        }
      })
    },
  },
  watch: {
    "userInput.reference": function () {
      if (this.userInput.reference == null) {
        this.centiles = {}
        return
      }
      var self = this
      this.axios.get(`/references/${this.userInput.reference}.json`).then((response) => {
        self.centiles = response.data
      }).catch(() => {
        self.userInput.reference = null
        self.centiles = {}
      })
    }
  },
  mounted () {
    if (this.$cookie.getCookie('userInput'))
      this.userInput = this.$cookie.getCookie('userInput')
  },
  methods: {
    addVisit () {
      this.userInput.visits.push({})
    },
    removeVisit (visit) {
      this.userInput.visits.splice(this.userInput.visits.indexOf(visit), 1)
    },
    dateDiffYears (d1, d2) {
      return (d1 - d2) / (1000 * 60 * 60 * 24 * 365.25)
    },
    saveUserInput () {
      this.$cookie.setCookie('userInput', this.userInput)
    },
    resetUserInput () {
      this.userInput = {
        reference: null,
        birthdate: null,
        sex: null,
        visits: [{}],
      }
      this.$cookie.removeCookie('userInput')
    }
  }
}
</script>
