<template>
  <q-layout view="hHh lpR fff">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar square>
            <img src="@/assets/logo.svg" />
          </q-avatar>
          Growth JS
        </q-toolbar-title>
        <q-select
          dense
          emit-value
          map-options
          v-model="$root.$i18n.locale"
          :options="[{ value: 'de', label: 'DE' }, { value: 'en', label: 'EN' }]"
        />
      </q-toolbar>
    </q-header>

    <q-page-container class="q-my-sm q-pa-md q-gutter-y-md">
      <q-splitter v-model="splitterModel" :limits="[30, 80]">
        <template v-slot:before>
          <q-card bordered class="q-mr-md q-mb-md">
            <q-card-section class="description q-pb-none">
              <strong>{{ $t('description.label') }}</strong>:
              <p>{{$t('description.text') }}</p>
            </q-card-section>
            <q-card-section class="data-privacy q-pt-none">
              <strong>{{ $t('dataPrivacy.label') }}</strong>:
              <p>{{ $t('dataPrivacy.text') }}</p>
            </q-card-section>
          </q-card>

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
                  :label="$t('saveForLater')"
                  @click="saveUserInput"
                />
                <q-btn
                  color="primary"
                  icon="download"
                  :label="$t('saveToFile')"
                  @click="saveFile"
                />
                <q-btn
                  color="primary"
                  icon="qr_code_2"
                  :label="$t('showQrCode')"
                  @click="showQrCode = true"
                />
                <q-btn
                  color="red"
                  icon="restart_alt"
                  :label="$t('resetData')"
                  @click="resetUserInput"
                />
              </q-btn-group>
            </q-card-section>
          </q-card>
        </template>

        <template v-slot:separator>
          <q-avatar color="primary" text-color="white" size="30px" icon="drag_indicator" />
        </template>

        <template v-slot:after>
          <div class="q-ml-md">
            <q-card bordered>
              <q-tabs v-model="chartTab" dense active-color="primary" indicator-color="primary" align="justify" narrow-indicator>
                <q-tab name="height" :label="$t('height')" />
                <q-tab name="weight" :label="$t('weight')" />
              </q-tabs>

              <q-separator />

              <q-tab-panels v-model="chartTab" animated>
                <q-tab-panel name="height">
                  <GrowthChart
                    :propertyName="$t('height') + ' (cm)'"
                    :scatterData="heightData"
                    :centileData="
                      centiles.height ? centiles.height[userInput.sex] : []
                    "
                  />
                </q-tab-panel>
                <q-tab-panel name="weight">
                  <GrowthChart
                    :propertyName="$t('weight') + ' (kg)'"
                    :scatterData="weightData"
                    :centileData="
                      centiles.weight ? centiles.weight[userInput.sex] : []
                    "
                  />
                </q-tab-panel>
              </q-tab-panels>
            </q-card>
          </div>
        </template>
      </q-splitter>
    </q-page-container>

    <q-dialog v-model="showQrCode">
      <q-card>
        <q-card-section class="text-center" v-t="'qrCodeDescription'" />
        <q-card-section class="text-center">
          <qrcode-vue
            :value="JSON.stringify(userInput)"
            :size="Math.sqrt(userInput.visits.length) * 100"
            level="H"
          />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat :label="$t('close')" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title class="text-subtitle1">
          &copy; {{ $t('copyrightNotice') }}
        </q-toolbar-title>
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
      splitterModel: ref(57),
      chartTab: 'height',
    };
  },
  computed: {
    availableReferences() {
      return [
        { value: null, label: this.$t("selectReference") },
        { value: "normal_german", label: this.$t("normal_german"), url: 'https://doi.org/10.1007/s001120170107' },
        { value: "noonan_japan", label: this.$t("noonan_japan"), url: 'https://doi.org/10.1038/pr.2015.254' },
      ]
    },
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
        .get(`./references/${this.userInput.reference}.json`)
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
    if (localStorage.getItem("userInput"))
      this.userInput = JSON.parse(localStorage.getItem("userInput"));
    this.dirty = false;
  },
  methods: {
    dateDiffYears(d1, d2) {
      return (d1 - d2) / (1000 * 60 * 60 * 24 * 365.25);
    },
    saveUserInput() {
      localStorage.setItem("userInput", JSON.stringify(this.userInput));
      this.dirty = false;
    },
    resetUserInput() {
      this.userInput = {
        reference: null,
        birthdate: null,
        sex: null,
        visits: [{}],
      };
      localStorage.removeItem("userInput");
      this.dirty = false;
    },
    saveFile: function() {
      const data = JSON.stringify(this.userInput)
      const blob = new Blob([data], {type: 'text/plain'})
      const e = document.createEvent('MouseEvents'),
        a = document.createElement('a'),
        today = new Date().toLocaleDateString();
      a.download = "data_" + today + ".json";
      a.href = window.URL.createObjectURL(blob);
      a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
      e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      a.dispatchEvent(e);
    }
  },
};
</script>

<style>
body {
  overflow-y: scroll;
}
</style>
