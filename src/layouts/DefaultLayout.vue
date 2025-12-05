<template>
  <div>
    <AppHeader />

    <main class="container" style="padding-top: 2rem; min-height: 70vh;">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from "../components/layout/AppHeader.vue";
import AppFooter from "../components/layout/AppFooter.vue";
</script>
