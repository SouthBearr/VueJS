<script setup lang='ts'>
import {ref} from 'vue'
import {tagsAsync} from '../api/tags/index'

const tagsData = ref<any>([])

const getTags = () => {
    tagsAsync().then((resp) => {
        console.log(resp, 'tags');
        tagsData.value = resp
    }).catch((err) => {
        console.log(err);
    })
}
getTags()
</script>

<template>
    <div class="bg-white h-60 w-60 rounded-md">
        <h3 class="font-bold p-2">Тэги</h3>
        <hr>
        <div v-for="tag in tagsData" :key="tag" class=" p-2">
            <span># {{tag}}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>
