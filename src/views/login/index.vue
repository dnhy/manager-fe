<template>
  <div
    class="content w-full h-screen bg-gradient-to-r from-[#e2e2e2] to-[#c9d6ff] flex items-center justify-center"
  >
    <div
      class="w-[850px] h-[550px] rounded-[30px] bg-white shadow-[0_0_30px_rgba(0,0,0,0.2)] relative overflow-hidden"
      :class="{ active: !isLogin }"
    >
      <div class="toggle-box">
        <LoginTips
          :class="[isLogin ? 'left-0 delay-[1.2s]' : '-left-1/2  delay-[0.6s]']"
          type="log"
          v-model="isLogin"
        />
        <LoginTips
          :class="[
            isLogin ? '-right-1/2 delay-[0.6s]' : 'right-0 delay-[1.2s]',
          ]"
          type="reg"
          v-model="isLogin"
        />
      </div>

      <div
        class="login w-1/2 h-full text-center px-10 absolute right-0"
        :class="[isLogin ? 'py-14' : 'py-8 left-0']"
      >
        <LoginForm :socialIcons="socialIcons" :isLogin="isLogin" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import LoginForm from "@/components/LoginForm/index.vue";
import LoginTips from "@/components/LoginTips/index.vue";
const socialIcons = ref([
  { icon: "google", url: "" },
  { icon: "facebook", url: "" },
  { icon: "github", url: "" },
  { icon: "instagram", url: "" },
]);

const isLogin = ref(true);
</script>

<style lang="scss" scoped>
.content {
  font-family: Poppins, sans-serif;
}

.toggle-box::before {
  content: "";
  position: absolute;
  left: -250%;
  width: 300%;
  height: 100%;
  background-color: #7494ec;
  z-index: 2;
  border-radius: 150px;
  transition: 1.8s ease-in-out;
}

.active .toggle-box::before {
  left: 50%;
}
</style>
