<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar square>
            <img src="@/assets/logo.svg" />
          </q-avatar>
          Growth JS
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container class="q-my-md q-pa-md q-gutter-y-md">
      <q-card bordered>
        <q-card-section class="description">
          <strong v-t="'description.label'" />:
          <p v-t="'description.text'" />
        </q-card-section>
        <q-card-section class="data-privacy">
          <strong v-t="'dataPrivacy.label'" />:
          <p v-t="'dataPrivacy.text'" />
        </q-card-section>
      </q-card>

      <q-splitter v-model="splitterModel" :limits="[20, 80]">
        <template v-slot:before>
          <q-card bordered class="q-mr-md">
            <user-input
              v-model="userInput"
              :availableReferences="availableReferences"
            />
            <q-card-section class="text-center">
              <q-btn-group rounded push>
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
        </template>

        <template v-slot:after>
          <div class="q-ml-md">
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
        </template>
      </q-splitter>
    </q-page-container>

    <q-dialog v-model="showQrCode">
      <q-card>
        <q-card-section class="text-center">
          You can scan this QR code to get your entered data as JSON format.<br />
          This format is machine-readable.
        </q-card-section>
        <q-card-section class="text-center">
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

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title class="text-subtitle1">
          &copy; CrescNet, Medical Faculty, University of Leipzig 2021
        </q-toolbar-title>
        <q-btn
          type="a"
          href="https://github.com/ChristophB/growth-js"
          target="_blank"
          flat
          rounded
          dense
          label="View on GitHub"
        />
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import GrowthChart from "./components/GrowthChart.vue";
import UserInput from "./components/UserInput.vue";
import QrcodeVue from "qrcode.vue";

export default {
  name: "App",
  components: { GrowthChart, UserInput, QrcodeVue },
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
      splitterModel: ref(65),
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
