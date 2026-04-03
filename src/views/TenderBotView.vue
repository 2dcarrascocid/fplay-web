<template>
  <div class="products-page bg-gradient-dark">
    <!-- Hero Section -->
    <header class="hero-section container text-center fade-in">
      <h1 class="hero-title text-gradient">Agente Autónomo de Licitaciones</h1>
      <h2 class="hero-subtitle-small text-accent">(Tender Bot)</h2>
      <p class="hero-subtitle">
        El primer sistema de inteligencia artificial que no solo busca licitaciones, sino que lee, analiza y filtra las bases técnicas por ti, funcionando como un analista comercial 24/7.
      </p>
      
      <div class="hero-tags">
        <span class="tag">Inteligencia Artificial</span>
        <span class="tag">Licitaciones</span>
        <span class="tag">Automatización</span>
      </div>
    </header>

    <!-- Features Section: ¿Qué lo hace único? -->
    <section class="features-section container mt-lg">
      <h2 class="section-title text-center text-gradient mb-lg">¿Qué lo hace único?</h2>
      <p class="text-center mb-lg description-text">
        A diferencia de los buscadores tradicionales que solo rastrean palabras clave en títulos, nuestro Agente:
      </p>
       <div class="features-grid">
        <article class="feature-card fade-in" style="animation-delay: 0.1s">
          <div class="feature-icon">👁️</div>
          <h3>Accede a lo Invisible</h3>
          <p>Utiliza tecnología avanzada para descargar archivos ocultos y anexos técnicos que los buscadores estándar ignoran.</p>
        </article>

        <article class="feature-card fade-in" style="animation-delay: 0.2s">
          <div class="feature-icon">📖</div>
          <h3>Lectura Comprensiva</h3>
          <p>Abre y lee los PDFs (Bases Administrativas y Técnicas) para entender el contexto real, requisitos excluyentes y multas.</p>
        </article>

        <article class="feature-card fade-in" style="animation-delay: 0.3s">
          <div class="feature-icon">🧠</div>
          <h3>Filtro Semántico</h3>
          <p>Distingue el matiz del negocio (ej. sabe que "Limpieza de Virus" es Ciberseguridad y no Aseo Industrial), eliminando el 95% del "ruido" y falsos positivos.</p>
        </article>
      </div>
      <br>
    </section>
    <section class="products-showcase container mt-xl mb-lg">

       <div class="products-grid">
         <div class="product-link-placeholder fade-in">
             <h2 class="section-title text-center text-gradient mb-md">La promesa de valor</h2>
                     <p class="audience-text text-center">
              Dejamos de entregarte listas interminables de enlaces para revisar. Te entregamos <strong>Decisiones de Postulación</strong>: Un reporte claro con los requisitos, riesgos y una recomendación de "Postular / No Postular" enviada proactivamente a tu flujo de trabajo (WhatsApp/API).
            </p>
         </div>
         <div class="product-link-placeholder fade-in">
          <h2 class="section-title text-center text-gradient mb-md">Resultado</h2>
                   <p class="audience-text text-center">
                    Convierte 10 horas semanales de lectura humana en minutos de revisión estratégica.
                </p>
                <section class="cta-section container mt-xl mb-xl text-center fade-in">
       <a href="https://tb.fairplay-chile.cl/" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg">Ver</a>
    </section>
         </div>
       </div>
    </section>


  </div>
</template>

<script setup>
</script>

<style scoped>
.products-page {
  min-height: 100vh;
  padding-top: 100px; /* Adjust based on navbar height */
  padding-bottom: var(--spacing-2xl);
  color: var(--color-dark-text);
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: var(--spacing-xs);
  line-height: 1.2;
}

.hero-subtitle-small {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: var(--spacing-md);
    color: var(--color-primary);
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--color-dark-text-muted);
  max-width: 800px;
  margin: 0 auto var(--spacing-lg);
}

.hero-tags {
  display: flex;
  justify-content: center;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
  margin-bottom: var(--spacing-xl);
}

.tag {
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  color: var(--color-dark-text);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
}

.feature-card {
  background: var(--color-dark-surface);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: transform 0.3s ease, border-color 0.3s ease;
  text-align: center;
}

.feature-card:hover {
  transform: translateY(-5px);
  border-color: var(--color-primary);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-md);
}

.audience-card {
  background: linear-gradient(145deg, rgba(30, 41, 59, 0.7), rgba(15, 23, 42, 0.9));
  padding: var(--spacing-2xl);
  border-radius: var(--radius-xl);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.text-accent {
    color: var(--color-primary); /* Assuming primary is a good accent, or use a specific one */
}

.result-box {
    background: rgba(59, 130, 246, 0.1);
    padding: var(--spacing-lg);
    border-radius: var(--radius-lg);
    border: 1px solid rgba(59, 130, 246, 0.3);
}

.btn-lg {
    padding: 1rem 2.5rem;
    font-size: 1.25rem;
}

/* Animations */
.fade-in {
  opacity: 0;
  animation: fadeIn 0.8s ease-out forwards;
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

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
