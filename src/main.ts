import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import 'xe-utils'
import 'vxe-table/lib/style.css'

// 加载全局样式
import './styles/index.scss'

const app = createApp(App)

app.use(router)


// 自动注册全局组件
const modules = import.meta.globEager('./components/**/index.ts')
for (const path in modules) {
  app.use(modules[path].default)
}

app.mount('#app')
