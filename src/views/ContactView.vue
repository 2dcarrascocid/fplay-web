<template>
  <section class="container mt-lg" style="max-width: 600px;">
    <h1>Contáctanos</h1>
    <p class="mb-lg text-center">
      Si estás interesado en transformar la gestión del deporte comunal y deseas más información sobre cómo nuestra plataforma puede ayudarte, por favor completa el siguiente formulario. Estamos comprometidos a promover una cultura deportiva justa y transparente.
    </p>
    <form class="contact-form">
      <div class="form-group">
        <label class="label" for="name">Nombre</label>
        <input id="name" type="text" class="input" placeholder="Tu nombre" />
      </div>
      <div class="form-group">
        <label class="label" for="email">Correo</label>
        <input id="email" type="email" class="input" placeholder="tucorreo@example.com" />
      </div>
      <div class="form-group">
        <label class="label" for="message">Mensaje</label>
        <textarea id="message" rows="4" class="input" placeholder="Escribe tu mensaje"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
  </section>
</template>

<script setup>
// Form handling can be added later
</script>

<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.form-group {
  display: flex;
  flex-direction: column;
}
</style>
