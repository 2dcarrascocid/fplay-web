<template>
  <button 
    class="btn"
    :class="{
      'btn-primary': variant === 'primary',
      'btn-secondary': variant === 'secondary'
    }"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: "primary"
  }
});
</script>
