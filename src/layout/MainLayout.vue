<script lang="ts" setup>
  import Header from "@/components/Header.vue";
  import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="wrapper">
    <Header />
    <main class="main">
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 0;
    height: 100vh;
  }
  .main {
    flex: 1 1 0;
  }
</style>
