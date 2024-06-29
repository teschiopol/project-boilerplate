import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import App from './App.vue'

import Button from "primevue/button"

import './style.css'
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

const app = createApp(App);

app.use(PrimeVue);

app.component('PrimeButton', Button);

app.mount('#app')
