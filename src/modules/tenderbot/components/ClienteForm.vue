<template>
  <div class="cliente-form-container">
    <h3>Datos del Cliente</h3>
    <form @submit.prevent="handleSubmit" class="cliente-form" novalidate>
      <div class="form-group">
        <label>Razón Social / Nombre *</label>
        <input 
          name="razon_social"
          v-model="form.razon_social" 
          type="text" 
          required 
          placeholder="Ej: Empresa SpA"
          class="form-input"
          :class="{ 'input-error': errors.razon_social }"
          @blur="handleBlur('razon_social')"
          @input="handleInput('razon_social')"
        />
        <span v-if="errors.razon_social" class="field-error">{{ errors.razon_social }}</span>
      </div>

      <div class="form-row">
        <div class="form-group">
            <label>Email de Contacto *</label>
            <input 
            name="email_contacto"
            v-model="form.email_contacto" 
            type="email" 
            required 
            placeholder="contacto@empresa.com"
            class="form-input"
            :class="{ 'input-error': errors.email_contacto }"
            @blur="handleBlur('email_contacto')"
            @input="handleInput('email_contacto')"
            />
            <span v-if="errors.email_contacto" class="field-error">{{ errors.email_contacto }}</span>
        </div>
        <div class="form-group">
            <label>Confirmar Email *</label>
            <input 
            name="email_confirmacion"
            v-model="form.email_confirmacion" 
            type="email" 
            required 
            placeholder="Repite el correo"
            class="form-input"
            :class="{ 'input-error': errors.email_confirmacion }"
            @blur="handleBlur('email_confirmacion')"
            @input="handleInput('email_confirmacion')"
            onpaste="return false"
            />
            <span v-if="errors.email_confirmacion" class="field-error">{{ errors.email_confirmacion }}</span>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
            <label>Nombre de Contacto</label>
            <input 
            name="nombre_contacto"
            v-model="form.nombre_contacto" 
            type="text" 
            placeholder="Juan Pérez"
            class="form-input"
            :class="{ 'input-error': errors.nombre_contacto }"
            @blur="handleBlur('nombre_contacto')"
            />
            <span v-if="errors.nombre_contacto" class="field-error">{{ errors.nombre_contacto }}</span>
        </div>
        <div class="form-group">
            <label>RUT (Opcional)</label>
            <input 
            name="rut"
            v-model="form.rut" 
            type="text" 
            placeholder="12.345.678-9"
            class="form-input"
            :class="{ 'input-error': errors.rut }"
            @blur="handleBlur('rut')"
            />
            <span v-if="errors.rut" class="field-error">{{ errors.rut }}</span>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
            <label>Teléfono</label>
            <input 
            name="telefono"
            v-model="form.telefono" 
            type="tel" 
            placeholder="+56 9 ..."
            class="form-input"
            :class="{ 'input-error': errors.telefono }"
            @blur="handleBlur('telefono')"
            />
            <span v-if="errors.telefono" class="field-error">{{ errors.telefono }}</span>
        </div>
        <div class="form-group">
            <label>País</label>
            <select v-model="form.pais" class="form-input">
                <option value="Chile">Chile</option>
            </select>
        </div>
      </div>
      
      <div class="form-group periodicidad-selector">
        <label>Facturación Seleccionada</label>
        <div class="periodicidad-display">
            <span class="period-badge">{{ periodicidadSeleccionada }}</span>
            <span class="period-info" v-if="periodicidadSeleccionada === 'SEMESTRAL'">Ahorro 5%</span>
            <span class="period-info" v-if="periodicidadSeleccionada === 'ANUAL'">Ahorro 20%</span>
            <span class="period-price" v-if="monto">{{ formatCurrency(monto) }}</span>
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
import { ref, reactive, nextTick } from 'vue';
import { useClienteValidation } from '../../../composables/useClienteValidation';

const props = defineProps({
  loading: Boolean,
  error: String,
  periodicidadSeleccionada: {
    type: String,
    required: true
  },
  monto: {
    type: Number,
    default: 0
  }
});

const emit = defineEmits(['submit', 'back']);

const { errors, validateField, validateAll, normalizeData } = useClienteValidation();

const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(value || 0);
};

const form = reactive({
  razon_social: '',
  email_contacto: '',
  email_confirmacion: '',
  nombre_contacto: '',
  rut: '',
  telefono: '',
  pais: 'Chile'
});

const handleBlur = (field) => {
  validateField(field, form[field], form);
};

const handleInput = (field) => {
  // Limpiar error al escribir si se desea, o validar agresivamente
  if (errors[field]) {
    validateField(field, form[field], form);
  }
};

const handleSubmit = async () => {
  const isValid = validateAll(form);
  
  if (!isValid) {
    // Scroll al primer error
    await nextTick();
    const firstErrorField = Object.keys(errors).find(key => errors[key]);
    if (firstErrorField) {
        const el = document.querySelector(`[name="${firstErrorField}"]`);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            el.focus();
        }
    }
    return;
  }

  // Normalizar datos (trim, formato rut/fono)
  const normalizedForm = normalizeData(form);
  // Eliminar email_confirmacion antes de enviar si no se necesita en backend
  delete normalizedForm.email_confirmacion;

  emit('submit', { cliente: normalizedForm });
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

.form-input.input-error {
    border-color: var(--color-danger);
    background: rgba(239, 68, 68, 0.05);
}

.form-input.input-error:focus {
    box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.2);
}

.field-error {
    display: block;
    color: var(--color-danger);
    font-size: 0.8rem;
    margin-top: 0.25rem;
}

.periodicidad-selector {
    background: rgba(15, 23, 42, 0.5);
    padding: var(--spacing-md);
    border-radius: var(--radius-md);
    border: 1px solid var(--color-border);
}

.periodicidad-display {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 0.5rem;
}

.period-badge {
    background: var(--color-primary);
    color: #fff;
    padding: 0.25rem 1rem;
    border-radius: 999px;
    font-weight: 600;
    font-size: 0.95rem;
}

.period-info {
    color: #facc15;
    font-size: 0.9rem;
    font-weight: 500;
}

.period-price {
    color: var(--color-text);
    font-weight: 700;
    font-size: 1.1rem;
    margin-left: auto;
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