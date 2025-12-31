<template>
  <section class="container mt-lg">
    <HeroSection />

    <h2 class="text-center mt-lg mb-lg">¿Qué hacemos?</h2>
    <p class="text-center mb-lg">Desarrollamos soluciones tecnológicas a medida y productos digitales escalables.</p>
    <div class="flex gap-lg justify-center mt-lg wrap-cards">

      <BaseCard style="width: 320px;" class="service-card">
        <div class="card-icon">💻</div>
        <h3>Software a Medida</h3>
        <p>Desarrollamos plataformas personalizadas para organizaciones deportivas, empresas e instituciones.</p>
      </BaseCard>

      <BaseCard style="width: 320px;" class="service-card">
        <div class="card-icon">⚙️</div>
        <h3>Gestión de Eventos y Operaciones</h3>
        <p>Soluciones para eventos, flujos operativos y control de procesos en tiempo real.</p>
      </BaseCard>

      <BaseCard style="width: 320px;" class="service-card">
        <div class="card-icon">🏆</div>
        <h3>Aplicaciones Web y Móviles</h3>
        <p>Desarrollo de apps y plataformas digitales para usuarios, equipos y comunidades.</p>
      </BaseCard>
    </div>

    
    <h2 class="text-center mt-lg mb-lg">Cómo trabajamos</h2>
        <p class="text-center mb-lg">Operamos bajo un modelo de software factory, acompañando a nuestros clientes desde la idea hasta la implementación y evolución de sus soluciones digitales.</p>
    <div class="flex gap-lg justify-center mt-lg wrap-cards">

      <BaseCard style="width:540px;" class="service-card">
        <div class="card-icon"> 🧠</div>
        <ul>
          <li>✔ Levantamiento de requerimientos</li>
          <li>✔ Diseño UX/UI</li>
          <li>✔ Desarrollo y arquitectura</li>
          <li>✔ Integraciones y escalabilidad</li>
          <li>✔ Soporte y evolución continua</li>
        </ul>
        <br>
        <button class="btn btn-secondary" @click="goProductos">Ver productos</button>
      </BaseCard>


    </div>
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
import HeroSection from "../components/ui/HeroSection.vue";
import BaseCard from "../components/base/BaseCard.vue";
const goProductos = () => router.push("/productos");
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
