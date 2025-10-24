import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '@/router'
import '@/styles/global.css'
import { initSentry } from './instrument'

const app = createApp(App)

app.use(createPinia())
app.use(router)

initSentry(app)

app.mount('#app')
