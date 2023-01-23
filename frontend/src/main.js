import { createApp } from 'vue'
import { createHead } from "@vueuse/head"

import router from './router'
import store from './store'
import App from './App.vue'

const head = createHead()

require('@/assets/main.scss')
require('./styles/main.scss')

const app = createApp(App)
app
    .use(store)
    .use(head)
    .use(router)
app
    .mount('#app')
