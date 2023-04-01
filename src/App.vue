<script setup lang="ts">
  import { RouterView, useRoute, useRouter } from "vue-router";
</script>

<template>
  <component :is="$route.meta?.layout || 'MainLayout'">
    <router-view></router-view>
  </component>
</template>

<style scoped></style>
