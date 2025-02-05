<template>
  <div :class="{ active: !isLogin }">
    <div class="toggle-box">
      <LoginTips
        :class="[isLogin ? 'left-0 delay-[1.2s]' : '-left-1/2  delay-[0.6s]']"
        type="log"
      />
      <LoginTips
        :class="[isLogin ? '-right-1/2 delay-[0.6s]' : 'right-0 delay-[1.2s]']"
        type="reg"
      />
    </div>

    <div
      class="login w-1/2 h-full text-center px-10 absolute right-0"
      :class="[isLogin ? 'py-14' : 'py-8 left-0']"
    >
      <LoginForm :socialIcons="socialIcons" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { provide, type Ref, ref } from "vue";
import LoginForm from "@/components/LoginForm/index.vue";
import LoginTips from "@/components/LoginTips/index.vue";
const socialIcons = ref([
  { icon: "google", url: "" },
  { icon: "facebook", url: "" },
  { icon: "github", url: "" },
  { icon: "instagram", url: "" },
]);

const isLogin = ref(true);

provide<Ref>("isLogin", isLogin);
</script>

<style lang="scss" scoped>
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
