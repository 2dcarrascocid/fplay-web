<template>
  <div class="not-found-page bg-gradient-dark">
    <div class="container text-center fade-in">
      <h1 class="error-code text-gradient">404</h1>
      <h2 class="error-title mb-md">Página no encontrada</h2>
      <p class="error-message mb-xl">
        Lo sentimos, la página que buscas no existe o ha sido movida.
      </p>
      
      <div class="actions">
        <RouterLink to="/" class="btn btn-primary">
          Volver al Inicio
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.not-found-page {
  min-height: 80vh; /* Occupy most of the screen */
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-dark-text);
}

.error-code {
  font-size: 8rem;
  font-weight: 800;
  line-height: 1;
  margin-bottom: var(--spacing-sm);
  opacity: 0.8;
}

.error-title {
  font-size: 2rem;
  margin-bottom: var(--spacing-md);
  color: var(--color-dark-text);
}

.error-message {
  font-size: 1.1rem;
  color: var(--color-dark-text-muted);
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}
</style>
