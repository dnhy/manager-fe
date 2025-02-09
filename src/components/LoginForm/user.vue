<template>
  <div>{{ a }}</div>
</template>

<!-- <script setup lang="ts">
import { ref, defineExpose } from "vue";

const a = ref("111111");
defineExpose({
  a,
});
</script> -->

<script>
import { ref, defineExpose } from "vue";

export default {
  setup() {
    const a = ref(0);
    const b = ref(122112);

    defineExpose({
      b,
    });

    // 返回值会暴露给模板和其他的选项式 API 钩子
    return {
      a,
    };
  },

  mounted() {
    console.log("a", this.a); // 0
  },
};
</script>

<style lang="scss" scoped></style>
