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
          :options="[
            { value: 'de', label: 'DE' },
            { value: 'en', label: 'EN' },
          ]"
        />
      </q-toolbar>
    </q-header>

    <q-page-container class="q-mt-sm q-pa-md q-gutter-y-md">
      <q-splitter v-model="splitterModel" :limits="[30, 80]" class="q-mb-md">
        <template v-slot:before>
          <q-card bordered class="q-mr-md q-mb-md">
            <q-card-section class="description q-pb-none">
              <strong>{{ $t("description.label") }}</strong
              >:
              <p>{{ $t("description.text") }}</p>
            </q-card-section>
            <q-card-section class="data-privacy q-pt-none">
              <strong>{{ $t("dataPrivacy.label") }}</strong
              >:
              <p>{{ $t("dataPrivacy.text") }}</p>
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
                  :label="$t('export.title')"
                  @click="showExportDialog = true"
                />
                <q-btn
                  color="primary"
                  icon="file_download"
                  :label="$t('import.title')"
                  @click="showImportDialog = true"
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
          <q-avatar
            color="primary"
            text-color="white"
            size="30px"
            icon="drag_indicator"
          />
        </template>

        <template v-slot:after>
          <div class="q-ml-md">
            <q-card bordered>
              <q-tabs
                v-model="chartTab"
                dense
                active-color="primary"
                indicator-color="primary"
                align="justify"
                narrow-indicator
              >
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

    <ExportDialog v-model:show="showExportDialog" v-model:dirty="dirty" :userInput="userInput" />

    <ImportDialog v-model:show="showImportDialog" v-model:userInput="userInput" />

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title class="text-subtitle1">
          &copy; {{ $t("copyrightNotice") }}
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import GrowthChart from "./components/GrowthChart.vue";
import UserInput from "./components/UserInput.vue";
import ExportDialog from "./components/ExportDialog.vue";
import ImportDialog from "./components/ImportDialog.vue";

export default {
  name: "App",
  components: { GrowthChart, UserInput, ExportDialog, ImportDialog },
  data() {
    return {
      userInput: {
        reference: null,
        birthdate: null,
        sex: null,
        visits: [{}],
      },
      centiles: {},
      showExportDialog: false,
      showImportDialog: false,
      splitterModel: ref(57),
      chartTab: "height",
      dirty: false,
    };
  },
  computed: {
    availableReferences() {
      return [
        { value: null, label: this.$t("selectReference") },
        {
          value: "normal_german",
          label: this.$t("normal_german"),
          authors: "Kromeyer-Hauschild et al. 2001",
          url: "https://doi.org/10.1007/s001120170107",
        },
        {
          value: "noonan_japan",
          label: this.$t("noonan_japan"),
          authors: "Isojima et al. 2016",
          url: "https://doi.org/10.1038/pr.2015.254",
        },
        {
          value: "achondroplasia_sweden",
          label: this.$t("achondroplasia_sweden"),
          authors: "Merker et al. 2019",
          url: "https://doi.org/10.1002/ajmg.a.38853",
        },
        {
          value: "hypochondroplasia_argentinia",
          label: this.$t("hypochondroplasia_argentinia"),
          authors: "Arenas et al. 2018",
          url: "https://doi.org/10.1515/jpem-2018-0046",
        },
        {
          value: "trisomy21_america",
          label: this.$t("trisomy21_america"),
          authors: "Zemel et al. 2015",
          url: "https://doi.org/10.1542/peds.2015-1652",
        },
      ];
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
  },
  watch: {
    userInput: {
      deep: true,
      handler: function () {
        this.dirty = true;
      },
    },
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
  },
};
</script>

<style>
body {
  overflow-y: scroll;
}
</style>
