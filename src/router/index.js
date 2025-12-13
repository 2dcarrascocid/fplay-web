import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import Servicios from "../pages/Servicios.vue";
import Contacto from "../pages/Contacto.vue";
import Nosotros from "../pages/Nosotros.vue";
import ProductsListView from "../views/ProductsListView.vue";
import FairPlayProjectView from "../views/FairPlayProjectView.vue";
import FairPlayArenaView from "../views/FairPlayArenaView.vue";
import Gracias from "../components/Gracias.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: Home },
        { path: "/servicios", component: Servicios },
        { path: "/contacto", component: Contacto },
        { path: "/nosotros", component: Nosotros },
        { path: "/productos", component: ProductsListView },
        { path: "/productos/fair-play", component: FairPlayProjectView },
        { path: "/productos/fair-play-arena", component: FairPlayArenaView },
        { path: '/gracias', component: Gracias },
    ],
});
