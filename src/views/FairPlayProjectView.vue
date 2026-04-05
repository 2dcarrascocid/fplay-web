<template>
  <div class="products-page bg-gradient-dark">
    <!-- Hero Section -->
    <header class="hero-section container text-center fade-in">
      <h1 class="hero-title text-gradient">FairPlay Club</h1>
      <p class="hero-subtitle">
        Una solución moderna para la gestión de clubes deportivos
      </p>
      <div class="hero-tags">
        <span class="tag">Planillas</span>
        <span class="tag">Eventos</span>
        <span class="tag">Finanzas</span>
        <span class="tag">Dashboard</span>
      </div>
    </header>

    <!-- Project Features Grid -->
    <section class="features-section container mt-lg">
      <h2 class="section-title text-center text-gradient mb-lg">Funciones principales</h2>
      <div class="features-grid">
        <article class="feature-card fade-in" style="animation-delay: 0.1s">
          <div class="feature-icon">👥</div>
          <h3>Administrador de Planillas</h3>
          <p>Gestiona el registro completo de jugadores: perfiles, nóminas, documentos y verificaciones del plantel en un solo lugar.</p>
        </article>

        <article class="feature-card fade-in" style="animation-delay: 0.2s">
          <div class="feature-icon">📅</div>
          <h3>Gestión de Eventos</h3>
          <p>Crea y administra partidos, entrenamientos y actividades del club. Agenda, notifica y lleva el historial de todos tus eventos.</p>
        </article>

        <article class="feature-card fade-in" style="animation-delay: 0.3s">
          <div class="feature-icon">💰</div>
          <h3>Control Financiero</h3>
          <p>Registra ingresos, egresos y cuotas del club. Visualiza balances, genera reportes y mantén las finanzas bajo control.</p>
        </article>

        <article class="feature-card fade-in" style="animation-delay: 0.4s">
          <div class="feature-icon">📊</div>
          <h3>Dashboard Informativo</h3>
          <p>Panel central con métricas clave del club: asistencia, estado financiero, próximos eventos y actividad reciente en tiempo real.</p>
        </article>
      </div>
      <br>
    </section>

    <!-- Products Showcase Placeholder -->
    <section class="products-showcase container mt-xl mb-lg">
       <h2 class="section-title text-center text-gradient mb-lg">Productos</h2>
       <div class="products-grid">
         <!-- Placeholder for actual product links -->
         <div class="product-link-placeholder fade-in">
           <h3>Producto Principal</h3>
         <a href="https://miclub.fairplay-chile.cl" target="_blank" rel="noopener noreferrer" class="btn btn-primary mt-auto">Ver</a>
         </div>
         <div class="product-link-placeholder fade-in">
           <h3>App Móvil</h3>
           <p>Próximamente disponible</p>
           <button class="btn btn-secondary mt-auto">Descargar</button>
         </div>
       </div>
    </section>
    

  </div>
</template>

<script setup>
// Logic specific to products view if needed
</script>

<style scoped>
.products-page {
  min-height: 100vh;
  padding-top: var(--spacing-xl);
  color: var(--color-dark-text);
}

.hero-title {
  font-size: 3.5rem;
  margin-bottom: var(--spacing-sm);
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--color-dark-text-muted);
  margin-bottom: var(--spacing-lg);
}

.hero-tags {
  display: flex;
  justify-content: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-xl);
}

.tag {
  background: rgba(255, 255, 255, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-lg);
  font-size: 0.875rem;
  color: var(--color-dark-text);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
}

@media (max-width: 640px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}

.feature-card {
  background: var(--color-dark-surface);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border-color: rgba(59, 130, 246, 0.5);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-md);
}

.feature-card h3 {
  color: var(--color-dark-text);
  margin-bottom: var(--spacing-sm);
}

.feature-card p {
  color: var(--color-dark-text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
}

.products-showcase {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: var(--spacing-xl);
}

.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-lg);
}

.product-link-placeholder {
    background: rgba(255, 255, 255, 0.05);
    border: 1px dashed rgba(255, 255, 255, 0.2);
    padding: var(--spacing-lg);
    border-radius: var(--radius-lg);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    min-height: 200px;
}

.product-link-placeholder h3 {
   color: var(--color-dark-text); 
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
}
</style>
