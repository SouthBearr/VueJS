import { defineStore } from 'pinia'
import {ref} from 'vue'

export const useIndexStore = defineStore('index', () => {
    const dataPost = ref<any>([])

    return {
        dataPost
    }
})
