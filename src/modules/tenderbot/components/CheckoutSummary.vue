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
            <strong>{{ periodicidad || suscripcion?.periodicidad }}</strong>
        </div>
        <div class="summary-row">
            <span>Cliente:</span>
            <strong>{{ cliente?.email_contacto }}</strong>
        </div>
        
        <hr class="divider" />
        
        <div class="summary-row total-row">
            <span>Total a Pagar:</span>
            <span class="total-amount">{{ formatPrice(montoCalculado) }}</span>
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
import { defineProps, computed } from 'vue';

const props = defineProps({
  plan: Object,
  cliente: Object,
  suscripcion: Object,
  periodicidad: String,
  pago: Object,
  monto: Number,
  loading: Boolean,
  error: String
});

const montoCalculado = computed(() => {
  if (props.monto != null) return props.monto;
  if (props.pago?.monto != null) return props.pago.monto;
  return 0;
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
    color: var(--color-text);
}

h3 {
    text-align: center;
    margin-bottom: var(--spacing-lg);
    font-size: 1.5rem;
    font-weight: 700;
}

.summary-card {
    background: var(--color-secondary);
    padding: var(--spacing-lg);
    border-radius: var(--radius-lg);
    border: 1px solid var(--color-border);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.summary-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: var(--spacing-md);
    color: var(--color-text-muted);
}

.summary-row strong {
    color: var(--color-text);
}

.divider {
    border: none;
    border-top: 1px solid var(--color-border);
    margin: var(--spacing-lg) 0;
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
    color: var(--color-primary);
}

.actions {
    margin-top: var(--spacing-xl);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
}

.btn-pay {
    width: 100%;
    padding: var(--spacing-md);
    background: linear-gradient(135deg, var(--color-primary) 0%, #4ade80 100%);
    color: #fff;
    border: none;
    border-radius: var(--radius-md);
    font-size: 1.1rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s;
    box-shadow: 0 4px 6px -1px rgba(34, 197, 94, 0.2);
}

.btn-pay:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 8px -1px rgba(34, 197, 94, 0.3);
}

.btn-pay:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    background: var(--color-border);
    box-shadow: none;
    transform: none;
}

.btn-back {
    background: transparent;
    color: var(--color-text-muted);
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    transition: color 0.2s;
    font-weight: 500;
}

.btn-back:hover {
    color: var(--color-text);
}

.error-message {
    margin-top: var(--spacing-md);
    color: var(--color-danger);
    text-align: center;
    padding: 0.75rem;
    background: rgba(239, 68, 68, 0.1);
    border-radius: var(--radius-sm);
    border: 1px solid rgba(239, 68, 68, 0.2);
}
</style>
