import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios"
import VueAxios from "vue-axios"
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import { createI18n } from 'vue-i18n/index'
import de from './locales/de.json'
import en from './locales/en.json'

const i18n = createI18n({
  locale: navigator.language || navigator.userLanguage,
  fallbackLocale: 'en',
  messages: {
    de: de, en: en
  },
})

createApp(App).use(Quasar, quasarUserOptions).use(VueAxios, axios).use(i18n).mount('#app')
