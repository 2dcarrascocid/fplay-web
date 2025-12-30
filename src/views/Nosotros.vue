<template>
  <section class="container mt-lg mb-lg text-center">
    <h1 class="fade-in">Nosotros</h1>

    <div class="intro-text fade-in delay-1">
      <p>
        FAIR PLAY CHILE es una empresa de desarrollo de software y soluciones tecnológicas que opera bajo un modelo de software factory, especializada en el diseño, construcción e implementación de sistemas digitales a medida.
      </p>
      <p>
        Desarrollamos plataformas, aplicaciones y servicios tecnológicos para organizaciones deportivas, empresas, instituciones y comunidades, abordando necesidades como gestión, automatización de procesos, análisis de datos, integración de sistemas y transformación digital.
      </p>
    </div>

    <div class="cards-wrapper">
      <BaseCard class="mt-lg text-center fade-in delay-2">
        <h3>Misión</h3>
        <p>
          Es impulsar la adopción tecnológica en Chile mediante soluciones modernas, escalables y seguras, construidas con enfoque en la experiencia de usuario, la eficiencia operativa y la transparencia, trabajando de manera colaborativa con atletas, entrenadores, dirigentes, equipos técnicos y organizaciones de distintos sectores.
        </p>
      </BaseCard>

      <BaseCard class="mt-lg text-center fade-in delay-3">
        <h3>Visión</h3>
        <p>
          Impulsar la transformación digital mediante software a medida, combinando tecnología, ética y colaboración para crear soluciones eficientes, transparentes y escalables.
        </p>
      </BaseCard>
    </div>

    <BaseCard class="mt-lg fade-in delay-4">
      <div class="values-section mt-md">
        <h2 class="text-center text-gradient mb-lg">Nuestros Valores</h2>
        <div class="values-grid">
          
          <article class="value-card">
            <div class="value-icon">🤝</div>
            <h3>Fair Play (Ética y Transparencia)</h3>
            <p>Actuamos con integridad, honestidad y responsabilidad en cada proyecto, promoviendo relaciones claras y justas con clientes, usuarios y colaboradores.</p>
          </article>

          <article class="value-card">
            <div class="value-icon">🚀</div>
            <h3>Innovación con Propósito</h3>
            <p>Desarrollamos soluciones modernas y escalables, enfocadas en resolver problemas reales y mejorar la forma en que las organizaciones operan y toman decisiones.</p>
          </article>

          <article class="value-card">
            <div class="value-icon">🧠</div>
            <h3>Colaboración</h3>
            <p>Creemos en el trabajo conjunto con nuestros clientes, entendiendo sus necesidades y co-creando soluciones tecnológicas alineadas a sus objetivos.</p>
          </article>

          <article class="value-card">
            <div class="value-icon">🛠️</div>
            <h3>Excelencia Técnica</h3>
            <p>Aplicamos buenas prácticas de ingeniería de software, cuidando la calidad, seguridad y mantenibilidad de cada solución que construimos.</p>
          </article>

          <article class="value-card">
            <div class="value-icon">👥</div>
            <h3>Enfoque en las Personas</h3>
            <p>Diseñamos tecnología centrada en el usuario, priorizando la experiencia, la accesibilidad y el impacto positivo en quienes la utilizan.</p>
          </article>

          <article class="value-card">
            <div class="value-icon">🌱</div>
            <h3>Crecimiento Sostenible</h3>
            <p>Buscamos un desarrollo responsable, escalable y sostenible, tanto para nuestros clientes como para nuestra organización y el ecosistema tecnológico.</p>
          </article>

        </div>
      </div>
    </BaseCard>
  </section>
</template>

<script setup>
import BaseCard from "../components/base/BaseCard.vue";
</script>

<style scoped>
.intro-text {
  max-width: 800px;
  margin: 0 auto;
}

.intro-text p {
  margin-bottom: var(--spacing-md);
}

.cards-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
}

.value-card {
  background: var(--color-dark-surface);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.value-card:hover {
  transform: translateY(-5px);
  border-color: var(--color-primary);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.value-icon {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-md);
  background: rgba(255, 255, 255, 0.05);
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.value-card h3 {
  margin-bottom: var(--spacing-sm);
  color: var(--color-primary);
  font-size: 1.25rem;
}

.value-card p {
  font-size: 0.95rem;
  color: var(--color-dark-text-muted);
  line-height: 1.6;
}

/* Animations */
.fade-in {
  opacity: 0;
  animation: fadeIn 0.8s ease-out forwards;
}

.delay-1 { animation-delay: 200ms; }
.delay-2 { animation-delay: 400ms; }
.delay-3 { animation-delay: 600ms; }
.delay-4 { animation-delay: 800ms; }

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
