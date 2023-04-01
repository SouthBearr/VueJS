import { createApp } from 'vue'
import { createPinia } from 'pinia';
import router from './router';
import './assets/scss/main.scss'
import App from './App.vue'
import MainLayout from '@/layout/MainLayout.vue'

const pinia = createPinia()
const app = createApp(App)

app.component('MainLayout',MainLayout)

app.use(pinia)
app.use(router);
app.mount('#app')

