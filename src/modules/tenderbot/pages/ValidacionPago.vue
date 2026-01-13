<template>
  <div class="validacion-page">
    <div class="card">
        <!-- Estado Cargando -->
        <div v-if="loading" class="status-content">
            <div class="spinner"></div>
            <h2>Validando pago...</h2>
            <p>Por favor espera mientras confirmamos la transacción.</p>
        </div>

        <!-- Estado Éxito -->
        <div v-else-if="success" class="status-content success">
            <div class="icon">✅</div>
            <h1>¡Pago Exitoso!</h1>
            <p>Tu suscripción ha sido activada correctamente.</p>
            <div v-if="transaccion" class="receipt">
                <h2>Comprobante de pago</h2>
                <div class="receipt-row" v-if="transaccion.buy_order">
                    <span>Orden de compra</span>
                    <span>{{ transaccion.buy_order }}</span>
                </div>
                <div class="receipt-row" v-if="transaccion.amount">
                    <span>Monto</span>
                    <span>{{ formatMonto(transaccion.amount) }}</span>
                </div>
                <div class="receipt-row" v-if="transaccion.authorization_code">
                    <span>Código de autorización</span>
                    <span>{{ transaccion.authorization_code }}</span>
                </div>
                <div class="receipt-row" v-if="transaccion.transaction_date">
                    <span>Fecha transacción</span>
                    <span>{{ formatFecha(transaccion.transaction_date) }}</span>
                </div>
                <div class="receipt-row" v-if="ultimosDigitosTarjeta">
                    <span>Tarjeta</span>
                    <span>**** **** **** {{ ultimosDigitosTarjeta }}</span>
                </div>
            </div>
            <div class="actions actions-success">
                <button 
                    v-if="transaccion" 
                    class="btn btn-outline" 
                    type="button" 
                    @click="generarPdf"
                >
                    Descargar comprobante (PDF)
                </button>
                <router-link to="/" class="btn btn-primary">Ir al Inicio</router-link>
            </div>
        </div>

        <!-- Estado Fallo -->
        <div v-else class="status-content error">
            <div class="icon">❌</div>
            <h1>Pago Fallido</h1>
            <p>{{ errorMsg || 'Hubo un problema al procesar el pago.' }}</p>
            <div class="actions">
                <router-link to="/tenderbot/checkout" class="btn btn-secondary">Reintentar</router-link>
                <router-link to="/" class="btn btn-outline">Volver al Inicio</router-link>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { tenderbotService } from '../services/tenderbotService';
import jsPDF from 'jspdf';

const route = useRoute();
const loading = ref(true);
const success = ref(false);
const errorMsg = ref('');
const transaccion = ref(null);

onMounted(async () => {
    // Intentar obtener el token de los query params
    const token = route.query.token_ws || route.query.TBK_TOKEN;

    if (!token) {
        // Caso: Usuario anuló la compra (TBK_TOKEN sin token_ws suele indicar anulación en algunos flujos, o simplemente cancel)
        if (route.query.TBK_ID_SESION) {
            errorMsg.value = 'La compra fue anulada por el usuario.';
        } else {
            errorMsg.value = 'No se recibió el token de pago.';
        }
        loading.value = false;
        success.value = false;
        return;
    }

    try {
        // Confirmar transacción en el backend
        const response = await tenderbotService.commitWebpay(token);
        transaccion.value = response?.data || response || null;
        success.value = true;
    } catch (err) {
        console.error(err);
        success.value = false;
        errorMsg.value = 'No pudimos confirmar el pago. ' + (err.response?.data?.message || '');
    } finally {
        loading.value = false;
    }
});

const ultimosDigitosTarjeta = computed(() => {
    const det = transaccion.value?.card_detail || transaccion.value?.cardDetail;
    if (!det) return '';
    return det.last4 || det.last_digits || '';
});

const formatMonto = (monto) => {
    return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(monto || 0);
};

const formatFecha = (fecha) => {
    if (!fecha) return '';
    try {
        const d = new Date(fecha);
        return d.toLocaleString('es-CL');
    } catch {
        return fecha;
    }
};

const generarPdf = () => {
    if (!transaccion.value) return;

    const doc = new jsPDF();
    const marginLeft = 20;
    let cursorY = 20;

    doc.setFontSize(16);
    doc.text('Comprobante de Pago - Tender Bot', marginLeft, cursorY);

    cursorY += 10;
    doc.setFontSize(12);
    doc.text(`Fecha: ${formatFecha(transaccion.value.transaction_date || new Date().toISOString())}`, marginLeft, cursorY);

    cursorY += 10;
    doc.text('Datos de la transacción', marginLeft, cursorY);

    cursorY += 8;
    if (transaccion.value.buy_order) {
        doc.text(`Orden de compra: ${transaccion.value.buy_order}`, marginLeft, cursorY);
        cursorY += 7;
    }
    if (transaccion.value.amount != null) {
        doc.text(`Monto: ${formatMonto(transaccion.value.amount)}`, marginLeft, cursorY);
        cursorY += 7;
    }
    if (transaccion.value.authorization_code) {
        doc.text(`Código de autorización: ${transaccion.value.authorization_code}`, marginLeft, cursorY);
        cursorY += 7;
    }
    const last4 = ultimosDigitosTarjeta.value;
    if (last4) {
        doc.text(`Tarjeta: **** **** **** ${last4}`, marginLeft, cursorY);
        cursorY += 7;
    }

    cursorY += 5;
    doc.setFontSize(10);
    doc.text('Este comprobante ha sido generado a partir de la respuesta de Transbank.', marginLeft, cursorY);

    doc.save('comprobante-pago-tenderbot.pdf');
};
</script>

<style scoped>
.validacion-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-lg) var(--spacing-md);
  color: var(--color-text);
}

.card {
  background: var(--color-secondary);
  padding: var(--spacing-xl);
  border-radius: var(--radius-xl);
  text-align: center;
  border: 1px solid var(--color-border);
  max-width: 520px;
  width: 100%;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.3);
}

.spinner {
  border: 4px solid rgba(148, 163, 184, 0.3);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border-left-color: var(--color-primary);
  animation: spin 1s linear infinite;
  margin: 0 auto var(--spacing-lg);
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.icon {
  font-size: 3.5rem;
  margin-bottom: var(--spacing-md);
}

h1,
h2 {
  margin-bottom: var(--spacing-md);
}

.success h1 {
  background: linear-gradient(135deg, var(--color-primary) 0%, #4ade80 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.error h1 {
  color: var(--color-danger);
}

p {
  color: var(--color-text-muted);
  margin-bottom: var(--spacing-xl);
  line-height: 1.6;
}

.actions {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 0.8rem 1.6rem;
  border-radius: var(--radius-md);
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
  font-size: 0.95rem;
}

.btn-primary {
  background: linear-gradient(135deg, var(--color-primary) 0%, #4ade80 100%);
  color: #fff;
  box-shadow: 0 10px 15px -3px rgba(34, 197, 94, 0.4);
}

.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 15px 20px -3px rgba(34, 197, 94, 0.5);
}

.btn-secondary {
  background: var(--color-danger);
  color: #fff;
}

.btn-secondary:hover {
  filter: brightness(1.1);
}

.btn-outline {
  background: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-text-muted);
}

.btn-outline:hover {
  border-color: var(--color-text);
  color: var(--color-text);
}
</style>
