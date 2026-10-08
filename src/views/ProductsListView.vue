<template>
  <div class="products-list-page bg-gradient-dark">
    <div class="container fade-in">
      <h1 class="text-center text-gradient mb-xl">Productos</h1>
      <p class="mb-lg text-center description-text">
      Desarrollamos productos digitales y soluciones tecnológicas propias que nacen desde la experiencia en terreno y la ingeniería de software, orientadas a resolver desafíos reales de gestión, operación y comunicación en organizaciones deportivas y otros entornos organizacionales.
      </p>
      
      <div class="products-grid">
              <!-- Card: Tender Bot -->
        <article class="product-card">
          <div class="icon-wrapper">
             <span class="product-icon">🤖</span>
          </div>
          <h3>Tender Bot</h3>
          <p>
            Agente autónomo de licitaciones. IA que busca, lee, analiza y filtra bases técnicas por ti, funcionando como analista comercial 24/7.
          </p>
          <RouterLink to="/productos/tender-bot" class="btn btn-primary w-full mt-auto">
            Ver Detalles
          </RouterLink>
        </article>

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
          <h3>SuperLigas</h3>
          <p>
            Plataforma moderna para la gestión integral de ligas deportivas, jugadores, finanzas y torneos. Ideal para clubes deportivos, asociaciones y federaciones que buscan digitalizar su gestión y mejorar la experiencia de sus jugadores.
          </p>
            <!-- <div class="tags">
              <span class="tag">Vue 3</span>
              <span class="tag">Vite</span>
              <span class="tag">Supabase</span>
            </div> -->
          <a href="https://superligas.fairplay-chile.cl/" target="_blank" rel="noopener noreferrer" class="btn btn-primary w-full mt-auto">
            Ver Detalles
          </a>
        </article>

  


        <!-- Card: FairPlay Active -->
        <article class="product-card">
          <div class="icon-wrapper">
             <span class="product-icon">📅</span>
          </div>
          <h3>FairPlay Active</h3>
          <p>
            Reserva y pago en línea de recintos deportivos y talleres municipales. Agenda canchas, inscribe talleres y gestiona cupos desde un solo lugar.
          </p>
          <a href="https://activ.fairplay-chile.cl" target="_blank" rel="noopener noreferrer" class="btn btn-primary w-full mt-auto">
            Ver Detalles
          </a>
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
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
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

.w-full {
  width: 100%;
}

.description-text {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.125rem;
  line-height: 1.6;
}

/* Móvil */
@media (max-width: 640px) {
  .products-list-page {
    padding-top: var(--spacing-lg);
    padding-bottom: var(--spacing-lg);
  }

  .mb-xl {
    margin-bottom: var(--spacing-lg);
  }

  .description-text {
    font-size: 1rem;
  }

  .products-grid {
    gap: var(--spacing-md);
  }

  .product-card {
    padding: var(--spacing-md);
  }

  .product-card:hover {
    transform: none;
  }

  .icon-wrapper {
    width: 64px;
    height: 64px;
  }

  .product-icon {
    font-size: 2rem;
  }

  .product-card h3 {
    font-size: 1.25rem;
  }

  .product-card p {
    margin-bottom: var(--spacing-md);
  }
}
</style>
