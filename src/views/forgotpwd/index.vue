<template>
  <div class="w-1/2 mx-auto text-center">
    <form @submit.prevent="changePassword">
      <div class="my-5 font-bold text-4xl">Forget Password</div>
      <LoginInput
        placeholder="Email"
        iconName="mail"
        class="relative mb-7"
        type="email"
        v-model="form.userEmail"
        required
      />
      <LoginInput
        placeholder="new password"
        type="password"
        iconName="lock"
        class="relative mb-7"
        v-model="form.userPwd"
        required
      />
      <LoginInput
        placeholder="confirm new password"
        type="password"
        iconName="lock"
        class="relative mb-7"
        v-model="userPwdmCf"
        required
      />
      <div class="flex items-center mb-7">
        <LoginInput
          class="w-[70%] mr-2"
          placeholder="image verify code"
          type="text"
          iconName="text"
          v-model="imgVerifyCode"
          required
        />
        <div v-html="validateImg" @click="getValidateImg"></div>
      </div>
      <div class="flex items-center mb-8">
        <LoginInput
          class="w-[70%] mr-2"
          placeholder="email verify code"
          type="text"
          iconName="text"
          v-model="form.emailVerifyCode"
          required
        />
        <LoginButton
          class="w-[30%]"
          formt="success"
          @click="sendEmailCode"
          :disabled="disabled"
        >
          {{ disabled ? timeSend + "s" : "send" }}
        </LoginButton>
      </div>
      <div class="-mt-4 mb-4">
        <router-link to="login">Already have an account？</router-link>
      </div>
      <LoginButton class="w-full" type="submit">submit</LoginButton>
    </form>
  </div>
</template>

<script setup lang="ts">
import LoginInput from "@/components/LoginInput/index.vue";
import LoginButton from "@/components/LoginButton/index.vue";
import { onMounted, reactive, ref } from "vue";
import { reqGetValidateImg, reqSendEmailCode } from "@/api/user";
import toast from "@/lib/toast";

function changePassword() {}

const form = reactive({
  userEmail: "",
  userPwd: "",
  emailVerifyCode: "",
});
const userPwdmCf = ref<string>("");
const imgVerifyCode = ref<string>("");
const validateImg = ref("");
let disabled = ref(false);
const seconde = 10;
let timeSend = ref(seconde);

async function getValidateImg() {
  const res = await reqGetValidateImg();
  if (res.code === 200) {
    validateImg.value = res.data.img;
  }
}

async function sendEmailCode() {
  var reg = /^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/;

  if (form.userEmail === "") {
    toast.error("请输入邮箱");

    return;
  }
  if (!reg.test(form.userEmail)) {
    toast.error("邮箱格式不正确");

    return;
  }

  if (imgVerifyCode.value === "") {
    toast.error("请输入验证码");

    return;
  }

  const res = await reqSendEmailCode(imgVerifyCode.value, form.userEmail);
  if (res.code === 200) {
    toast.info(res.msg);

    disabled.value = true;
    let interval = setInterval(() => {
      if (timeSend.value === 0) {
        clearInterval(interval);
        disabled.value = false;
        timeSend.value = seconde;

        return;
      }

      timeSend.value -= 1;
    }, 1000);
  } else {
    toast.error(res.msg);
  }

  getValidateImg();
}

onMounted(() => {
  getValidateImg();
});
</script>

<style lang="scss" scoped>
.content {
  font-family: Poppins, sans-serif;
}
</style>
