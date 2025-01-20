<template>
  <div
    class="content w-full h-screen bg-gradient-to-r from-[#e2e2e2] to-[#c9d6ff] flex items-center justify-center"
  >
    <div
      class="w-[850px] h-[550px] rounded-[30px] bg-white shadow-[0_0_30px_rgba(0,0,0,0.2)]"
    >
      <div class="login">
        <form action="">
          <h1>Login</h1>
          <svg-icon
            name="user"
            color="red"
            width="20px"
            height="20px"
          ></svg-icon>
          <div><input type="text" placeholder="Username" /></div>
        </form>
      </div>
      <div class="registr"></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");

.content {
  font-family: Poppins, sans-serif;
}
</style>
