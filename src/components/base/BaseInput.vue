<template>
  <div>
    <label v-if="label" class="label">{{ label }}</label>
    <input
      class="input"
      :type="type"
      :placeholder="placeholder"
      v-model="model"
    >
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  label: String,
  placeholder: String,
  type: {
    type: String,
    default: "text"
  },
  modelValue: {
    type: [String, Number],
    default: ""
  }
});

const emits = defineEmits(["update:modelValue"]);

const model = computed({
  get: () => props.modelValue,
  set: value => emits("update:modelValue", value)
});
</script>
