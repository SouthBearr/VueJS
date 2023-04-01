<script lang="ts" setup></script>

<template>
  <div class="flex justify-center items-center h-[100vh]">
    <form @submit.prevent="" class="bg-white w-1/2 h-1/2 p-3 flex flex-col">
      <label>Email</label>
      <input type="email" required placeholder="Введите Почту" />
      <label>Логин</label>
      <input type="text" required placeholder="Введите Логин" />
      <label>Пароль</label>
      <input type="password" required placeholder="Введите Пароль" />
      <button class="bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
        Войти
      </button>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
