import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import './assets/scroll-snap.css'
import './assets/simple-scale.css'

createApp(App).use(router).mount('#app')

