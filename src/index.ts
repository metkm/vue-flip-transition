import { App } from "vue";
import Flipper from "./Flipper.vue";

export default {
  install: (app: App) => {
    app.component("Flipper", Flipper)
  }
}
