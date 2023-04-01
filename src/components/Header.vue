<script setup lang="ts"></script>

<template>
  <header class="bg-white">
    <div class="container flex justify-between items-center h-16">
      <div>
        <router-link to="/">Blog</router-link>
      </div>
      <div class="flex gap-3">
          <router-link :to="{name: 'SingIn'}">Войти</router-link>
          <router-link :to="{name: 'CreateAccount'}">Создать аккаунт</router-link>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped></style>
