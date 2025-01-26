<template>
  <div>
    <input
      class="login-input"
      :type="type"
      :placeholder="placeholder"
      v-model="value"
    />
    <svg-icon
      v-if="iconName"
      class="input-icon"
      :name="iconName"
      color="#888"
      width="20px"
      height="20px"
    ></svg-icon>
  </div>
</template>

<script setup lang="ts">
import { defineModel, defineProps } from "vue";

let value = defineModel();

const { placeholder, iconName, type } = defineProps({
  placeholder: {
    type: String,
    default: "Please input something...",
  },
  iconName: {
    type: String,
  },
  type: {
    type: String,
    default: "text",
  },
});
</script>

<style lang="scss" scoped></style>
