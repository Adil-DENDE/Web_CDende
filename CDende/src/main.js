import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// BOOTSTRAP CSS
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle';
import 'primeicons/primeicons.css'


const app = createApp(App)
app.use(bootstrap)
app.use(createPinia())
app.use(router)

app.mount('#app')
