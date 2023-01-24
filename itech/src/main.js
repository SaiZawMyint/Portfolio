import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'aos/dist/aos.css'
import '@assets/css/style.css'
import '@assets/css/itech-animation.css'

import store from './stores/store.js'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router).use(store)

app.mount('#app')
