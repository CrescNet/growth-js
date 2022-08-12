<template>
  <q-layout view="hHh lpR fff">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar square>
            <img src="/logo.svg" />
          </q-avatar>
          Growth JS
        </q-toolbar-title>
        <language-selector />
      </q-toolbar>
    </q-header>

    <q-page-container class="q-mt-sm q-pa-md q-gutter-y-md">
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title v-if="copyrightNotice" class="text-subtitle1">
          &copy; {{ copyrightNotice }}
        </q-toolbar-title>
        <q-toolbar-title v-if="imprintUrl" class="text-subtitle1 text-center">
          <a :href="imprintUrl" class="q-link text-white" v-t="'imprint'" />
        </q-toolbar-title>
        <q-toolbar-title class="text-subtitle1 text-right">
          <span v-if="version" v-html="'v' + version" :title="t('version')" />
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LanguageSelector from 'components/LanguageSelector.vue'
import { version } from '../../package.json'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  components: { LanguageSelector },
  setup () {
    const { t } = useI18n()
    return {
      t,
      imprintUrl: process.env.VUE_APP_IMPRINT_URL,
      copyrightNotice: process.env.VUE_APP_COPYRIGHT_NOTICE,
      version: version
    }
  }
})
</script>

<style lang="sass" scoped>
body
  overflow-y: scroll
</style>
