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
            title: "Fair Play Chile | Gestión y Tecnología Deportiva",
            description: "Expertos en gestión de ligas, control de acceso y tecnología deportiva. Descubre cómo profesionalizar tu organización deportiva con Fair Play Chile."
        }
    },
    {
        path: "/servicios",
        component: Servicios,
        meta: {
            title: "Servicios de Gestión Deportiva | Fair Play Chile",
            description: "Ofrecemos control de acceso, gestión de mesas, administración financiera y soluciones tecnológicas para clubes y ligas deportivas."
        }
    },
    {
        path: "/contacto",
        component: Contacto,
        meta: {
            title: "Contáctanos | Fair Play Chile",
            description: "¿Necesitas ayuda con tu liga o evento deportivo? Ponte en contacto con el equipo de Fair Play Chile hoy mismo."
        }
    },
    {
        path: "/nosotros",
        component: Nosotros,
        meta: {
            title: "Nosotros | Fair Play Chile",
            description: "Conoce al equipo detrás de Fair Play Chile. Nuestra misión es elevar el estándar del deporte amateur y profesional."
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
            title: "Software de Gestión Deportiva | Fair Play Project",
            description: "La solución integral para la administración de campeonatos, partidos y estadísticas. Optimiza tu liga con Fair Play Project."
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
