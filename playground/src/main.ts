import { createApp } from 'vue';
import App from './App.vue';
// import Flipper from "../../src/index";
import Flipper from "vue-flip-transition";

createApp(App)
.use(Flipper)
.mount('#app');
