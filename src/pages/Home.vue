<template>
  <section class="container mt-lg">
    <HeroSection />

    <h2 class="text-center mt-lg">Nuestros Servicios</h2>
    <div class="flex gap-lg justify-center mt-lg" style="flex-wrap: wrap;">

      <BaseCard style="width: 320px;">
        <h3>Software Deportivo</h3>
        <p>Desarrollo de plataformas a medida para clubes, academias y federaciones.</p>
      </BaseCard>

      <BaseCard style="width: 320px;">
        <h3>Automatización</h3>
        <p>Digitalizamos procesos administrativos y deportivos.</p>
      </BaseCard>

      <BaseCard style="width: 320px;">
        <h3>Gestión de Torneos</h3>
        <p>Herramientas para organizar campeonatos, fixtures y rankings en tiempo real.</p>
      </BaseCard>

      <BaseCard style="width: 320px;">
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
