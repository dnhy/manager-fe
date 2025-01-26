<template>
  <div
    class="register w-1/2 h-full flex flex-col items-center justify-center absolute z-10 text-white duration-700 ease-in-out"
  >
    <h1 class="text-4xl">
      {{ showLogin ? "Welcome Back!" : "Hello, Welcome!" }}
    </h1>
    <p class="text-[14px] mb-5">
      {{ showLogin ? "Already have an account?" : "Don's have an account?" }}
    </p>
    <button
      class="w-[160px] h-[46px] border-2 border-solid border-white rounded-lg"
      @click="toggle"
    >
      {{ showLogin ? "Login" : "Register" }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, defineModel } from "vue";
const { type } = defineProps(["type"]);
const showLogin = computed(() => type === "log");
const isLogin = defineModel();

function toggle() {
  isLogin.value = !isLogin.value;
}
</script>

<style lang="scss" scoped></style>
