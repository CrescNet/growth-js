<template>
  <div>
    <q-card-section>
      <div class="row">
        <div class="col-12 col-md">
          <q-select
            v-model="local.reference"
            outlined
            :label="t('selectReference')"
            emit-value
            map-options
            :options="availableReferences"
          />
          <span
            class="text-caption"
            v-if="selectedReference && selectedReference.url"
          >
            {{ t("source") }}:
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
          <q-radio v-model="local.sex" val="male" :label="t('male')" />
          <q-radio v-model="local.sex" val="female" :label="t('female')" />
        </div>

        <div class="col-12 col-md">
          <q-input
            outlined
            type="date"
            :label="t('birthdate')"
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
              {{ t("height") + ' (cm)' }}
            </th>
            <th>
              {{ t("weight") + ' (kg)' }}
            </th>
            <th>
              {{ t('bmi') + ' (kg/m²)' }}
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <visit-row
            v-for="(visit, index) in local.visits"
            :key="index"
            v-model="local.visits[index]"
            :birthdate="local.birthdate"
            :bmi-reference-data="bmiReferenceData"
            :height-reference-data="heightReferenceData"
            :weight-reference-data="weightReferenceData"
            @deleteRow="removeVisit(visit)"
          />
          <tr class="q-tr--no-hover">
            <td colspan="5">
              <q-btn
                rounded
                color="secondary"
                icon="add"
                :label="t('addRow')"
                @click="addVisit"
              />
            </td>
          </tr>
        </tbody>
      </q-markup-table>
    </q-card-section>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import VisitRow from './VisitRow.vue'
import { useI18n } from 'vue-i18n'
import { UserInput, Visit, ReferenceDeclaration, ReferenceDataRow } from './models'

export default defineComponent({
  props: {
    modelValue: {
      type: Object as () => UserInput,
      default: () => { {} }
    },
    availableReferences: {
      type: Array as () => ReferenceDeclaration[],
      default: () => []
    },
    bmiReferenceData: Array as () => ReferenceDataRow[],
    heightReferenceData: Array as () => ReferenceDataRow[],
    weightReferenceData: Array as () => ReferenceDataRow[]
  },
  components: { VisitRow },
  setup (props) {
    const { t } = useI18n()
    const local = computed(() => props.modelValue)

    return {
      t,
      local,

      selectedReference: computed(
        () => props.availableReferences.find((r) => r.value == local.value.reference)
      ),

      addVisit () {
        if (!local.value.visits)
          local.value.visits = []
        local.value.visits.push({})
      },

      removeVisit (visit: Visit) {
        local.value.visits?.splice(local.value.visits?.indexOf(visit), 1)
      }
    }
  }
})
</script>
