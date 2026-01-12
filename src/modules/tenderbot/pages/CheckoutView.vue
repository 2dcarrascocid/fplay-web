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
                    @select="handlePlanSelect(plan)"
                />
            </div>
        </section>

        <!-- Paso 2: Formulario Cliente -->
        <section v-if="currentStep === 2" class="step-cliente">
            <ClienteForm 
                :loading="loading"
                :error="error"
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
import { onMounted, computed } from 'vue';
import { useTenderbotStore } from '../stores/useTenderbotStore';
import { storeToRefs } from 'pinia';
import PlanCard from '../components/PlanCard.vue';
import ClienteForm from '../components/ClienteForm.vue';
import CheckoutSummary from '../components/CheckoutSummary.vue';

const store = useTenderbotStore();
const { planes, selectedPlan, cliente, suscripcion, pago, loading, error, currentStep } = storeToRefs(store);

onMounted(() => {
    store.fetchPlanes();
});

const handlePlanSelect = (plan) => {
    store.selectPlan(plan);
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
    background: #121212;
    color: #fff;
    padding-bottom: 4rem;
}

.checkout-header {
    padding: 2rem 1rem;
    background: #1a1a1a;
    border-bottom: 1px solid #333;
    text-align: center;
}

h1 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    background: -webkit-linear-gradient(45deg, #42b883, #35495e);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.stepper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    max-width: 600px;
    margin: 0 auto;
}

.step {
    font-size: 0.9rem;
    color: #666;
    font-weight: 600;
}

.step.active {
    color: #fff;
}

.step.completed {
    color: #42b883;
}

.line {
    width: 30px;
    height: 2px;
    background: #333;
}

.checkout-content {
    max-width: 1200px;
    margin: 2rem auto;
    padding: 0 1rem;
}

.planes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 1rem;
}

.loading, .error {
    text-align: center;
    padding: 2rem;
    font-size: 1.2rem;
}

.error {
    color: #ff4d4d;
}
</style>
