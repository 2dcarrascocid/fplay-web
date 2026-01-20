import { defineStore } from 'pinia';
import { tenderbotService } from '../services/tenderbotService';

export const useTenderbotStore = defineStore('tenderbot', {
    state: () => ({
        planes: [],
        selectedPlan: null,
        selectedPeriodicidad: 'MENSUAL',
        montoPromocional: null,
        cliente: null,
        suscripcion: null,
        pago: null,
        loading: false,
        error: null,
        currentStep: 1, // 1: Planes, 2: Cliente, 3: Pago
    }),
    actions: {
        async fetchPlanes() {
            this.loading = true;
            this.error = null;
            try {
                const response = await tenderbotService.getPlanes();
                console.log('Planes Response:', response.data); // Debug

                let planesData = [];
                if (Array.isArray(response.data)) {
                    planesData = response.data;
                } else if (response.data && Array.isArray(response.data.data)) {
                    planesData = response.data.data; // A veces viene en { data: [...] }
                } else if (response.data && Array.isArray(response.data.planes)) {
                    planesData = response.data.planes;
                } else {
                    console.error('Formato de respuesta inesperado:', response.data);
                    throw new Error('Formato de respuesta inválido');
                }

                this.planes = planesData.filter(p => p.estado === 'ACTIVO' || p.active !== false); 
            } catch (err) {
                this.error = 'Error al cargar planes';
                console.error(err);
            } finally {
                this.loading = false;
            }
        },
        
        selectPlan(payload) {
            // payload puede ser el plan directo (legacy) o { plan, periodicidad, monto }
            if (payload.plan && payload.periodicidad) {
                this.selectedPlan = payload.plan;
                this.selectedPeriodicidad = payload.periodicidad;
                this.montoPromocional = payload.monto;
            } else {
                this.selectedPlan = payload;
                this.selectedPeriodicidad = 'MENSUAL';
                this.montoPromocional = this.calcularMonto(payload, 'MENSUAL');
            }
            this.currentStep = 2;
        },

        calcularMonto(plan, periodicidad) {
            if (!plan) return 0;
            const base = plan.precio_mensual || 0;
            if (periodicidad === 'SEMESTRAL') {
                return Math.round(base * 6 * 0.95);
            }
            if (periodicidad === 'ANUAL') {
                return Math.round(base * 12 * 0.8);
            }
            return base;
        },

        async registerClienteAndSuscripcion(clienteData) {
            this.loading = true;
            this.error = null;
            try {
                // 1. Crear Cliente
                let clienteResponse;
                try {
                    clienteResponse = await tenderbotService.createCliente(clienteData);
                } catch (err) {
                    if (err.response && err.response.status === 409) {
                        // Email ya existe. Manejo simple por ahora: lanzar error para UI
                        throw new Error('El email ya está registrado.');
                    }
                    throw err;
                }
              
                this.cliente = clienteResponse.data.cliente;

                // 2. Crear Suscripción
                const suscripcionData = {
                    cliente_id: this.cliente.id,
                    plan_id: this.selectedPlan.id,
                    periodicidad: this.selectedPeriodicidad, // Usar del store
                };
                  console.log("data::::::",suscripcionData)
                const suscripcionResponse = await tenderbotService.createSuscripcion(suscripcionData);
                this.suscripcion = suscripcionResponse.data;

                // 3. Obtener Pago (si viene en suscripción o buscarlo)
                if (this.suscripcion.pago_pendiente) {
                    this.pago = this.suscripcion.pago_pendiente;
                } else {
                    // Buscar pago pendiente
                    const pagosResponse = await tenderbotService.getPagos(this.suscripcion.id);
                    // Asumiendo que devuelve array y tomamos el último pendiente
                    const pagos = pagosResponse.data.pagos;

                    this.pago = pagos.find(p => p.estado === 'PENDIENTE') || pagos[0];
                }

                this.currentStep = 3;
            } catch (err) {
                this.error = err.message || 'Error en el registro';
                throw err;
            } finally {
                this.loading = false;
            }
        },

        async initiateWebpay() {
            this.loading = true;
            this.error = null;
            try {
                if (!this.pago?.id) {
                    throw new Error("No hay pago pendiente para iniciar");
                }
                const monto = this.montoPromocional != null
                    ? this.montoPromocional
                    : this.calcularMonto(this.selectedPlan, this.selectedPeriodicidad);

                const response = await tenderbotService.startWebpayPlus(this.pago.id, {
                    monto,
                });
                return response.data; // { token, url }
            } catch (err) {
                this.error = 'Error al iniciar pago';
                throw err;
            } finally {
                this.loading = false;
            }
        },

        async confirmPayment(token) {
            this.loading = true;
            this.error = null;
            try {
                const response = await tenderbotService.commitWebpay(token);
                console.log("!response.data",response.data)
                return response.data;
            } catch (err) {
                this.error = 'Error al confirmar pago';
                throw err;
            } finally {
                this.loading = false;
            }
        },

        resetFlow() {
            this.selectedPlan = null;
            this.selectedPeriodicidad = 'MENSUAL';
            this.montoPromocional = null;
            this.cliente = null;
            this.suscripcion = null;
            this.pago = null;
            this.currentStep = 1;
            this.error = null;
        }
    }
});
