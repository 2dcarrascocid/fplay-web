<template>
  <div class="cliente-form-container">
    <h3>Datos del Cliente</h3>
    <form @submit.prevent="handleSubmit" class="cliente-form">
      <div class="form-group">
        <label>Razón Social / Nombre *</label>
        <input 
          v-model="form.razon_social" 
          type="text" 
          required 
          placeholder="Ej: Empresa SpA"
          class="form-input"
        />
      </div>

      <div class="form-group">
        <label>Email de Contacto *</label>
        <input 
          v-model="form.email_contacto" 
          type="email" 
          required 
          placeholder="contacto@empresa.com"
          class="form-input"
        />
      </div>

      <div class="form-row">
        <div class="form-group">
            <label>Nombre de Contacto</label>
            <input 
            v-model="form.nombre_contacto" 
            type="text" 
            placeholder="Juan Pérez"
            class="form-input"
            />
        </div>
        <div class="form-group">
            <label>RUT (Opcional)</label>
            <input 
            v-model="form.rut" 
            type="text" 
            placeholder="12.345.678-9"
            class="form-input"
            />
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
            <label>Teléfono</label>
            <input 
            v-model="form.telefono" 
            type="tel" 
            placeholder="+56 9 ..."
            class="form-input"
            />
        </div>
        <div class="form-group">
            <label>País</label>
            <select v-model="form.pais" class="form-input">
                <option value="Chile">Chile</option>
                <!-- Más países si fuera necesario -->
            </select>
        </div>
      </div>
      
      <div class="form-group periodicidad-selector">
        <label>Facturación</label>
        <div class="radio-group">
            <label class="radio-label">
                <input type="radio" v-model="periodicidad" value="MENSUAL" />
                Mensual
            </label>
            <label class="radio-label">
                <input type="radio" v-model="periodicidad" value="SEMESTRAL" />
                Semestral (Ahorra 5%)
            </label>
            <label class="radio-label">
                <input type="radio" v-model="periodicidad" value="ANUAL" />
                Anual (Ahorra 20%)
            </label>
        </div>
      </div>

      <div class="form-actions">
        <button type="button" class="btn-back" @click="$emit('back')">Atrás</button>
        <button type="submit" class="btn-continue" :disabled="loading">
            {{ loading ? 'Procesando...' : 'Continuar al Pago' }}
        </button>
      </div>

      <div v-if="error" class="error-message">
        {{ error }}
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const props = defineProps({
  loading: Boolean,
  error: String,
  periodicidadInicial: {
    type: String,
    default: 'MENSUAL'
  }
});

const emit = defineEmits(['submit', 'back']);

const form = reactive({
  razon_social: '',
  email_contacto: '',
  nombre_contacto: '',
  rut: '',
  telefono: '',
  pais: 'Chile'
});

const periodicidad = ref(props.periodicidadInicial || 'MENSUAL');

const handleSubmit = () => {
  emit('submit', { cliente: { ...form }, periodicidad: periodicidad.value });
};
</script>

<style scoped>
.cliente-form-container {
  background: var(--color-secondary);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid var(--color-border);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

h3 {
  color: var(--color-text);
  margin-bottom: var(--spacing-lg);
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
}

.form-group {
  margin-bottom: 1.25rem;
}

.form-row {
    display: flex;
    gap: var(--spacing-md);
}
.form-row .form-group {
    flex: 1;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--color-text-muted);
  font-size: 0.9rem;
  font-weight: 500;
}

.form-input {
  width: 100%;
  padding: 0.75rem 1rem;
  background: rgba(15, 23, 42, 0.5); /* Más oscuro que secondary */
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-text);
  font-size: 1rem;
  transition: all 0.2s;
}

.form-input:focus {
  border-color: var(--color-primary);
  outline: none;
  box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.2); /* Sombra focus verde */
}

.periodicidad-selector {
    background: rgba(15, 23, 42, 0.5);
    padding: var(--spacing-md);
    border-radius: var(--radius-md);
    border: 1px solid var(--color-border);
}

.radio-group {
    display: flex;
    gap: 2rem;
}

.radio-label {
    color: var(--color-text);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
}

.form-actions {
  display: flex;
  justify-content: space-between;
  margin-top: var(--spacing-xl);
}

.btn-back {
  background: transparent;
  color: var(--color-text-muted);
  border: none;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  font-weight: 500;
  transition: color 0.2s;
}

.btn-back:hover {
    color: var(--color-text);
}

.btn-continue {
  background: var(--color-primary);
  color: #fff;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: var(--radius-md);
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-continue:hover {
    background: var(--color-primary-hover);
}

.btn-continue:disabled {
  background: var(--color-border);
  cursor: not-allowed;
  opacity: 0.7;
}

.error-message {
  margin-top: var(--spacing-md);
  color: var(--color-danger);
  text-align: center;
  padding: 0.75rem;
  background: rgba(239, 68, 68, 0.1);
  border-radius: var(--radius-sm);
  border: 1px solid rgba(239, 68, 68, 0.2);
}
</style>
