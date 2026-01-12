<template>
  <div 
    class="plan-card" 
    :class="{ 'plan-card--selected': selected }"
    @click="$emit('select')"
  >
    <div class="plan-header">
      <h3 class="plan-name">{{ plan.nombre }}</h3>
      <div class="plan-price">
        <span class="currency">$</span>
        <span class="amount">{{ formatPrice(plan.precio_mensual) }}</span>
        <span class="period">/mes</span>
      </div>
       <div class="plan-price-annual" v-if="plan.precio_anual">
        <span class="amount">{{ formatPrice(plan.precio_anual) }}</span>
        <span class="period">/anual</span>
      </div>
    </div>
    
    <div class="plan-body">
      <p class="plan-description">{{ plan.descripcion }}</p>
      <ul class="plan-features" v-if="plan.features">
        <li v-for="(feature, index) in plan.features" :key="index">
          {{ feature }}
        </li>
      </ul>
    </div>

    <div class="plan-footer">
      <button class="select-btn">Elegir Plan</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

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

const formatPrice = (value) => {
  return new Intl.NumberFormat('es-CL', { style: 'decimal' }).format(value);
};
</script>

<style scoped>
.plan-card {
  background: #1e1e1e;
  border: 1px solid #333;
  border-radius: 12px;
  padding: 2rem;
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
  border-color: #42b883; /* Vue Green or Brand Color */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.plan-card--selected {
  border-color: #42b883;
  box-shadow: 0 0 0 2px #42b883;
}

.plan-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
}

.plan-price {
  font-size: 2rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 0.5rem;
}

.plan-price-annual {
    font-size: 0.9rem;
    color: #888;
}

.currency {
  font-size: 1rem;
  vertical-align: top;
  margin-right: 2px;
}

.period {
  font-size: 1rem;
  color: #888;
  font-weight: 400;
}

.plan-body {
  flex: 1;
  margin: 1.5rem 0;
}

.plan-description {
  color: #ccc;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.plan-footer {
  margin-top: auto;
}

.select-btn {
  width: 100%;
  padding: 0.8rem;
  background: transparent;
  border: 2px solid #42b883;
  color: #42b883;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.plan-card:hover .select-btn,
.plan-card--selected .select-btn {
  background: #42b883;
  color: #fff;
}
</style>
