<template>
  <footer class="site-footer">
    <div class="footer-grid">
      <!-- Marca -->
      <div class="footer-brand">
        <strong>FAIR PLAY TECHNOLOGY SpA</strong>
        <span class="tagline">
          Software factory · Productos digitales · Transformación tecnológica
        </span>
      </div>

      <!-- Contacto -->
      <div class="footer-contact">
        <span class="label">Contacto</span>
        <a href="mailto:contacto@fairplay-chile.cl">
          contacto@fairplay-chile.cl
        </a>
      </div>

      <!-- Meta legal -->
      <div class="footer-meta">
        <span>© {{ year }}</span>
        <span>RUT: 78.323.762-8</span>
        <span class="version">Versión {{ version }}</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
const version = __APP_VERSION__
</script>
<style scoped>
.site-footer {
  border-top: 1px solid var(--color-border);
  padding: 1.5rem 1rem;
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.footer-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 0.75rem;
}

.footer-brand strong {
  display: block;
  font-weight: 600;
  color: var(--color-text);
}

.footer-brand .tagline {
  font-size: 0.75rem;
  opacity: 0.8;
}

.footer-contact {
  display: flex;
  flex-direction: column;
}

.footer-contact .label {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  opacity: 0.7;
}

.footer-contact a {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 500;
}

.footer-contact a:hover {
  text-decoration: underline;
}

.footer-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  font-size: 0.75rem;
  opacity: 0.7;
}

/* Desktop */
@media (min-width: 768px) {
  .footer-grid {
    grid-template-columns: 2fr 1fr 1fr;
    align-items: center;
  }

  .footer-meta {
    justify-content: flex-end;
  }
}

</style>