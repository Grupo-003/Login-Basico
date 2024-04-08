import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { useAuthStore } from "@/stores/auth.store";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
            meta: {
                requiresAuth: true,
            },
        },
        {
            path: "/login",
            name: "login",
            component: () => import("../views/LoginView.vue"),
        },
        {
            path: "/register",
            name: "register",
            component: () => import("../views/RegisterView.vue"),
        },
        {
            path: "/forgot-password",
            name: "forgot",
            component: () => import("../views/ForgotView.vue"),
        },
    ],
});

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();
    const auth = authStore.loggedIn;

    if (to.meta.requiresAuth) {
        if (auth) {
            next();
        } else {
            next({ name: "login" });
        }
    } else {
        next();
    }
});

export default router;
