<script lang="ts" setup>
  import { computed, ref } from "vue";
  import MainBanner from "@/components/MainBanner.vue";
  import ButtonComponent from "@/components/ButtonComponent.vue";
  import Card from "@/components/Card.vue";
  import { getNewsAsync } from "../api/news/index";
  import type { INewsItems, INav } from "../types/index";

  const navData = ref<INav>();

  const dataNews = ref<INewsItems[]>([]);
  const page = ref(1);

  const getNews = () => {
    getNewsAsync(page.value)
      .then((res) => {
        navData.value = res?.nav;
        dataNews.value = res?.items;
      })
      .catch((err) => {
        throw new Error(err);
      })
      .finally(() => {});
  };
  getNews();

  const downloadMore = (_page: number) => {
    page.value = _page;
    getNews();
  };
</script>

<template>
  <main-banner />

  <section class="container">
    <section class="cards">
      <card
        v-for="(item, idx) in dataNews"
        :key="idx"
        :img="item?.image"
        :title="item?.name"
        :text="item?.previewText"
        :type="item?.type?.value"
        :date="item?.date"
      />
    </section>
    <div class="download-more">
      <button-component
        v-if="navData?.total > navData?.current"
        @click="downloadMore(navData?.total)"
      >
        Загрузить ещё
      </button-component>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .cards {
    display: grid;
    gap: 30px;
    margin-top: 64px;
    padding: 0 16px;

    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 768px) and (max-width: 1023px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }

  .download-more {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 72px 0;
  }
</style>
