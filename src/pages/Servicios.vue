<template>
  <section class="container mt-lg mb-lg">
    <h1>Servicios</h1>
    <p>Soluciones tecnológicas diseñadas para organizaciones deportivas modernas.</p>

    <div class="flex flex-col gap-lg mt-lg">
      
      <BaseCard>
        <h3>Software Deportivo a Medida</h3>
        <p>Plataformas creadas según las necesidades de clubes, academias y federaciones.</p>
        <ul style="margin-top: 1rem;">
          <li>✓ Gestión administrativa</li>
          <li>✓ Control de atletas</li>
          <li>✓ Paneles de rendimiento</li>
        </ul>
      </BaseCard>

      <BaseCard>
        <h3>Automatización de Procesos</h3>
        <p>Optimiza el tiempo de tu equipo digitalizando procesos clave.</p>
        <ul style="margin-top: 1rem;">
          <li>✓ Fichajes</li>
          <li>✓ Pagos y cobros</li>
          <li>✓ Inscripciones online</li>
        </ul>
      </BaseCard>

      <BaseCard>
        <h3>Torneos y Competencias</h3>
        <p>Gestión completa de campeonatos, fixtures y resultados en vivo.</p>
        <ul style="margin-top: 1rem;">
          <li>✓ Inscripciones</li>
          <li>✓ Fixture automático</li>
          <li>✓ Resultados y rankings</li>
        </ul>
      </BaseCard>

      <BaseCard>
        <h3>Aplicaciones Móviles</h3>
        <p>Apps deportivas para atletas, entrenadores y organizadores.</p>
      </BaseCard>

    </div>
  </section>
</template>

<script setup>
import BaseCard from "../components/base/BaseCard.vue";
</script>
