<script setup>
import { ref } from 'vue';

const services = ref([
  {
    icon: '💻',
    title: 'Desarrollo de Software a Medida',
    description: 'Diseñamos y construimos plataformas digitales personalizadas, adaptadas a las necesidades reales de cada organización.',
    features: [
      'Sistemas de gestión administrativa y operativa',
      'Gestión de usuarios, equipos o colaboradores',
      'Paneles de control, reportes y analítica de datos',
      'Integración con sistemas externos (pagos, correo, gob-digital, APIs)'
    ]
  },
  {
    icon: '⚙️',
    title: 'Automatización y Digitalización de Procesos',
    description: 'Optimizamos el tiempo y los recursos de tu organización mediante la automatización de procesos clave.',
    features: [
      'Inscripciones y registros online',
      'Flujos de aprobación y validación',
      'Pagos, cobros y control financiero',
      'Notificaciones y comunicaciones automatizadas'
    ]
  },
  {
    icon: '📱',
    title: 'Desarrollo de Aplicaciones Móviles',
    description: 'Creamos aplicaciones móviles modernas y escalables, enfocadas en la experiencia del usuario.',
    features: [
      'Acceso a información en tiempo real',
      'Notificaciones push y seguimiento de actividades',
      'Integración con plataformas web y backend'
    ]
  },
  {
    icon: '🧠',
    title: 'Consultoría y Acompañamiento Tecnológico',
    description: 'Acompañamos a las organizaciones en su proceso de transformación digital.',
    features: [
      'Levantamiento y análisis de requerimientos',
      'Diseño de arquitectura tecnológica',
      'Mejora de procesos y adopción digital',
      'Soporte, evolución y escalabilidad de soluciones'
    ]
  }
]);
</script>

<template>
  <div class="container mt-lg mb-lg">
    <div class="text-center mb-lg">
      <h1 class="fade-in">Servicios</h1>
      <p class="section-description fade-in delay-1">
        Desarrollamos soluciones tecnológicas a medida para organizaciones deportivas, empresas e instituciones que buscan modernizar sus procesos, optimizar su gestión y escalar de forma sostenible.
      </p>
    </div>

    <div class="services-grid">
      <div 
        v-for="(service, index) in services" 
        :key="index" 
        class="card service-card fade-in"
        :style="{ animationDelay: `${index * 100 + 200}ms` }"
      >
        <div class="service-header mb-lg">
          <div class="icon-box">
            <span class="service-icon">{{ service.icon }}</span>
          </div>
          <h3 class="service-title">{{ service.title }}</h3>
        </div>
         <p>{{ service.description }}</p>
         <ul class="features-list mt-lg">
          <li v-for="(feature, fIndex) in service.features" :key="fIndex" class="feature-item">
            <span class="check-icon">✓</span>
            {{ feature }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section-description {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
}

.service-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background: rgba(34, 197, 94, 0.1);
  border-radius: var(--radius-md);
  margin-bottom: var(--spacing-md);
}

.service-icon {
  font-size: 2rem;
}

.features-list {
  margin-top: auto;
  padding-top: var(--spacing-md);
  border-top: 1px solid var(--color-border);
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-sm);
  color: var(--color-text-muted);
  font-size: 0.95rem;
}

.check-icon {
  color: var(--color-primary);
  font-weight: bold;
}

/* Animations */
.fade-in {
  opacity: 0;
  animation: fadeIn 0.6s ease-out forwards;
}

.delay-1 {
  animation-delay: 200ms;
}

.service-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.icon-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background: rgba(34, 197, 94, 0.1);
  border-radius: var(--radius-md);
  flex-shrink: 0; /* evita que se aplaste */
}

.service-icon {
  font-size: 2rem;
}

.service-title {
  margin: 0;
  line-height: 1.2;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
