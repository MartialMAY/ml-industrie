import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
// import VueMeta from 'vue-meta'

require('@/assets/main.scss')
require('./styles/main.scss')

const app = createApp(App)
app
    .use(router)
    .use(store)
    /* .use(VueMeta, {
        refreshOnceOnNavigation: true,
        keyName: 'metaInfo'
    }) */
app
    .mount('#app')
