import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import { storeKey, useStore } from '@/store/store'

const init = async () => {
    const app = createApp(App)
    app.provide(storeKey, useStore())
    app.mount('#app')
}

init()
    .then(() => console.log('App initialized 🚀'))
    .then(() => console.log('App created by Herbie Vine'))
    .then(() => console.log('https://github.com/hebievine'))
