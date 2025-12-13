<template>
  <section class="container mt-lg mb-lg">
    <h1>Contáctanos</h1>
    <p class="mb-lg text-center">
      Si estás interesado en transformar la gestión del deporte comunal y deseas más información sobre cómo nuestra plataforma puede ayudarte, por favor completa el siguiente formulario. Estamos comprometidos a promover una cultura deportiva justa y transparente.
    </p>

    <form class="card" @submit.prevent="sendEmail">
      <div>
        <label class="label">Nombre</label>
        <input class="input" v-model="form.nombre" placeholder="Nombre completo" required />
      </div>

      <div style="margin-top: 1rem;">
        <label class="label">Correo</label>
        <input class="input" v-model="form.correo" type="email" placeholder="correo@ejemplo.com" required />
      </div>

      <div style="margin-top: 1rem;">
        <label class="label">Mensaje</label>
        <textarea class="input" rows="4" v-model="form.mensaje" placeholder="Escribe tu mensaje aquí..." required></textarea>
      </div>

      <button class="btn btn-primary mt-lg">Enviar</button>
    </form>
  </section>
</template>

<script setup>
import { reactive } from "vue";
import emailjs from "@emailjs/browser";
import { useRouter } from "vue-router";

const router = useRouter();

const form = reactive({
  nombre: "",
  correo: "",
  mensaje: ""
});

const sendEmail = async () => {
  try {
    const templateParams = {
      ...form,
      name: form.nombre,
      email: form.correo,
      message: form.mensaje,
    };

    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    // Limpiar formulario
    form.nombre = "";
    form.correo = "";
    form.mensaje = "";

    // Redirigir al componente de agradecimiento
    router.push('/gracias');

  } catch (error) {
    console.error(error);
    alert("Ocurrió un error al enviar el correo.");
  }
};
</script>

