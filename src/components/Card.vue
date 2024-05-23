<script setup lang="ts">
  import { computed, ref } from "vue";
  import moment from "moment";

  const props = defineProps<{
    img: string;
    title: string;
    text: string;
    type: string;
    date: number;
  }>();

  const date = ref(moment.unix(props.date));

  const getDay = computed(() => {
    return date.value.date();
  });

  const getMounth = computed(() => {
    return date.value.format("MMMM");
  });

  const getYear = computed(() => {
    return date.value.year();
  });
</script>

<template>
  <router-link to="" class="card">
    <img
      v-if="props.img"
      :src="props.img"
      :alt="props.title"
      class="card_img"
    />

    <div class="card_content">
      <div>
        <div class="card_date__wrapper">
          <span class="card_date__day"> {{ getDay }} </span>
          <div>
            <p class="card_date__mounth">{{ getMounth }}</p>
            <p class="card_date__year">{{ getYear }}</p>
          </div>
        </div>

        <h2 class="card_title">
          {{ props.title }}
        </h2>

        <p class="card_text">
          {{ props.text }}
        </p>
      </div>
    </div>
    <span class="card_badge"> {{ props.type }} </span>
  </router-link>
</template>

<style lang="scss" scoped>
  .card {
    max-width: 33.88rem;
    max-height: 34.63rem;
    min-width: 33.88rem;
    min-height: 34.63rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 0.06rem solid #0f62fe;
    border-radius: 1rem;
  }

  .card_content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 40px;
    padding: 0 2rem;
    margin-top: 32px;
  }

  .card_img {
    min-width: 33.5rem;
    height: 15.63rem;
    border-radius: 1rem 1rem 0rem 0rem;
    width: 100%;
    object-fit: cover;
  }

  .card_title {
    font-size: 1.38rem;
    font-weight: 400;
    line-height: 120%;
    color: #0029a9;
  }

  .card_text {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 130%;
    margin-top: 16px;
    color: #222327;

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    line-height: 1.3em;
    height: 3.9em;
  }

  .card_badge {
    font-size: 0.88rem;
    font-weight: 400;
    line-height: 140%;
    color: #00133a;
    padding: 0.25rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 22.5rem;
    background: #f0f6fe;
    min-width: 5.5rem;
    width: max-content;
    height: 1.75rem;
    margin: 0 2rem 2rem 2rem;
  }

  .card_date__wrapper {
    color: #a1a7b5;
    font-size: 15px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 4px;
    line-height: 15px;
    margin-bottom: 18px;
  }

  .card_date__day {
    font-weight: 400;
    font-size: 36px;
  }

  .card_date__mounth {
  }

  .card_date__year {
  }
</style>
