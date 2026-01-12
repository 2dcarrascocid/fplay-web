<template>
  <div class="result-page error">
    <div class="card">
        <h1>Pago Fallido</h1>
        <p>Hubo un problema al procesar tu pago.</p>
        <p>Por favor, intenta nuevamente o contacta a soporte.</p>
        <div class="actions">
            <router-link to="/tenderbot/checkout" class="btn-retry">Reintentar</router-link>
            <router-link to="/" class="btn-home">Volver al Inicio</router-link>
        </div>
    </div>
  </div>
</template>

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
    border: 1px solid #ff4d4d;
    max-width: 500px;
}
h1 { color: #ff4d4d; margin-bottom: 1rem; }
p { color: #ccc; margin-bottom: 2rem; }
.actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
}
.btn-retry {
    padding: 0.8rem 2rem;
    background: #ff4d4d;
    color: #fff;
    text-decoration: none;
    border-radius: 6px;
    font-weight: bold;
}
.btn-home {
    padding: 0.8rem 2rem;
    background: transparent;
    border: 1px solid #666;
    color: #ccc;
    text-decoration: none;
    border-radius: 6px;
    font-weight: bold;
}
</style>
