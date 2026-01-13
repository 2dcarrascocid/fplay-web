import { createRouter, createWebHistory } from "vue-router";
import { updateHead } from "../utils/seo";

import Home from "../pages/Home.vue";
import Servicios from "../views/Servicios.vue";
import Contacto from "../pages/Contacto.vue";
import Nosotros from "../views/Nosotros.vue";
import ProductsListView from "../views/ProductsListView.vue";
import FairPlayProjectView from "../views/FairPlayProjectView.vue";
import FairPlayArenaView from "../views/FairPlayArenaView.vue";
import TenderBotView from "../views/TenderBotView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import Gracias from "../components/Gracias.vue";

// TenderBot Module Views
import TenderBotCheckout from "../modules/tenderbot/pages/CheckoutView.vue";
import TenderBotValidacion from "../modules/tenderbot/pages/ValidacionPago.vue";

const routes = [
    {
        path: "/",
        component: Home,
        meta: {
            title: "Fair Play Chile | Tecnología y Gestión Digital",
            description: "Desarrollamos soluciones tecnológicas y plataformas digitales para organizaciones modernas. Automatizamos procesos, mejoramos la gestión y potenciamos el crecimiento de tu negocio."
        }
    },
    {
        path: "/servicios",
        component: Servicios,
        meta: {
            title: "Servicios Tecnológicos | Fair Play Chile",
                description: "Ofrecemos servicios de desarrollo de software, automatización de procesos, control operativo y soluciones digitales a medida para organizaciones modernas."
        }
    },
    {
        path: "/contacto",
        component: Contacto,
        meta: {
            title: "Contacto | Fair Play Chile",
            description:
            "Ponte en contacto con nuestro equipo para conocer cómo nuestras soluciones tecnológicas pueden ayudar a optimizar la gestión y los procesos de tu organización."
        }
            },
    {
        path: "/nosotros",
        component: Nosotros,
        meta: {
            title: "Quiénes Somos | Fair Play Chile",
            description:
            "Conoce al equipo detrás de Fair Play Chile y nuestra visión en el desarrollo de soluciones tecnológicas, productos digitales y plataformas de gestión para organizaciones modernas."
        }
    },
    {
        path: "/productos",
        component: ProductsListView,
        meta: {
            title: "Productos Tecnológicos para Deportes | Fair Play Chile",
            description: "Explora nuestras soluciones de software: Fair Play Arena y más. Herramientas diseñadas para la gestión eficiente del deporte."
        }
    },
    {
        path: "/productos/fair-play",
        component: FairPlayProjectView,
        meta: {
            title: "FairPlay Club: Software de Gestión Deportiva",
            description: "Una solución moderna para la gestión de clubes deportivos."
        }
    },
    {
        path: "/productos/fair-play-arena",
        component: FairPlayArenaView,
        meta: {
            title: "FairPlay Arena: App para Deportistas y Clubes",
            description: "Únete a Arena: organiza partidos, crea tu perfil deportivo y encuentra eventos cerca de ti. La red social del deporte amateur.",
            jsonLd: {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "name": "FairPlay Arena",
                "applicationCategory": "SportsApplication",
                "operatingSystem": "Web, Android, iOS",
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "CLP"
                },
                "description": "Plataforma para conectar deportistas, equipos y ligas. Organiza partidos, registra rendimiento y construye tu reputación deportiva."
            }
        }
    },
    {
        path: "/productos/tender-bot",
        component: TenderBotView,
        meta: {
            title: "Tender Bot: Agente Autónomo de Licitaciones",
            description: "Inteligencia artificial que busca, lee, analiza y filtra bases de licitaciones. Tu analista comercial 24/7."
        }
    },
    // TenderBot Checkout Routes
    {
        path: "/tenderbot/planes",
        redirect: "/tenderbot/checkout" // Redirigir al wizard ya que el paso 1 es planes
    },
    {
        path: "/tenderbot/checkout",
        component: TenderBotCheckout,
        meta: {
            title: "Suscripción Tender Bot",
            description: "Elige tu plan y comienza a automatizar tus licitaciones."
        }
    },
    {
        path: "/tenderbot/pago/validacion",
        component: TenderBotValidacion,
        meta: {
            title: "Procesando Pago | Tender Bot"
        }
    },
    {
        path: '/gracias',
        component: Gracias,
        meta: {
            title: "Gracias por contactarnos | Fair Play Chile",
            description: "Hemos recibido tu mensaje. Nos pondremos en contacto contigo a la brevedad."
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFoundView,
        meta: {
            title: "Página no encontrada | Fair Play Chile",
            description: "Lo sentimos, la página que buscas no existe."
        }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    // Update SEO tags based on route meta
    if (to.meta) {
        updateHead(to.meta);
    }
    next();
});

export default router;
