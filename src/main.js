import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios"
import VueAxios from "vue-axios"
import { VueCookieNext } from "vue-cookie-next"

createApp(App).use(VueAxios, axios).use(VueCookieNext).mount('#app')

VueCookieNext.config({ expire: Infinity, secure: true, sameSite: 'Strict' })
