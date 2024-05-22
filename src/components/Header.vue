<script setup lang="ts">
import Icons from '@/components/Icons.vue'
</script>

<template>
  <header class="header">
    <section class="container">
        <Icons icon-name='logo'/>
    </section>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background-color: white;
  min-height: 123px;
  box-shadow: 0rem 0.25rem 0.25rem 0rem rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
}
</style>
