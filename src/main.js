
import { createApp } from 'vue'
//import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import router from './router/routes'
import './assets/style.css'

const app = createApp(App);
app.use(router);
app.use(MotionPlugin);
app.mount('#app')
