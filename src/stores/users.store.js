import { ref } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore(
    "user",
    () => {
        const users = ref([]);

        return {
            users,
        };
    },
    {
        persist: true,
    }
);
