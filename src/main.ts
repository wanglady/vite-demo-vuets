import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import Store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

const app = createApp(App)
app.use(Router)
app.use(Store)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.mount('#app')
