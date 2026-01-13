<template>
  <div 
    class="plan-card" 
    :class="{ 'plan-card--selected': selected }"
  >
    <div class="plan-header">
      <h3 class="plan-name">{{ plan.nombre }}</h3>
      <div class="plan-price">
        <span class="currency">$</span>
        <span class="amount">{{ formatNumber(precioPromocional) }}</span>
        <span class="period">/{{ etiquetaPeriodo }}</span>
      </div>
      <div class="plan-price-annual" v-if="mostrarPrecioNormal">
        <span class="price-normal">{{ formatCurrency(precioNormal) }}</span>
        <span class="price-promo-label">Precio normal</span>
      </div>
    </div>
    
    <div class="plan-body">
      <p class="plan-description">{{ plan.descripcion }}</p>
      <div class="mode-selector">
        <button 
          type="button"
          class="mode-pill"
          :class="{ active: selectedMode === 'MENSUAL' }"
          @click="selectedMode = 'MENSUAL'"
        >
          Mensual
        </button>
        <button 
          type="button"
          class="mode-pill"
          :class="{ active: selectedMode === 'SEMESTRAL' }"
          @click="selectedMode = 'SEMESTRAL'"
        >
          Semestral <span class="badge badge-save">💰 Ahorra 5%</span>
        </button>
        <button 
          type="button"
          class="mode-pill"
          :class="{ active: selectedMode === 'ANUAL' }"
          @click="selectedMode = 'ANUAL'"
        >
          Anual <span class="badge badge-hot">🔥 Más popular</span>
        </button>
      </div>
      <ul class="plan-features" v-if="plan.features">
        <li v-for="(feature, index) in plan.features" :key="index">
          {{ feature }}
        </li>
      </ul>
    </div>

    <div class="plan-footer">
      <button class="select-btn" type="button" @click="emitSelect">
        Elegir Plan
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, computed } from 'vue';

const props = defineProps({
  plan: {
    type: Object,
    required: true
  },
  selected: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['select']);

const { plan } = props;

const selectedMode = ref('MENSUAL');

const etiquetaPeriodo = computed(() => {
  if (selectedMode.value === 'SEMESTRAL') return '6 meses';
  if (selectedMode.value === 'ANUAL') return 'año';
  return 'mes';
});

const precioNormal = computed(() => {
  const base = plan.precio_mensual || 0;
  if (selectedMode.value === 'SEMESTRAL') {
    return base * 6;
  }
  if (selectedMode.value === 'ANUAL') {
    return base * 12;
  }
  return base;
});

const precioPromocional = computed(() => {
  const base = plan.precio_mensual || 0;
  if (selectedMode.value === 'SEMESTRAL') {
    return Math.round(base * 6 * 0.95);
  }
  if (selectedMode.value === 'ANUAL') {
    return Math.round(base * 12 * 0.8);
  }
  return base;
});

const mostrarPrecioNormal = computed(() => selectedMode.value !== 'MENSUAL');

const formatNumber = (value) => {
  return new Intl.NumberFormat('es-CL', { style: 'decimal' }).format(value || 0);
};

const formatCurrency = (value) => {
  return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(value || 0);
};

const emitSelect = () => {
  emit('select', {
    plan,
    periodicidad: selectedMode.value,
    monto: precioPromocional.value
  });
};
</script>

<style scoped>
.plan-card {
  background: var(--color-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.plan-card:hover {
  transform: translateY(-5px);
  border-color: var(--color-primary);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2);
}

.plan-card--selected {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px var(--color-primary);
}

.plan-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--spacing-md);
}

.plan-price {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: var(--spacing-sm);
  line-height: 1;
}

.plan-price-annual {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  margin-bottom: var(--spacing-sm);
}

.price-normal {
  text-decoration: line-through;
  margin-right: 0.5rem;
}

.price-promo-label {
  font-size: 0.85rem;
  opacity: 0.8;
}

.currency {
  font-size: 1.25rem;
  vertical-align: top;
  margin-right: 2px;
  color: var(--color-text-muted);
}

.period {
  font-size: 1rem;
  color: var(--color-text-muted);
  font-weight: 400;
}

.plan-body {
  flex: 1;
  margin: var(--spacing-lg) 0;
}

.plan-description {
  color: var(--color-text-muted);
  margin-bottom: var(--spacing-md);
  line-height: 1.6;
}

.mode-selector {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.mode-pill {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem 0.75rem;
  background: rgba(15, 23, 42, 0.6);
  border-radius: 9999px;
  border: 1px solid var(--color-border);
  color: var(--color-text);
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s;
}

.mode-pill.active {
  border-color: var(--color-primary);
  background: rgba(34, 197, 94, 0.1);
}

.badge {
  font-size: 0.8rem;
}

.badge-save {
  color: #facc15;
}

.badge-hot {
  color: #fb7185;
}

.plan-footer {
  margin-top: auto;
}

.select-btn {
  width: 100%;
  padding: var(--spacing-md);
  background: transparent;
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
  border-radius: var(--radius-md);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.plan-card:hover .select-btn,
.plan-card--selected .select-btn {
  background: var(--color-primary);
  color: #fff;
}
</style>
