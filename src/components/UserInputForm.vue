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

<script lang="ts">
import { defineComponent, computed } from 'vue'
import VisitRow from './VisitRow.vue'
import { useI18n } from 'vue-i18n'
import { UserInput, Visit, ReferenceDeclaration } from './models'

export default defineComponent({
  props: {
    modelValue: {
      type: Object as () => UserInput,
      default: () => { {} }
    },
    availableReferences: {
      type: Array as () => ReferenceDeclaration[],
      default: () => []
    }
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