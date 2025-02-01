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
        v-model="userName"
      />
      <LoginInput
        class="relative my-8"
        placeholder="Password"
        iconName="lock"
        type="password"
        v-model="userPwd"
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
      @click="
        () => {
          isLogin ? login() : regist();
        }
      "
    >
      {{ isLogin ? "login" : "regist" }}
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
        @click="() => getUserInfo()"
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
import { useStore } from "vuex"; // 引入useStore 方法
import { useRouter } from "vue-router";

const store = useStore();
const { socialIcons, isLogin } = defineProps(["socialIcons", "isLogin"]);
const userName = ref("");
const userPwd = ref("");
const router = useRouter();

async function login() {
  const data = {
    userName: userName.value,
    userPwd: userPwd.value,
  };
  const isLogin = await store.dispatch("login", data);
  isLogin && router.push("/home");
}

function getUserInfo() {
  store.dispatch("getUserInfo").catch((params) => {});
}

function regist() {}
</script>

<style lang="scss" scoped></style>
