<template>
  <div class="result-page success">
    <div class="card">
        <div v-if="loading">
            <div class="spinner"></div>
            <h1>Confirmando Pago...</h1>
            <p>Estamos verificando tu transacción. Por favor no cierres esta ventana.</p>
        </div>
        
        <div v-else>
            <h1>¡Pago Exitoso!</h1>
            <p>Tu suscripción a Tender Bot ha sido activada correctamente.</p>
            <p>Pronto recibirás un correo con las credenciales de acceso.</p>
            <router-link to="/" class="btn-home">Volver al Inicio</router-link>
        </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useTenderbotStore } from '../stores/useTenderbotStore';

const route = useRoute();
const router = useRouter();
const store = useTenderbotStore();

const loading = ref(true);

onMounted(async () => {
    const token = route.query.token_ws;
    const tbkToken = route.query.TBK_TOKEN;

    if (token) {
        try {
            await store.confirmPayment(token);
            loading.value = false;
        } catch (err) {
            console.error('Error confirmando pago:', err);
            router.replace('/tenderbot/pago/fallo');
        }
    } else if (tbkToken) {
        // Transacción abortada
        router.replace('/tenderbot/pago/fallo');
    } else {
        // Acceso directo o ya confirmado
        loading.value = false;
    }
});
</script>

<style scoped>
.result-page {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
    background: #121212;
    padding: 1rem;
}
.card {
    background: #1e1e1e;
    padding: 3rem;
    border-radius: 12px;
    text-align: center;
    border: 1px solid #42b883;
    max-width: 500px;
}
h1 { color: #42b883; margin-bottom: 1rem; }
p { color: #ccc; margin-bottom: 2rem; }
.btn-home {
    display: inline-block;
    padding: 0.8rem 2rem;
    background: #42b883;
    color: #fff;
    text-decoration: none;
    border-radius: 6px;
    font-weight: bold;
}
.spinner {
    border: 4px solid rgba(255, 255, 255, 0.1);
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border-left-color: #42b883;
    animation: spin 1s linear infinite;
    margin: 0 auto 1rem;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>
