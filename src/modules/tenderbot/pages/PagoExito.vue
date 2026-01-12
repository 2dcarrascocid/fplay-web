<template>
  <div class="result-page success">
    <div class="card">
        <h1>¡Pago Exitoso!</h1>
        <p>Tu suscripción a Tender Bot ha sido activada correctamente.</p>
        <p>Pronto recibirás un correo con las credenciales de acceso.</p>
        <router-link to="/" class="btn-home">Volver al Inicio</router-link>
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
</style>
