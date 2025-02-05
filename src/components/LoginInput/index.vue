<template>
  <div class="relative">
    <input
      ref="input"
      class="login-input"
      :type="inputType"
      :placeholder="placeholder"
      v-model.trim="value"
      :required="required"
      @invalid="handleInvalid"
      @input="inputHandle"
      @mouseenter="showEye = true"
      @mouseleave="showEye = false"
      :pattern="validation?.pattern"
      :title="validation?.title"
      :maxlength="maxlength"
    />
    <svg-icon
      v-if="showEye && type === 'password'"
      class="eye-icon"
      :name="pwdEye"
      color="#7D7D7D"
      width="20px"
      height="20px"
      @click="changeEye"
      @mouseenter="showEye = true"
      @mouseleave="showEye = false"
    ></svg-icon>
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
import {
  computed,
  defineModel,
  defineProps,
  onMounted,
  ref,
  useTemplateRef,
} from "vue";

let value = defineModel();

const { placeholder, iconName, type, required, validation, maxlength } =
  defineProps({
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
    required: {
      type: Boolean,
      default: false,
    },
    maxlength: {
      type: Number,
    },
    validation: {
      type: Object,
    },
  });

const pwdEye = ref("eye-close");
const showEye = ref(false);

const inputType = computed(() => (pwdEye.value === "eye-open" ? "text" : type));

function changeEye() {
  pwdEye.value = pwdEye.value === "eye-close" ? "eye-open" : "eye-close";
}

function handleInvalid(e) {
  if (required && e.target.value === "") {
    e.target.setCustomValidity(`The ${placeholder.toLowerCase()} is needed.`);

    return;
  }
}

function inputHandle(e) {
  e.target.setCustomValidity("");
}
</script>

<style lang="scss" scoped>
.required-indicator {
  color: red;
  margin-left: 4px;
}

.required-text {
  color: red;
  margin-left: 4px;
}
</style>
