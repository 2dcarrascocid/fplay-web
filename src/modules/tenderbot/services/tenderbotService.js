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

    // Webpay (Placeholder / Hook)
    startWebpayPlus(data) {
        // data puede ser { suscripcionId, pagoId, amount, ... }
        // Si el backend tuviera endpoint: return api.post('/tenderbot/webpay/init', data);
        
        // Mock temporal
        console.log('Iniciando Webpay Plus con:', data);
        return new Promise((resolve) => {
            setTimeout(() => {
                // Simular respuesta de Webpay (token + url)
                resolve({
                    data: {
                        token: 'mock_token_ws_' + Date.now(),
                        url: 'https://webpay3gint.transbank.cl/rswebpaytransaction/api/webpay/v1.0/transactions', // URL real de integración
                    }
                });
            }, 1000);
        });
    }
};
