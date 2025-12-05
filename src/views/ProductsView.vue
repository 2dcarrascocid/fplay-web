<template>
  <section class="container mt-lg">
    <h1 class="text-center mb-lg">Nuestros Productos</h1>
    <div class="products-grid">
      <!-- Card 1 -->
      <div class="card product-card">
        <img src="@/assets/icon-product-1.png" alt="Producto 1" class="product-icon" />
        <h3>Producto 1</h3>
        <p class="product-description">
          Una solución integral diseñada para optimizar la gestión deportiva básica. Ideal para quienes buscan simplicidad y eficiencia en el registro de actividades.
        </p>
        <button class="btn btn-primary w-full mt-auto">Ver más</button>
      </div>
      <!-- Card 2 -->
      <div class="card product-card">
        <img src="@/assets/icon-product-2.png" alt="Producto 2" class="product-icon" />
        <h3>Producto 2</h3>
        <p class="product-description">
          Nuestra opción avanzada para organizaciones que requieren herramientas de análisis profundo y personalización total. Lleva tu gestión al siguiente nivel.
        </p>
        <button class="btn btn-primary w-full mt-auto">Ver más</button>
      </div>
    </div>
  </section>
</template>

<script setup>
// Product logic
</script>

<style scoped>
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
  padding-bottom: var(--spacing-xl);
  max-width: 900px;
  margin: 0 auto;
}

.product-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: var(--spacing-xl) var(--spacing-lg);
}

.product-icon {
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-bottom: var(--spacing-md);
}

.product-description {
  margin-bottom: var(--spacing-lg);
  color: var(--color-text-muted);
}

.mt-auto {
  margin-top: auto;
}

.w-full {
  width: 100%;
}
</style>
