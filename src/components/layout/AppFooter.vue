<template>
  <footer class="container text-center" style="padding: 2rem 0; border-top: 1px solid var(--color-border); margin-top: 2rem;">
    <p>© {{ year }} FAIR-PLAY CHILE — Todos los derechos reservados.</p>
    Versión {{ version }}
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();
const version = __APP_VERSION__
</script>
