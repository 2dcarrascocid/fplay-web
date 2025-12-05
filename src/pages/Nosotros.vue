<template>
  <section class="container mt-lg mb-lg">
    <h1>Sobre Nosotros</h1>

    <p>
      FAIR-PLAY CHILE es una empresa dedicada al desarrollo de software y soluciones 
      tecnológicas para organizaciones deportivas. Nuestra misión es impulsar la 
      transformación digital del deporte chileno mediante herramientas modernas, 
      escalables y pensadas para atletas, entrenadores y dirigentes.
    </p>

    <BaseCard class="mt-lg">
      <h3>Nuestra Visión</h3>
      <p>
        Ser la empresa líder de tecnología aplicada al deporte en Chile, apoyando a 
        clubes, academias y federaciones en su camino hacia una gestión eficiente y digital.
      </p>
    </BaseCard>

    <BaseCard class="mt-lg">
      <h3>Nuestros Valores</h3>
      <ul style="margin-top: 1rem;">
        <li>✔ Innovación constante</li>
        <li>✔ Transparencia y confianza</li>
        <li>✔ Compromiso con el deporte chileno</li>
        <li>✔ Excelencia en cada proyecto</li>
      </ul>
    </BaseCard>
  </section>
</template>

<script setup>
import BaseCard from "../components/base/BaseCard.vue";
</script>
