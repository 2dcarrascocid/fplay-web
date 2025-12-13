<template>
  <section class="hero-section text-center mt-lg mb-lg fade-in">
    <div class="container relative z-10">
      <h1 class="hero-title">Digitalizamos el deporte chileno</h1>
      <p class="hero-subtitle">Software, automatización y rendimiento para organizaciones deportivas en Chile.</p>

      <div class="hero-actions">
        <button class="btn btn-primary" @click="goContact">Contáctanos</button>
        <button class="btn btn-secondary" @click="goServicios">Ver servicios</button>
      </div>
    </div>
    
    <!-- Decorative background element -->
    <div class="hero-bg-glow"></div>
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const goContact = () => router.push("/contacto");
const goServicios = () => router.push("/servicios");
</script>

<style scoped>
.hero-section {
  padding: 4rem 1rem;
  position: relative;
  overflow: hidden;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: #ffffff;
  /* Fallback for gradient visibility issues */
  background: none;
  -webkit-text-fill-color: initial;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--color-text-muted);
  max-width: 700px;
  margin: 0 auto 2.5rem;
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
}

.hero-bg-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120%;
  height: 120%;
  background: radial-gradient(circle at center, rgba(59, 130, 246, 0.08) 0%, transparent 70%);
  z-index: 0;
  pointer-events: none;
}

.z-10 {
  position: relative;
  z-index: 10;
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
  .hero-section {
    padding: 3rem 1rem;
  }

  .hero-title {
    font-size: 2.5rem; /* Smaller font for mobile */
  }

  .hero-subtitle {
    font-size: 1.1rem;
    padding: 0 1rem;
  }

  .hero-actions {
    flex-direction: column; /* Stack buttons */
    gap: 1rem;
    padding: 0 1rem;
  }

  .hero-actions .btn {
    width: 100%; /* Full width buttons */
  }
}
</style>
