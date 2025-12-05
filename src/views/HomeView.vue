<template>
  <div class="home-view">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <h1 class="hero-title">Transformando el deporte comunal con Fair Play Chile</h1>
        <p class="hero-text">
          En Fair Play Chile, nos dedicamos a revolucionar la gestión del deporte a nivel comunal con un enfoque humano y justo. Nuestra plataforma tecnológica no solo se centra en el software, sino que también busca promover una transformación cultural dentro del deporte amateur. Creemos en la importancia de registrar y gestionar las conductas deportivas, ya sean positivas o negativas, con total transparencia y un sentido formativo fuerte. Nuestro objetivo es fortalecer la convivencia, asegurar una participación segura y fomentar el profesionalismo en el ámbito deportivo.
        </p>
      </div>
    </section>

    <!-- Details Section -->
    <section class="details-section">
      <div class="container">
        <h2 class="section-title">Transformando el deporte comunal en ambientes libres de violencia</h2>
        <div class="cards-grid">
          <!-- Card 1 -->
          <div class="card detail-card">
            <img src="@/assets/card-registration.png" alt="Registro y visibilidad" class="card-image" />
            <h3 class="card-title">Registro y visibilidad</h3>
            <p class="card-text">
              Nuestra plataforma permite registrar y visibilizar las conductas deportivas para asegurar una gestión justa y transparente. Con un enfoque en la justicia deportiva, promovemos un entorno donde los comportamientos positivos son reconocidos y las conductas negativas son gestionadas adecuadamente.
            </p>
          </div>
          <!-- Card 2 -->
          <div class="card detail-card">
            <img src="@/assets/card-justice.png" alt="Gestión con justicia" class="card-image" />
            <h3 class="card-title">Gestión con justicia</h3>
            <p class="card-text">
              Facilitamos una gestión deportiva basada en la justicia y la igualdad. Nuestra plataforma ayuda a los organizadores y participantes a mantener un equilibrio justo en las competiciones, asegurando que todos los involucrados tengan una experiencia deportiva enriquecedora y formativa.
            </p>
          </div>
          <!-- Card 3 -->
          <div class="card detail-card">
            <img src="@/assets/card-culture.png" alt="Cultura de participación segura" class="card-image" />
            <h3 class="card-title">Cultura de participación segura</h3>
            <p class="card-text">
              Promovemos una transformación cultural hacia una participación segura y profesional en el deporte amateur. Fomentamos la convivencia y la inclusión, asegurando que cada deportista pueda participar en un entorno seguro y respetuoso, fortalecido por valores formativos.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about-section">
      <div class="container">
        <h2 class="section-title">Acerca de Fair Play Chile</h2>
        <p class="about-text">
          Fair Play Chile es una innovadora plataforma tecnológica dedicada a la gestión del deporte a nivel comunal, con un enfoque profundamente humano. Nuestra misión es transformar el modo en que se gestionan las conductas deportivas, tanto positivas como negativas, promoviendo la justicia y la transparencia. Más allá de ser un simple software, buscamos incidir en una transformación cultural dentro del deporte amateur, fortaleciendo la convivencia, asegurando una participación segura y elevando el nivel de profesionalismo en las comunidades.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
// Home view logic
</script>

<style scoped>
.home-view {
  padding-bottom: var(--spacing-xl);
}

.hero-section {
  background-color: var(--color-bg-alt);
  padding: var(--spacing-xl) 0;
  text-align: center;
}

.hero-title {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-md);
  color: var(--color-primary);
}

.hero-text {
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.125rem;
  line-height: 1.8;
}

.details-section {
  padding: var(--spacing-xl) 0;
}

.section-title {
  text-align: center;
  margin-bottom: var(--spacing-lg);
  font-size: 2rem;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
}

.detail-card {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: var(--radius-md);
  margin-bottom: var(--spacing-md);
}

.card-title {
  font-size: 1.5rem;
  margin-bottom: var(--spacing-sm);
  color: var(--color-secondary);
}

.card-text {
  font-size: 1rem;
  color: var(--color-text-muted);
}

.about-section {
  background-color: var(--color-bg-alt);
  padding: var(--spacing-xl) 0;
  text-align: center;
}

.about-text {
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.125rem;
}
</style>
