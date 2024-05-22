<script setup lang="ts">

</script>

<template>
  <section class="main-banner">
      <img src="/banner.png" alt="Banner" class="main-banner_image">
    <section class="container">
        <h1 class="main-banner_title">
           Новости 
        </h1>
    </section>
  </section>
</template>

<style lang="scss" scoped>
.main-banner {
    position: relative;
    min-height: 280px;
}

.main-banner_image {
    position: absolute;

}

.main-banner_title {
color: #17171A;
font-size: 40px;
font-weight: 700;
line-height: 120%;
letter-spacing: 1%;
position: absolute;
bottom: 48px;
}
</style>
