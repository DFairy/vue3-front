import { createApp } from 'vue'
import './style/common.scss'
import App from './App.vue'
import router from './router'
import { useRem } from './utils/flexible'
import libs from '@/libs'
import 'virtual:svg-icons-register'

useRem()

const app = createApp(App)
app.use(router)
app.use(libs)
app.mount('#app')
