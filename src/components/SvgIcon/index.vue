<template>
  <svg :style="{ width, height }">
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
defineProps({
  prefix: {
    type: String,
    default: "#icon-",
  },
  name: String,
  color: {
    type: String,
    default: "#ccc",
  },
  width: {
    type: String,
    default: "130px",
  },
  height: {
    type: String,
    default: "130px",
  },
});
</script>
