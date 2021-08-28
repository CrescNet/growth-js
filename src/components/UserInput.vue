<template>
  <div>
    <q-card-section>
      <div class="row">
        <div class="col-12 col-md">
          <q-select
            outlined
            :label="$t('reference')"
            stack-label
            emit-value
            map-options
            v-model="local.reference"
            :options="availableReferences"
          />
          <span
            class="text-caption"
            v-if="selectedReference && selectedReference.url"
          >
            {{ $t("source") }}:
            <a
              :href="selectedReference.url"
              target="_blank"
              class="q-link text-primary"
            >
              {{
                selectedReference.authors
                  ? selectedReference.authors
                  : selectedReference.url
              }}
            </a>
          </span>
        </div>

        <div class="col-12 col-md q-gutter-md text-center q-pt-sm">
          <q-radio v-model="local.sex" val="male" :label="$t('male')" />
          <q-radio v-model="local.sex" val="female" :label="$t('female')" />
        </div>

        <div class="col-12 col-md">
          <q-input
            outlined
            type="date"
            :label="$t('birthdate')"
            stack-label
            debounce="500"
            v-model="local.birthdate"
          />
        </div>
      </div>
    </q-card-section>

    <q-separator inset />

    <q-card-section>
      <q-markup-table>
        <thead>
          <tr>
            <th v-t="'date'" />
            <th>
              {{ $t("height") + " (" + $t("inUnit", { unit: "cm" }) + ")" }}
            </th>
            <th>
              {{ $t("weight") + " (" + $t("inUnit", { unit: "kg" }) + ")" }}
            </th>
            <th>
              {{ $t('bmi') + " (" + $t('inUnit', { unit: "kg/m²" }) + ")"}}
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <VisitRow
            v-for="(visit, index) in local.visits"
            :key="index"
            v-model="local.visits[index]"
            @deleteRow="removeVisit(visit)"
          />
          <tr>
            <td colspan="4">
              <q-btn
                rounded
                color="secondary"
                icon="add"
                :label="$t('addRow')"
                @click="addVisit"
              />
            </td>
          </tr>
        </tbody>
      </q-markup-table>
    </q-card-section>
  </div>
</template>

<script>
import VisitRow from "./VisitRow.vue";

export default {
  props: ["modelValue", "availableReferences"],
  components: { VisitRow },
  computed: {
    local() {
      return this.modelValue ? this.modelValue : {};
    },
    selectedReference() {
      return this.availableReferences.find(
        (r) => r.value == this.local.reference
      );
    },
  },
  methods: {
    addVisit() {
      this.local.visits.push({});
    },
    removeVisit(visit) {
      this.local.visits.splice(this.local.visits.indexOf(visit), 1);
    },
  },
};
</script>