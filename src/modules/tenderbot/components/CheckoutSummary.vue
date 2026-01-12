<template>
  <div class="summary-container">
    <h3>Resumen de Compra</h3>
    
    <div class="summary-card">
        <div class="summary-row">
            <span>Plan Seleccionado:</span>
            <strong>{{ plan?.nombre }}</strong>
        </div>
        <div class="summary-row">
            <span>Periodicidad:</span>
            <strong>{{ suscripcion?.periodicidad }}</strong>
        </div>
        <div class="summary-row">
            <span>Cliente:</span>
            <strong>{{ cliente?.email_contacto }}</strong>
        </div>
        
        <hr class="divider" />
        
        <div class="summary-row total-row">
            <span>Total a Pagar:</span>
            <span class="total-amount">{{ formatPrice(pago?.monto) }}</span>
        </div>
    </div>

    <div class="actions">
        <button class="btn-pay" @click="$emit('pay')" :disabled="loading">
            <span v-if="!loading">Pagar con Webpay Plus</span>
            <span v-else>Iniciando pago...</span>
        </button>
        <button class="btn-back" @click="$emit('back')" :disabled="loading">Volver</button>
    </div>

    <div v-if="error" class="error-message">
        {{ error }}
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  plan: Object,
  cliente: Object,
  suscripcion: Object,
  pago: Object,
  loading: Boolean,
  error: String
});

const formatPrice = (value) => {
    if (!value) return '$0';
  return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(value);
};
</script>

<style scoped>
.summary-container {
    max-width: 500px;
    margin: 0 auto;
    color: #fff;
}

h3 {
    text-align: center;
    margin-bottom: 1.5rem;
}

.summary-card {
    background: #252525;
    padding: 2rem;
    border-radius: 12px;
    border: 1px solid #333;
}

.summary-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    color: #ccc;
}

.summary-row strong {
    color: #fff;
}

.divider {
    border: none;
    border-top: 1px solid #444;
    margin: 1.5rem 0;
}

.total-row {
    margin-bottom: 0;
    align-items: center;
}

.total-row span {
    font-size: 1.2rem;
}

.total-amount {
    font-size: 1.8rem;
    font-weight: 800;
    color: #42b883;
}

.actions {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.btn-pay {
    width: 100%;
    padding: 1rem;
    background: #42b883; /* Webpay color is usually distinct, but sticking to theme */
    color: #fff;
    border: none;
    border-radius: 6px;
    font-size: 1.1rem;
    font-weight: 700;
    cursor: pointer;
    transition: background 0.2s;
}

.btn-pay:hover:not(:disabled) {
    background: #3aa876;
}

.btn-pay:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}

.btn-back {
    background: transparent;
    color: #888;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
}

.error-message {
    margin-top: 1rem;
    color: #ff4d4d;
    text-align: center;
}
</style>
