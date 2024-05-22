<script setup lang="ts">
  import Icons from "@/components/Icons.vue";
</script>

<template>
  <footer class="footer">
    <section class="container">
      <Icons icon-name="logo" />
      <p class="footer__cooperate">
        © alpha, 2023
      </p>
    </section>
  </footer>
</template>

<style lang="scss" scoped>
  .footer {
    background-color: #f0f6fe;
    min-height: 202px;
    display: flex;
    align-items: center;
  }

  .footer__cooperate {
    color: #81899D;
    font-size: 16px;
    font-weight: 400;
    margin-top: 16px;
  }
</style>
