import {$axios} from "../axios";

import type {INews} from '../../types/index'

export const getNewsAsync = (page: number): Promise<INews> => {
    return new Promise((resolve, reject) => {
        $axios({
            url: `/news/${page}`,
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