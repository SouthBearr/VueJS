<script setup lang="ts"></script>

<template>
  <button class="button">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
  .button {
    border-radius: 0.5rem;
    border: 0.06rem solid #002dbf;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #002dbf;
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 120%;
    padding: 1rem 2rem;
    transition: color .3s ease-in-out;
  }

  .button:hover {
    color: #07278f;
  }
</style>
