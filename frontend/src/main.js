import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

require('@/assets/main.scss')
require('./styles/main.scss')


const app = createApp(App)
app
    .use(router)
    .use(store)
app
    .mount('#app')
