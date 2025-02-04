<template>
  <form
    class="w-full"
    @submit.prevent="
      () => {
        isLogin ? login() : regist();
      }
    "
  >
    <h1 class="text-4xl">
      {{ isLogin ? "Login" : "Registration" }}
    </h1>

    <div v-if="isLogin">
      <LoginInput
        class="relative my-8"
        placeholder="Username"
        iconName="user"
        v-model="loginInfo.userName"
        required
      />
      <LoginInput
        class="relative my-8"
        placeholder="Password"
        iconName="lock"
        type="password"
        v-model="loginInfo.userPwd"
        required
      />
    </div>
    <div v-if="!isLogin">
      <LoginInput
        class="relative my-8"
        placeholder="Username"
        required
        iconName="user"
        v-model="registInfo.userName"
        :maxlength="10"
        :validation="{
          pattern: '^.{2,10}$',
          title: 'You can only enter 2-10 characters',
        }"
      />
      <LoginInput
        class="relative my-8"
        placeholder="Email"
        v-model="registInfo.userEmail"
        iconName="mail"
        type="email"
        required
      />
      <LoginInput
        class="relative my-8"
        placeholder="Password"
        v-model="registInfo.userPwd"
        iconName="lock"
        required
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
import {
  computed,
  defineProps,
  onMounted,
  reactive,
  ref,
  toRaw,
  useTemplateRef,
  defineModel,
  inject,
  type Ref,
} from "vue";
import LoginInput from "@/components/LoginInput/index.vue";
import { useStore } from "vuex"; // 引入useStore 方法
import { useRoute, useRouter } from "vue-router";
import { reqRegist } from "@/api/user";
import toast from "@/lib/toast";

const store = useStore();
const { socialIcons } = defineProps(["socialIcons"]);
const isLogin = inject<Ref>("isLogin");

let loginInfo;

let registInfo;

function initData() {
  loginInfo = reactive({
    userName: "",
    userPwd: "",
  });

  registInfo = reactive({
    userName: "",
    userPwd: "",
    userEmail: "",
  });
}

initData();
const $router = useRouter();
const $route = useRoute();

async function login() {
  const redirect: any = $route.query.redirect;

  const data = toRaw(loginInfo);
  await store.dispatch("login", data);
  $router.push(redirect || "/home");
}

async function regist() {
  const data = toRaw(registInfo);
  const res = await reqRegist(data);
  if (res.code === 200) {
    toast.info(res.msg);
    const temp = registInfo.userName;
    // 清空数据
    initData();
    loginInfo.userName = temp;
    isLogin.value = true;
  } else {
    toast.error(res.msg);
  }
}

function getUserInfo() {
  store.dispatch("getUserInfo").catch((params) => {});
}
</script>

<style lang="scss" scoped></style>
