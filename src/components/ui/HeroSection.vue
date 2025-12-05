<template>
  <section class="container text-center mt-lg mb-lg">
    <h1>Digitalizamos el deporte chileno</h1>
    <p>Software, automatización y rendimiento para organizaciones deportivas en Chile.</p>

    <div class="flex justify-center gap-md" style="margin-top: 2rem;">
      <button class="btn btn-primary" @click="goContact">Contáctanos</button>
      <button class="btn btn-secondary" @click="goServicios">Ver servicios</button>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const goContact = () => router.push("/contacto");
const goServicios = () => router.push("/servicios");
</script>
