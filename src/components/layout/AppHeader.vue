<template>
  <header class="container flex justify-between items-center" style="padding: 1rem 0;">
    <RouterLink to="/" class="flex items-center">
      <img
        :src="logo"
        alt="Fair Play Chile Logo"
        style="height: 48px; width: auto;"
      />
    </RouterLink>

    <nav>
      <ul class="flex gap-md">
        <li><RouterLink to="/">Inicio</RouterLink></li>
        <li><RouterLink to="/servicios">Servicios</RouterLink></li>
        <li><RouterLink to="/nosotros">Nosotros</RouterLink></li>
        <li><RouterLink to="/productos">Nuestros Productos</RouterLink></li>
        <li><RouterLink to="/contacto">Contacto</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import logo from "../../assets/fplay.png";
</script>

<style scoped>
header {
  border-bottom: 1px solid var(--color-border);
}
nav a {
  font-weight: 500;
  color: var(--color-text-muted);
}
nav a:hover {
  color: var(--color-primary);
}
</style>
