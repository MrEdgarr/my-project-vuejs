import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("../views/home/index.vue"),
            meta: {
                title: "The Movie",
            },
        },
        {
            path: "/login",
            name: "login",
            component: () => import("../components/auth/Login.vue"),
            meta: {
                Layout: () => import("../layouts/Default.vue"),
                title: "Login",
            },
        },
        {
            path: "/register",
            name: "register",
            component: () => import("../components/auth/Register.vue"),
            meta: {
                Layout: () => import("../layouts/Default.vue"),
                title: "Register",
            },
        },
    ],
})

//Tiêu đề trang động với Bộ định tuyến Vue 3
router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title}`
    next()
})

export default router
