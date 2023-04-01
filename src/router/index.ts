import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../pages/MainPage.vue'),
    },
    {
        path: '/post/:postId',
        name: 'Post',
        component: () => import('../pages/Post.vue') 
    },
    {
        path: '/signin',
        name: 'SingIn',
        component: () => import('../pages/SingIn.vue'),
        meta: {layout: 'Register'} 
    },
    {
        path: '/createAccount',
        name: 'CreateAccount',
        component: () => import('../pages/CreateAccount.vue'),
        meta: {layout: 'Register'}
         
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    next()
    window.scrollTo(0, 0)
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         const userIsLogin = true;
//         // eslint-disable-next-line
//         if (!!userIsLogin) {
//             next()
//             return
//         }
//         next('/')
//     } else {
//         next()
//     }
})

export default router
