<template>
  <div class="products-page bg-gradient-dark">
    <!-- Hero Section -->
    <header class="hero-section container text-center fade-in">
      <h1 class="hero-title text-gradient">FairPlay Arena</h1>
      <p class="hero-subtitle">
        La plataforma que conecta deportistas, equipos y ligas para promover un deporte sano, justo y libre de conductas antideportivas.
      </p>
      
      <div class="hero-tags">
        <span class="tag">Deportistas</span>
        <span class="tag">Equipos</span>
        <span class="tag">Ligas</span>
      </div>

      <div class="intro-box fade-in">
        <p>
          Organiza partidos, gestiona tus eventos, registra rendimiento, comparte invitaciones con enlaces inteligentes y construye tu reputación deportiva a través del puntaje Fair Play.
        </p>
      </div>
    </header>

    <!-- Features Section -->
    <section class="features-section container mt-lg">
      <h2 class="section-title text-center text-gradient mb-lg">Con Arena puedes</h2>
      <div class="features-grid">
        <article class="feature-card fade-in" style="animation-delay: 0.1s">
          <div class="feature-icon">⚡</div>
          <h3>Eventos al Instante</h3>
          <p>Crear o unirte a partidos y eventos deportivos en segundos.</p>
        </article>

        <article class="feature-card fade-in" style="animation-delay: 0.2s">
          <div class="feature-icon">🔗</div>
          <h3>Invitaciones Inteligentes</h3>
          <p>Compartir invitaciones mediante links seguros compatibles con Android.</p>
        </article>

        <article class="feature-card fade-in" style="animation-delay: 0.3s">
          <div class="feature-icon">👤</div>
          <h3>Perfil Deportivo</h3>
          <p>Llevar tu perfil con foto, comuna, rol de juego y estadísticas completa.</p>
        </article>

        <article class="feature-card fade-in" style="animation-delay: 0.4s">
          <div class="feature-icon">📷</div>
          <h3>Escaneo QR</h3>
          <p>Escanear códigos QR para sumar jugadores a tus partidos más rápido.</p>
        </article>
        
        <article class="feature-card fade-in" style="animation-delay: 0.5s">
          <div class="feature-icon">📊</div>
          <h3>Historial y Conducta</h3>
          <p>Visualizar tu historial, sanciones y comportamiento en la cancha.</p>
        </article>

        <article class="feature-card fade-in" style="animation-delay: 0.6s">
          <div class="feature-icon">🆔</div>
          <h3>Identidad Única</h3>
          <p>Mantener una identidad deportiva única y verificable en la comunidad.</p>
        </article>
      </div>
    </section>

    <!-- Target Audience Section -->
    <section class="target-audience container mt-xl fade-in">
        <div class="audience-card">
            <h2 class="section-title text-center text-gradient mb-md">¿Para quién es Arena?</h2>
            <p class="audience-text text-center">
              Para deportistas amateurs, clubes y ligas locales que buscan organizarse mejor, reducir conflictos y vivir el deporte de forma justa y transparente. Construyamos juntos un ecosistema deportivo más seguro, honesto y entretenido.
            </p>
          </br>
            <h3 class="cta-slogan text-center">Juega limpio, Juega Arena!</h3>
        </div>
    </section>

    <!-- Download Cards -->
    <section class="download-cards container mt-xl mb-xl text-center fade-in">
       <h3 class="cta-slogan text-gradient">Descargas Disponibles.</h3>
      <div class="card left-card">
        <a href="https://fairplay-links.3ldago.workers.dev/j/p/e4ccfff7-c1e6-4230-b94e-3d8fad637ba3"
           target="_blank"
           rel="noopener"
           @click="trackDownload('android_card')">
          <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
               alt="Google Play Store"
               class="store-badge"/>
        </a>
      </div>
      <div class="card right-card">
        <a href="#"
           class="pending-ios"
           @click="trackDownload('ios_pending')">
          <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
               alt="Apple App Store (pending)"
               class="store-badge"/>
        </a>
      </div>
    </section>

    <!-- Download Cards -->

  </div>
</template>

<script setup>
import { useGtag } from "vue-gtag-next";

const { event } = useGtag();

const trackDownload = (platform) => {
  event('download_app', {
    'event_category': 'engagement',
    'event_label': platform,
    'value': 1
  });
};
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
  margin-bottom: var(--spacing-md);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.intro-box {
    margin-top: var(--spacing-lg);
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.1rem;
    line-height: 1.6;
    color: var(--color-dark-text);
}

.hero-tags {
  display: flex;
  justify-content: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
}

.tag {
  background: rgba(59, 130, 246, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-full);
  font-size: 0.875rem;
  color: var(--color-primary);
  border: 1px solid rgba(59, 130, 246, 0.2);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
}

.feature-card {
  background: var(--color-dark-surface);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border-color: rgba(59, 130, 246, 0.3);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-md);
}

.feature-card h3 {
  color: var(--color-dark-text);
  margin-bottom: var(--spacing-sm);
  font-size: 1.25rem;
}

.feature-card p {
  color: var(--color-dark-text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
}

.audience-card {
    background: linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%);
    border: 1px solid rgba(255, 255, 255, 0.05);
    padding: var(--spacing-xl);
    border-radius: var(--radius-xl);
}

.audience-text {
    font-size: 1.2rem;
    line-height: 1.8;
    color: var(--color-dark-text-muted);
    max-width: 900px;
    margin: 0 auto;
}

.audience-text strong {
    color: var(--color-primary-light);
}

.cta-section {
    padding: var(--spacing-xl) 0;
}

.cta-main-text {
    font-size: 1.25rem;
    color: var(--color-dark-text);
    margin-bottom: var(--spacing-sm);
}

.cta-slogan {
    font-size: 2rem;
    font-weight: 800;
}

.download-cards {
  display: flex;
  justify-content: center; /* center both cards */
  align-items: center;
  gap: var(--spacing-lg); /* space between cards */
  max-width: 800px;
  margin: var(--spacing-xl) auto;
}

.download-cards .card {
  flex: none; /* prevent stretching */
  text-align: center;
}

/* Ensure both store badges have the same visual size */
.store-badge {
  width: 180px;   /* same width for both badges */
  height: auto;   /* keep aspect ratio */
  max-height: 60px; /* optional max height to keep them balanced */
}


@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
     font-size: 1.1rem;
  }

  .cta-slogan {
      font-size: 1.5rem;
  }

  /* Stack download cards on mobile */
  .download-cards {
    flex-direction: column;
    gap: var(--spacing-md);
  }
}
</style>
