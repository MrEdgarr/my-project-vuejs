import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("../views/home/index.vue"),
        },
        {
            path: "/login",
            name: "login",
            component: () => import("../components/auth/Login.vue"),
            meta: {
                Layout: () => import("../layouts/Default.vue"),
            },
        },
        {
            path: "/register",
            name: "register",
            component: () => import("../components/auth/Register.vue"),
            meta: {
                Layout: () => import("../layouts/Default.vue"),
            },
        },
    ],
})

export default router
