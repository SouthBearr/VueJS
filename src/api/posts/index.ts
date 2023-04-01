import {$axios} from "../axios";

const getPostsAsync = () => {
    return new Promise((resolve, reject) => {
        $axios({
            url: '/posts',
            method: 'GET'
        }) 
        .then((res) => {
            resolve(res.data)
        })
        .catch((err) => {
            reject(err)
        })
    })
}

export {getPostsAsync}