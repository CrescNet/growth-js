<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Growth JS
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container class="q-pa-md q-gutter-y-md">
      <q-card bordered>
        <q-card-section>
          <div class="text-h5">Growth JS</div>
          <div class="text-subtutle2">by CrescNet</div>
        </q-card-section>

        <q-separator inset />

        <q-card-section class="description"
          >App for visualization of growth data</q-card-section
        >
        <q-card-section class="data-privacy">Data Privacy: ...</q-card-section>
      </q-card>

      <q-card bordered>
        <q-card-section>
          <q-select
            outlined
            label="Reference"
            stack-label
            emit-value
            map-options
            v-model="userInput.reference"
            :options="availableReferences"
          />

          <br />

          <div class="q-gutter-sm">
            <q-radio v-model="userInput.sex" val="male" label="Male" />
            <q-radio v-model="userInput.sex" val="female" label="Female" />
          </div>

          <br />

          <q-input
            outlined
            type="date"
            label="Date of birth"
            stack-label
            debounce="500"
            v-model="userInput.birthdate"
          />
        </q-card-section>

        <q-separator inset />

        <q-card-section>
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
              <tr>
                <td colspan="4">
                  <q-btn
                    rounded
                    color="secondary"
                    icon="add"
                    label="Add row"
                    @click="addVisit"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </q-card-section>

        <q-card-section>
          <q-btn-group rounded>
            <q-btn
              color="primary"
              icon="save"
              :disabled="!dirty"
              label="Save data for later"
              @click="saveUserInput"
            />
            <q-btn
              color="primary"
              icon="restart_alt"
              label="Reset data"
              @click="resetUserInput"
            />
            <q-btn
              color="primary"
              icon="qr_code_2"
              label="Toggle QR code"
              @click="showQrCode = !showQrCode"
            />
          </q-btn-group>
        </q-card-section>
      </q-card>

      <q-dialog v-model="showQrCode">
        <q-card>
          <q-card-section>
            <qrcode-vue
              :value="JSON.stringify(nonEmptyVisits)"
              :size="Math.sqrt(nonEmptyVisits.length) * 100"
              level="H"
            />
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="Close" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <div class="row q-gutter-x-md items-start">
        <q-card bordered class="col">
          <q-card-section>
            <div class="text-h6 text-center">Height</div>
            <GrowthChart
              propertyName="Height (cm)"
              :scatterData="heightData"
              :centileData="
                centiles.height ? centiles.height[userInput.sex] : []
              "
            />
          </q-card-section>
        </q-card>

        <q-card bordered class="col">
          <q-card-section>
            <div class="text-h6 text-center">Weight</div>
            <GrowthChart
              propertyName="Weight (kg)"
              :scatterData="weightData"
              :centileData="
                centiles.weight ? centiles.weight[userInput.sex] : []
              "
            />
          </q-card-section>
        </q-card>
      </div>
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import GrowthChart from "./components/GrowthChart.vue";
import VisitRow from "./components/VisitRow.vue";
import QrcodeVue from "qrcode.vue";

export default {
  name: "App",
  components: { GrowthChart, VisitRow, QrcodeVue },
  data() {
    return {
      userInput: {
        reference: null,
        birthdate: null,
        sex: null,
        visits: [{}],
      },
      centiles: {},
      showQrCode: false,
      dirty: false,
      availableReferences: [
        { value: null, label: "Please select a reference..." },
        {
          value: "normal_german",
          label: "German children without chronic diseases",
        },
        { value: "noonan_japan", label: "Children with Noonan Syndrome" },
      ],
    };
  },
  computed: {
    birthdateDate() {
      if (this.userInput.birthdate == null) return null;
      return new Date(this.userInput.birthdate).setHours(0, 0, 0, 0);
    },
    heightData() {
      if (this.birthdateDate == null) return [];
      return this.userInput.visits.map((v) => {
        return {
          x: this.dateDiffYears(
            new Date(v.date).setHours(0, 0, 0, 0),
            this.birthdateDate
          ),
          y: v.height,
        };
      });
    },
    weightData() {
      if (this.birthdateDate == null) return [];
      return this.userInput.visits.map((v) => {
        return {
          x: this.dateDiffYears(
            new Date(v.date).setHours(0, 0, 0, 0),
            this.birthdateDate
          ),
          y: v.weight,
        };
      });
    },
    nonEmptyVisits() {
      return this.userInput.visits.filter(
        (v) => v.date != null && (v.height != null || v.weight != null)
      );
    },
  },
  watch: {
    "userInput.reference": function () {
      if (this.userInput.reference == null) {
        this.centiles = {};
        return;
      }
      var self = this;
      this.axios
        .get(`/references/${this.userInput.reference}.json`)
        .then((response) => {
          self.centiles = response.data;
        })
        .catch(() => {
          self.userInput.reference = null;
          self.centiles = {};
        });
    },
    userInput: {
      deep: true,
      handler: function () {
        this.dirty = true;
      },
    },
  },
  mounted() {
    if (this.$cookie.getCookie("userInput"))
      this.userInput = this.$cookie.getCookie("userInput");
    this.dirty = false;
  },
  methods: {
    addVisit() {
      this.userInput.visits.push({});
    },
    removeVisit(visit) {
      this.userInput.visits.splice(this.userInput.visits.indexOf(visit), 1);
    },
    dateDiffYears(d1, d2) {
      return (d1 - d2) / (1000 * 60 * 60 * 24 * 365.25);
    },
    saveUserInput() {
      this.$cookie.setCookie("userInput", this.userInput);
      this.dirty = false;
    },
    resetUserInput() {
      this.userInput = {
        reference: null,
        birthdate: null,
        sex: null,
        visits: [{}],
      };
      this.$cookie.removeCookie("userInput");
      this.dirty = false;
    },
  },
};
</script>
