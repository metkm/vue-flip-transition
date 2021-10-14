import { createApp } from 'vue';
import App from './App.vue';
import Flipper from "../../src/index";

createApp(App)
.use(Flipper)
.mount('#app');
