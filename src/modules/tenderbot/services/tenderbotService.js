import api from '@/services/api';
import planesData from '@/assets/planes.json';

export const tenderbotService = {
    // Planes
    getPlanes() {
        // Return local data wrapped in a structure compatible with axios response
        return Promise.resolve({ data: planesData });
    },

    // Clientes
    createCliente(clienteData) {
        return api.post('/tenderbot/clientes', clienteData);
    },

    // Suscripciones
    createSuscripcion(suscripcionData) {
        return api.post('/tenderbot/suscripciones', suscripcionData);
    },

    // Pagos
    getPagos(suscripcionId) {
        return api.get(`/tenderbot/pagos`, { params: { suscripcion_id: suscripcionId } });
    },

    // Webpay
    startWebpayPlus(pagoId, payload = {}) {
        const basePayload = { returnUrl: `${window.location.origin}/tenderbot/pago/validacion` };
        return api.post(
            `/tenderbot/pagos/${pagoId}/init-webpay`,
            { ...basePayload, ...payload }
        );
    },

    commitWebpay(token) {

        return api.post('/tenderbot/pagos/webpay-commit', { token_ws: token });
    }
};
