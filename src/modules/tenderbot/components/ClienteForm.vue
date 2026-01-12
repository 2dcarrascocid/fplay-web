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
                <input type="radio" v-model="periodicidad" value="ANUAL" />
                Anual
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
  error: String
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

const periodicidad = ref('MENSUAL');

const handleSubmit = () => {
  emit('submit', { cliente: { ...form }, periodicidad: periodicidad.value });
};
</script>

<style scoped>
.cliente-form-container {
  background: #252525;
  padding: 2rem;
  border-radius: 12px;
  max-width: 600px;
  margin: 0 auto;
}

h3 {
  color: #fff;
  margin-bottom: 1.5rem;
  text-align: center;
}

.form-group {
  margin-bottom: 1.2rem;
}

.form-row {
    display: flex;
    gap: 1rem;
}
.form-row .form-group {
    flex: 1;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #aaa;
  font-size: 0.9rem;
}

.form-input {
  width: 100%;
  padding: 0.8rem;
  background: #1a1a1a;
  border: 1px solid #444;
  border-radius: 6px;
  color: #fff;
  font-size: 1rem;
}

.form-input:focus {
  border-color: #42b883;
  outline: none;
}

.periodicidad-selector {
    background: #1a1a1a;
    padding: 1rem;
    border-radius: 6px;
    border: 1px solid #333;
}

.radio-group {
    display: flex;
    gap: 2rem;
}

.radio-label {
    color: #fff;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
}

.form-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}

.btn-back {
  background: transparent;
  color: #aaa;
  border: none;
  padding: 0.8rem 1.5rem;
  cursor: pointer;
}

.btn-continue {
  background: #42b883;
  color: #fff;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
}

.btn-continue:disabled {
  background: #2a6f50;
  cursor: not-allowed;
}

.error-message {
  margin-top: 1rem;
  color: #ff4d4d;
  text-align: center;
  padding: 0.5rem;
  background: rgba(255, 77, 77, 0.1);
  border-radius: 4px;
}
</style>
