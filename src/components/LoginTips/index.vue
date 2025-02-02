<template>
  <div
    class="register w-1/2 h-full flex flex-col items-center justify-center absolute z-10 text-white duration-700 ease-in-out"
  >
    <h1 class="text-4xl">
      {{ showLogin ? "Hello, Welcome!" : "Welcome Back!" }}
    </h1>
    <p class="text-[14px] mt-2 mb-5">
      {{ showLogin ? "Don's have an account?" : "Already have an account?" }}
    </p>
    <button
      class="w-[160px] h-[46px] border-2 border-solid border-white rounded-lg"
      @click="toggle"
    >
      {{ showLogin ? "Register" : "Login" }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, defineModel, inject, type Ref } from "vue";
const { type } = defineProps(["type"]);
const showLogin = computed(() => type === "log");
const isLogin = inject<Ref>("isLogin");

function toggle() {
  isLogin.value = !isLogin.value;
}
</script>

<style lang="scss" scoped></style>
