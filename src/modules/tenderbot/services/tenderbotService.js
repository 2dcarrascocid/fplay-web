import api from '@/services/api';

export const tenderbotService = {
    // Planes
    getPlanes() {
        return api.get('/tenderbot/planes');
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
    startWebpayPlus(pagoId) {
        console.log("commitWebpay:::::::::")
        return api.post(`/tenderbot/pagos/${pagoId}/init-webpay`, {  returnUrl: 'http://localhost:8080/tenderbot/pago/validacion' });
    },

    commitWebpay(token) {

        return api.post('/tenderbot/pagos/webpay-commit', { token_ws: token });
    }
};
