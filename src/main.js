import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios"
import VueAxios from "vue-axios"
import { VueCookieNext } from "vue-cookie-next"
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

createApp(App).use(Quasar, quasarUserOptions).use(VueAxios, axios).use(VueCookieNext).mount('#app')

VueCookieNext.config({ expire: Infinity, secure: true, sameSite: 'Strict' })
