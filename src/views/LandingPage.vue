<template>
  <section class="landing-hero">
    <div class="container flex flex-col items-center justify-center text-center">
      <h1 class="hero-title">FAIR-PLAY CHILE</h1>
      <p class="hero-subtitle">
          Tecnología que impulsa el deporte chileno.
      </p>
      <div class="hero-actions">
        <router-link to="/home" class="btn btn-white">Comenzar</router-link>
        <router-link to="/contact" class="btn btn-white">Contáctanos</router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script needed for static landing page
</script>

<style scoped>
.landing-hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #14b8a6 0%, #4f46e5 100%);
  color: white;
  padding: var(--spacing-lg);
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: var(--spacing-md);
  color: white;
}

.hero-subtitle {
  font-size: 1.25rem;
  max-width: 600px;
  margin-bottom: var(--spacing-xl);
  color: rgba(255, 255, 255, 0.9);
}

.hero-actions {
  display: flex;
  gap: var(--spacing-md);
}

.btn-white {
  background-color: white;
  color: #4f46e5;
  padding: 0.75rem 2rem;
  border-radius: var(--radius-md);
  font-weight: 600;
  transition: transform 0.2s, box-shadow 0.2s;
}

.btn-white:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
</style>
