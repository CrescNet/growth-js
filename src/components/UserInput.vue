<template>
  <div>
    <q-card-section>
      <q-select
        outlined
        label="Reference"
        stack-label
        emit-value
        map-options
        v-model="local.reference"
        :options="availableReferences"
      />

      <br />

      <div class="q-gutter-sm">
        <q-radio v-model="local.sex" val="male" label="Male" />
        <q-radio v-model="local.sex" val="female" label="Female" />
      </div>

      <br />

      <q-input
        outlined
        type="date"
        label="Date of birth"
        stack-label
        debounce="500"
        v-model="local.birthdate"
      />
    </q-card-section>

    <q-separator inset />

    <q-card-section>
      <q-markup-table>
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
                label="Add row"
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
  data () {
    return {
      showQrCode: false
    }
  },
  computed: {
    local () {
      return this.modelValue ? this.modelValue : {};
    },
  },
  methods: {
    update (key, value) {
      this.$emit("update:modelValue", { ...this.modelValue, [key]: value });
    },
    addVisit() {
      this.local.visits.push({});
    },
    removeVisit(visit) {
      this.local.visits.splice(this.local.visits.indexOf(visit), 1);
    },
  },
};
</script>