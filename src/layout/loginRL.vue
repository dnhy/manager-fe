<template>
  <div
    class="content w-full h-screen bg-gradient-to-r from-[#e2e2e2] to-[#c9d6ff] flex items-center justify-center"
  >
    <div
      class="w-[850px] h-[550px] rounded-[30px] bg-white shadow-[0_0_30px_rgba(0,0,0,0.2)] relative overflow-hidden select-none"
    >
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.content {
  font-family: Poppins, sans-serif;
}

.fade-enter-active {
  transition: all 1s;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}
</style>
