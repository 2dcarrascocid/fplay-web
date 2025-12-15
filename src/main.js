import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";

import App from "./App.vue";
import "./styles/main.css";

import VueGtag from "vue-gtag-next";

const app = createApp(App);
app.use(createPinia());
app.use(router);

// Register VueGtag plugin correctly
app.use(VueGtag, {
    property: { id: import.meta.env.VITE_GA_MEASUREMENT_ID }
});

app.mount("#app");
