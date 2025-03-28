<script setup>
import { useRoute } from "vue-router";
import Navbar from "./components/NavBar.vue";

const route = useRoute();
</script>

<template>
  <!-- Navbar có hiệu ứng trượt xuống khi xuất hiện & trượt lên khi biến mất -->
  <transition name="slide" mode="out-in">
    <Navbar v-if="route.path !== '/'" />
  </transition>

  <!-- Hiệu ứng fade khi chuyển trang -->
  <transition name="fade" mode="out-in">
    <router-view :class="route.path !== '/' ? 'view' : ''" />
  </transition>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
}

.view {
  padding-top: 50px;
}

/* ✨ Hiệu ứng trượt xuống khi xuất hiện & trượt lên khi biến mất */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

/* Khi xuất hiện: Từ trên trượt xuống */
.slide-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}

/* Khi biến mất: Trượt lên */
.slide-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

/* ✨ Hiệu ứng fade khi chuyển trang */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
