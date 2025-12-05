<template>
  <section class="container flex flex-col items-center justify-center mt-lg mb-lg text-center">
    <img src="/src/assets/fplay.png" alt="Fair Play Chile" class="mb-lg" style="max-width:150px;" />
    <h1>¡Gracias por contactarnos!</h1>
    <p class="mt-lg mb-lg">
      Hemos recibido tu mensaje y nos pondremos en contacto contigo muy pronto.
    </p>
    <button class="btn btn-primary" @click="goHome">Volver al inicio</button>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';

const router = useRouter();

// Redirigir automáticamente al Home después de 5 segundos
onMounted(() => {
  setTimeout(() => {
    router.push('/');
  }, 5000);
});

const goHome = () => {
  router.push('/');
};
</script>

<style scoped>
h1 {
  font-size: 2rem;
  color: var(--color-primary);
}
p {
  color: var(--color-text-muted);
  font-size: 1rem;
}
</style>
