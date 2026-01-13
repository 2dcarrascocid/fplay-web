<template>
  <div class="tenderbot-checkout">
    <header class="checkout-header">
        <h1>Suscripción Tender Bot</h1>
        <div class="stepper">
            <div class="step" :class="{ active: currentStep >= 1, completed: currentStep > 1 }">1. Planes</div>
            <div class="line"></div>
            <div class="step" :class="{ active: currentStep >= 2, completed: currentStep > 2 }">2. Datos</div>
            <div class="line"></div>
            <div class="step" :class="{ active: currentStep >= 3 }">3. Pago</div>
        </div>
    </header>

    <main class="checkout-content">
        <!-- Paso 1: Selección de Planes -->
        <section v-if="currentStep === 1" class="step-planes">
            <div v-if="loading && !planes.length" class="loading">Cargando planes...</div>
            <div v-else-if="error" class="error">{{ error }}</div>
            <div v-else class="planes-grid">
                <PlanCard 
                    v-for="plan in planes" 
                    :key="plan.id" 
                    :plan="plan"
                    :selected="selectedPlan?.id === plan.id"
                    @select="handlePlanSelect"
                />
            </div>
        </section>

        <!-- Paso 2: Formulario Cliente -->
        <section v-if="currentStep === 2" class="step-cliente">
            <ClienteForm 
                :loading="loading"
                :error="error"
                :periodicidad-inicial="selectedPeriodicidad"
                @submit="handleClienteSubmit"
                @back="currentStep = 1"
            />
        </section>

        <!-- Paso 3: Resumen y Pago -->
        <section v-if="currentStep === 3" class="step-payment">
            <CheckoutSummary 
                :plan="selectedPlan"
                :cliente="cliente"
                :suscripcion="suscripcion"
                :pago="pago"
                :monto="montoPromocional"
                :loading="loading"
                :error="error"
                @pay="handlePayment"
                @back="currentStep = 2"
            />
        </section>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useTenderbotStore } from '../stores/useTenderbotStore';
import { storeToRefs } from 'pinia';
import PlanCard from '../components/PlanCard.vue';
import ClienteForm from '../components/ClienteForm.vue';
import CheckoutSummary from '../components/CheckoutSummary.vue';

const store = useTenderbotStore();
const { planes, selectedPlan, selectedPeriodicidad, montoPromocional, cliente, suscripcion, pago, loading, error, currentStep } = storeToRefs(store);

onMounted(() => {
    store.fetchPlanes();
});

const handlePlanSelect = ({ plan, periodicidad, monto }) => {
    store.selectPlan(plan, periodicidad, monto);
};

const handleClienteSubmit = async ({ cliente, periodicidad }) => {
    try {
        await store.registerClienteAndSuscripcion(cliente, periodicidad);
    } catch (e) {
        // Error manejado en el store y mostrado vía state error
    }
};

const handlePayment = async () => {
    try {
        const { token, url } = await store.initiateWebpay();
        
        // Redirección POST automática creando un form
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = url;

        const tokenInput = document.createElement('input');
        tokenInput.type = 'hidden';
        tokenInput.name = 'token_ws';
        tokenInput.value = token;

        form.appendChild(tokenInput);
        document.body.appendChild(form);
        form.submit();
    } catch (e) {
        console.error("Error iniciando pago", e);
    }
};
</script>

<style scoped>
.tenderbot-checkout {
    min-height: 100vh;
    /* Usar variables globales */
    background: transparent; /* El body ya tiene el gradiente */
    color: var(--color-text);
    padding-bottom: var(--spacing-xl);
}

.checkout-header {
    padding: var(--spacing-lg) var(--spacing-md);
    background: rgba(15, 23, 42, 0.6); /* Transparencia similar a navbar */
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--color-border);
    text-align: center;
    margin-bottom: var(--spacing-lg);
}

h1 {
    font-size: 2rem;
    margin-bottom: var(--spacing-md);
    background: linear-gradient(135deg, var(--color-primary) 0%, #4ade80 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 800;
}

.stepper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-md);
    max-width: 600px;
    margin: 0 auto;
}

.step {
    font-size: 0.9rem;
    color: var(--color-text-muted);
    font-weight: 600;
    transition: color 0.3s;
}

.step.active {
    color: var(--color-text);
}

.step.completed {
    color: var(--color-primary);
}

.line {
    width: 30px;
    height: 2px;
    background: var(--color-border);
}

.checkout-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-md);
}

.planes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-lg);
    padding: var(--spacing-md) 0;
}

.loading, .error {
    text-align: center;
    padding: var(--spacing-lg);
    font-size: 1.2rem;
    color: var(--color-text-muted);
}

.error {
    color: var(--color-danger);
}
</style>
