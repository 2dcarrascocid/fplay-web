<template>
  <div class="products-list-page bg-gradient-dark">
    <div class="container fade-in">
      <h1 class="text-center text-gradient mb-xl">Nuestros Productos</h1>
      
      <div class="products-grid">
                <!-- Card: FairPlay Arena -->
        <article class="product-card">
          <div class="icon-wrapper">
             <span class="product-icon">🏟️</span>
          </div>
          <h3>FairPlay Arena</h3>
          <p>
            App movil moderna para la gestión y organizacion de actividades deportivas, gestiona, invita, califica y organiza tus eventos.
          </p>
          <!-- <div class="tags">
            <span class="tag">Vue 3</span>
            <span class="tag">Vite</span>
          </div> -->
          <RouterLink to="/productos/fair-play-arena" class="btn btn-primary w-full mt-auto">
            Ver Detalles
          </RouterLink>
        </article>
        <!-- Card: Fair Play Chile -->
        <article class="product-card">
          <div class="icon-wrapper">
             <span class="product-icon">⚽</span>
          </div>
          <h3>FairPlay Club</h3>
          <p>
            Plataforma moderna para la gestión integral de clubes deportivos, finanzas y jugadores.
          </p>
            <!-- <div class="tags">
              <span class="tag">Vue 3</span>
              <span class="tag">Vite</span>
            </div> -->
          <RouterLink to="/productos/fair-play" class="btn btn-primary w-full mt-auto">
            Ver Detalles
          </RouterLink>
        </article>



        <!-- Placeholder Card -->
        <article class="product-card placeholder">
          <div class="icon-wrapper">
             <span class="product-icon">📱</span>
          </div>
          <h3>Próximo Proyecto</h3>
          <p>
            Espacio reservado para futuros desarrollos y nuevas ideas innovadoras.
          </p>
          <button class="btn btn-secondary w-full mt-auto" disabled>Próximamente</button>
        </article>
      </div>
    </div>
  </div>
</template>

<style scoped>
.products-list-page {
  min-height: 100vh;
  padding-top: var(--spacing-xl);
  padding-bottom: var(--spacing-xl);
  color: var(--color-dark-text);
}

.mb-xl {
  margin-bottom: var(--spacing-xl);
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--spacing-lg);
  max-width: 1000px;
  margin: 0 auto;
}

.product-card {
  background: var(--color-dark-surface);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border-color: rgba(59, 130, 246, 0.5);
}

.icon-wrapper {
  background: rgba(255, 255, 255, 0.05);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-md);
}

.product-icon {
  font-size: 2.5rem;
}

.product-card h3 {
  font-size: 1.5rem;
  margin-bottom: var(--spacing-sm);
  color: var(--color-dark-text);
}

.product-card p {
  color: var(--color-dark-text-muted);
  margin-bottom: var(--spacing-lg);
  line-height: 1.6;
}

.tags {
  display: flex;
  gap: 0.5rem;
  margin-bottom: var(--spacing-lg);
}

.tag {
  background: rgba(255, 255, 255, 0.1);
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius-sm);
  color: var(--color-dark-text-muted);
}

.placeholder {
  opacity: 0.7;
  border-style: dashed;
}

.w-full {
  width: 100%;
}
</style>
