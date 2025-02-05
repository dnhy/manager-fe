<template>
  <button
    class="h-12 bg-blue text-white rounded-lg cursor-pointer font-semibold shadow"
    :class="btnFormts[formt]"
    type="button"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

enum btnFormts {
  primary = "bg-blue text-white",
  success = "bg-green text-white",
}

const { formt, disabled } = defineProps({
  formt: {
    type: String,
    default: "primary",
  },
  disabled: {
    type: Boolean,
  },
});
</script>

<style lang="scss" scoped></style>
