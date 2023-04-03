<script lang="ts" setup>
  import { defineComponent, ref, reactive } from "vue";
  import { useRouter, useRoute } from "vue-router";
  import { getPostsAsync } from "../api/posts/index";
  import {useIndexStore} from '../store/index'

  const route = useRoute();
  const router = useRouter();

  const indexStore = useIndexStore()

  const posts = ref<any>([]);

  const getPosts = () => {
    getPostsAsync()
      .then((res) => {
        indexStore.dataPost = res;
      })
      .catch((err) => {
        console.log(err, "err post");
      });
  };
  getPosts();
</script>

<template>
  <div v-for="post in indexStore.dataPost" :key="post._id" class="border-b w-1/2 mb-5">
    <router-link @click="$router.push(post._id)" to="">
      <div
        class="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-2 flex items-center justify-center font-bold h-40"
      >
        <h1>{{ post.title }}</h1>
      </div>
      <div class="bg-white p-3">
        <div>
          <p>{{ post.user.fullName }}</p>
          <p class="text-bold">{{ post.text }}</p>
          <span class="text-gray-400">{{ post.createdAt.slice(0, 10)}}</span>
        </div>
        <h2 class="text-bold">{{ post.title }}</h2>
        <div class="flex flex-wrap gap-2">
          <span v-for="tag in post.tags" :key="tag">#{{ tag }}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped></style>
