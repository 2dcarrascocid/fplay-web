<template>
  <section class="container mt-lg">
    <HeroSection />

    <h2 class="text-center mt-lg mb-lg">Nuestros Servicios</h2>
    <div class="flex gap-lg justify-center mt-lg wrap-cards">

      <BaseCard style="width: 320px;" class="service-card">
        <div class="card-icon">💻</div>
        <h3>Software Deportivo</h3>
        <p>Desarrollo de plataformas a medida para clubes, academias y federaciones.</p>
      </BaseCard>

      <BaseCard style="width: 320px;" class="service-card">
        <div class="card-icon">⚙️</div>
        <h3>Automatización</h3>
        <p>Digitalizamos procesos administrativos y deportivos.</p>
      </BaseCard>

      <BaseCard style="width: 320px;" class="service-card">
        <div class="card-icon">🏆</div>
        <h3>Gestión de Torneos</h3>
        <p>Herramientas para organizar campeonatos, fixtures y rankings en tiempo real.</p>
      </BaseCard>

      <BaseCard style="width: 320px;" class="service-card">
        <div class="card-icon">📱</div>
        <h3>Software para aficionados</h3>
        <p>Desarrollo de app para la organizacion de eventos deportivos presenciales y online.</p>
      </BaseCard>
    </div>
  </section>
</template>

<script setup>
import HeroSection from "../components/ui/HeroSection.vue";
import BaseCard from "../components/base/BaseCard.vue";
</script>

<style scoped>
.wrap-cards {
  flex-wrap: wrap;
}

.service-card {
  text-align: center;
  transition: transform 0.2s ease;
}

.service-card:hover {
  transform: translateY(-5px);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: var(--spacing-sm);
  background: var(--color-bg-alt);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}
</style>
