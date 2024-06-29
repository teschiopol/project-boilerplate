import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import App from './App.vue'
import Button from "primevue/button"

import './style.css'
import 'primeicons/primeicons.css'

const app = createApp(App);

app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.my-app-dark',
        }
    }
});

app.component('PrimeButton', Button);

app.mount('#app')
