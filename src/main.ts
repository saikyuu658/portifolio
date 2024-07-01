import 'primevue/resources/themes/aura-light-green/theme.css'
import './reset.css'
import './style.css'
import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice'



let app = createApp(App) 
    .use(PrimeVue)
    .use(ToastService)
    
app.config.globalProperties.window = window;
app.mount('#app');