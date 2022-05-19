import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vuelidate from 'vuelidate'

createApp(App).use(router).use(Vuelidate).mount('#app')

// import Parallax from 'parallax-js'