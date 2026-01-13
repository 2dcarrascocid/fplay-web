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
            <router-link to="/" class="btn btn-primary">Ir al Inicio</router-link>
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
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { tenderbotService } from '../services/tenderbotService';

const route = useRoute();
const loading = ref(true);
const success = ref(false);
const errorMsg = ref('');

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
        await tenderbotService.commitWebpay(token);
        success.value = true;
    } catch (err) {
        console.error(err);
        success.value = false;
        errorMsg.value = 'No pudimos confirmar el pago. ' + (err.response?.data?.message || '');
    } finally {
        loading.value = false;
    }
});
</script>

<style scoped>
.validacion-page {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
    background: #121212;
    padding: 1rem;
    color: #fff;
}

.card {
    background: #1e1e1e;
    padding: 3rem;
    border-radius: 12px;
    text-align: center;
    border: 1px solid #333;
    max-width: 500px;
    width: 100%;
    box-shadow: 0 4px 20px rgba(0,0,0,0.5);
}

.spinner {
    border: 4px solid rgba(255, 255, 255, 0.1);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border-left-color: #42b883;
    animation: spin 1s linear infinite;
    margin: 0 auto 1.5rem;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.icon {
    font-size: 4rem;
    margin-bottom: 1rem;
}

h1, h2 {
    margin-bottom: 1rem;
}

.success h1 { color: #42b883; }
.error h1 { color: #ff4d4d; }

p {
    color: #ccc;
    margin-bottom: 2rem;
    line-height: 1.5;
}

.actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}

.btn {
    padding: 0.8rem 1.5rem;
    border-radius: 6px;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s;
    border: none;
}

.btn-primary {
    background: #42b883;
    color: #fff;
}
.btn-primary:hover { background: #3aa876; }

.btn-secondary {
    background: #ff4d4d;
    color: #fff;
}
.btn-secondary:hover { background: #e04343; }

.btn-outline {
    background: transparent;
    border: 1px solid #666;
    color: #ccc;
}
.btn-outline:hover { border-color: #fff; color: #fff; }
</style>
