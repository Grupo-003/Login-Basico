import { ref } from "vue";
import { defineStore } from "pinia";
import { useUserStore } from "./users.store";
import { useRouter } from "vue-router";

export const useAuthStore = defineStore(
    "auth",
    () => {
        const router = useRouter();
        const userStore = useUserStore();
        const currentUser = ref(null);
        const loggedIn = ref(false);

        function register(data) {
            userStore.users.push(data);
        }

        function login(data) {
            const userFound = userStore.users.find(
                (user) =>
                    user.nombre === data.nombre &&
                    user.contraseña === data.contraseña
            );

            if (!userFound) return;

            currentUser.value = userFound;
            loggedIn.value = true;
            router.push("/");
        }

        function regeneratePassword(data) {
            const userFound = userStore.users.findIndex(
                (user) =>
                    user.nombre === currentUser.value.nombre &&
                    user.contraseña === currentUser.value.contraseña
            );

            if (userFound === -1) return;

            console.log(data);
            userStore.users[userFound].contraseña = data;
            currentUser.value.contraseña = data;
        }

        return {
            currentUser,
            loggedIn,
            register,
            login,
            regeneratePassword,
        };
    },
    {
        persist: true,
    }
);
