import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";

import App from "./App.vue";
import "./styles/main.css";

import * as VueGtag from "vue-gtag";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(VueGtag.default || VueGtag, {
    config: { id: import.meta.env.VITE_GA_MEASUREMENT_ID }
}, router);
app.mount("#app");
