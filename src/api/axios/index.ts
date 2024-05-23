import axios from 'axios'

const $axios = axios.create({
    baseURL: 'https://flems.github.io/test/api'
})

export {$axios};