<template>
  <form action="" class="w-full">
    <h1 class="text-4xl">
      {{ isLogin ? "Login" : "Registration" }}
    </h1>

    <div v-show="isLogin">
      <LoginInput
        class="relative my-8"
        placeholder="Username"
        iconName="user"
      />
      <LoginInput
        class="relative my-8"
        placeholder="Password"
        iconName="lock"
        type="password"
      />
    </div>
    <div v-show="!isLogin">
      <LoginInput
        class="relative my-8"
        placeholder="Username"
        iconName="user"
      />
      <LoginInput class="relative my-8" placeholder="Email" iconName="mail" />
      <LoginInput
        class="relative my-8"
        placeholder="Password"
        iconName="lock"
        type="password"
      />
    </div>
    <div class="-mt-4 mb-4">
      <a href="">Forgot Password?</a>
    </div>
    <button
      type="submit"
      class="w-full h-12 bg-blue text-white rounded-lg cursor-pointer font-semibold shadow"
    >
      login
    </button>
    <div class="my-4">
      <a>or login with social platforms</a>
    </div>
    <div class="flex justify-center items-center">
      <div
        href=""
        class="p-2.5 border-2 border-solid border-grey2 rounded-lg mr-6 cursor-pointer"
        v-for="(item, index) in socialIcons"
        :key="index"
      >
        <svg-icon
          :name="item.icon"
          color="#333"
          width="25px"
          height="25px"
        ></svg-icon>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { computed, defineProps, ref } from "vue";
import LoginInput from "@/components/LoginInput/index.vue";

const { socialIcons, isLogin } = defineProps(["socialIcons", "isLogin"]);
</script>

<style lang="scss" scoped></style>
