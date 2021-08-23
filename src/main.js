import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios"
import VueAxios from "vue-axios"
import { VueCookieNext } from "vue-cookie-next"
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import { createI18n } from 'vue-i18n/index'
import de from './locales/de.json'
import en from './locales/en.json'

VueCookieNext.config({ expire: Infinity, secure: true, sameSite: 'Strict' })
console.log(de)
const i18n = createI18n({
  locale: 'de',
  fallbackLocale: 'en',
  messages: {
    de: de, en: en
  },
})

createApp(App).use(Quasar, quasarUserOptions).use(VueAxios, axios).use(VueCookieNext).use(i18n).mount('#app')
