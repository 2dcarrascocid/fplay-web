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
import { jsPDF } from 'jspdf';

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

    // Título
    doc.setFontSize(22);
    doc.setTextColor(40, 40, 40);
    doc.text('Comprobante de Pago', marginLeft, cursorY);
    
    cursorY += 10;
    doc.setFontSize(14);
    doc.setTextColor(100, 100, 100);
    doc.text('TenderBot', marginLeft, cursorY);

    // Línea separadora
    cursorY += 5;
    doc.setDrawColor(200, 200, 200);
    doc.line(marginLeft, cursorY, 190, cursorY);

    cursorY += 15;
    doc.setFontSize(10);
    doc.setTextColor(120, 120, 120);
    doc.text(`Fecha de emisión: ${formatFecha(new Date().toISOString())}`, marginLeft, cursorY);

    cursorY += 15;
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text('Detalle de la transacción', marginLeft, cursorY);
    
    cursorY += 10;
    doc.setFontSize(11);
    doc.setTextColor(60, 60, 60);

    const lineHeight = 8;

    if (transaccion.value.buy_order) {
        doc.text('Orden de compra:', marginLeft, cursorY);
        doc.text(String(transaccion.value.buy_order), marginLeft + 60, cursorY);
        cursorY += lineHeight;
    }
    
    if (transaccion.value.amount != null) {
        doc.text('Monto:', marginLeft, cursorY);
        doc.text(formatMonto(transaccion.value.amount), marginLeft + 60, cursorY);
        cursorY += lineHeight;
    }
    
    if (transaccion.value.authorization_code) {
        doc.text('Código de autorización:', marginLeft, cursorY);
        doc.text(String(transaccion.value.authorization_code), marginLeft + 60, cursorY);
        cursorY += lineHeight;
    }
    
    if (transaccion.value.transaction_date) {
        doc.text('Fecha transacción:', marginLeft, cursorY);
        doc.text(formatFecha(transaccion.value.transaction_date), marginLeft + 60, cursorY);
        cursorY += lineHeight;
    }

    const last4 = ultimosDigitosTarjeta.value;
    if (last4) {
        doc.text('Tarjeta:', marginLeft, cursorY);
        doc.text(`**** **** **** ${last4}`, marginLeft + 60, cursorY);
        cursorY += lineHeight;
    }

    // Pie de página
    cursorY += 20;
    doc.setFontSize(9);
    doc.setTextColor(150, 150, 150);
    doc.text('Este comprobante es generado automáticamente por TenderBot.', marginLeft, cursorY);
    doc.text('Gracias por tu preferencia.', marginLeft, cursorY + 5);

    doc.save(`comprobante_tenderbot_${transaccion.value.buy_order || 'pago'}.pdf`);
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
