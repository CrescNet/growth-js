<template>
  <q-dialog
    :modelValue="show"
    @update:modelValue="$emit('update:show', $event)"
  >
    <q-card>
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6" v-t="'import.title'" />
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>

      <q-separator inset />

      <q-card-section class="q-gutter-sm">
        <p v-t="'import.description'" />

        <div class="row justify-between items-center">
          <q-file
            v-model="jsonFile"
            outlined
            :label="t('import.file.label')"
            class="col-7"
            accept=".json"
          >
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
          <q-btn
            rounded
            stack
            color="primary"
            icon="sync"
            class="col-4"
            :disabled="!jsonFile"
            :label="t('import.file.title')"
            @click="importJsonFile"
          />
        </div>

        <div class="row justify-between items-center">
          <q-input
            outlined
            type="textarea"
            v-model="jsonString"
            :label="t('import.json.label')"
            class="col-7"
            rows="1"
          />
          <q-btn
            rounded
            stack
            color="primary"
            icon="sync"
            class="col-4"
            :disabled="!jsonString"
            :label="t('import.json.title')"
            @click="importJsonString"
          />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n';
import { UserInput } from './models';

export default defineComponent({
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    userInput: {
      type: Object as () => UserInput,
      default: () => { {} }
    },
  },
  emits: ['update:userInput', 'update:show'],
  setup (props, { emit }) {
    const { t } = useI18n()
    const jsonString = ref(undefined)
    const jsonFile = ref(undefined as File|undefined)

    const fileReader = new FileReader()
    fileReader.onload = (e) => {
      if (e.target)
        emit('update:userInput', JSON.parse(e.target.result as string))
    }

    return {
      t,
      fileReader,
      jsonString,
      jsonFile,

      importJsonString() {
        try {
          if (jsonString.value)
            emit('update:userInput', JSON.parse(jsonString.value))
          jsonString.value = undefined
          emit('update:show', false)
        } catch (e) {
          console.log(e)
        }
      },
      importJsonFile() {
        try {
          if (jsonFile.value) fileReader.readAsText(jsonFile.value)
          jsonFile.value = undefined
          emit('update:show', false)
        } catch (e) {
          console.log(e)
        }
      }
    }
  }
})
</script>
