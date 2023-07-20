import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'aos/dist/aos.css'
import '@assets/css/style.css'
import '@assets/css/itech-animation.css'
import 'aos/dist/aos.css'

import './assets/js/customs.js'

import store from './stores/store.js'
import App from './App.vue'
import router from './router'
import Aos from 'aos'

const app = createApp(App)
app.use(router).use(store).use(Aos.init())

app.mount('#app')