/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import store from './store';

const app = createApp(App)

registerPlugins(app)

app.use(store) // Menggunakan store Vuex dengan Vue 3

app.mount("#app");