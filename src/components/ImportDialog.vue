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
            outlined
            v-model="jsonFile"
            :label="$t('import.file.label')"
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
            :label="$t('import.file.title')"
            @click="importJsonFile"
          />
        </div>

        <div class="row justify-between items-center">
          <q-input
            outlined
            type="textarea"
            v-model="jsonString"
            :label="$t('import.json.label')"
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
            :label="$t('import.json.title')"
            @click="importJsonString"
          />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: "ImportDialog",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    userInput: Object,
  },
  data() {
    const fileReader = new FileReader();
    fileReader.onload = (e) =>
      this.$emit("update:userInput", JSON.parse(e.target.result));

    return {
      fileReader: fileReader,
      jsonString: null,
      jsonFile: null,
    };
  },
  methods: {
    importJsonString() {
      try {
        this.$emit("update:userInput", JSON.parse(this.jsonString));
        this.jsonString = null;
        this.$emit("update:show", false);
      } catch (e) {
        console.log(e.message);
      }
    },
    importJsonFile() {
      try {
        this.fileReader.readAsText(this.jsonFile);
        this.jsonFile = null;
        this.$emit("update:show", false);
      } catch (e) {
        console.log(e.message);
      }
    },
  },
};
</script>