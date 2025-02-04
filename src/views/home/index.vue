<template>
  <div class="ml-9">
    <div class="my-2 text-center">home</div>
    <button
      class="rounded-md bg-blue text-white px-2 py-1 float-right mr-3"
      @click="logout"
    >
      logout
    </button>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";

const store = useStore();
function logout() {
  store.dispatch("logout");
}
</script>

<style lang="scss" scoped></style>
