<script setup>
import { useAuthStore } from "@/stores/auth.store";

const store = useAuthStore();
</script>

<template>
    <h1>Bienvenido: {{ store.currentUser.nombre }}</h1>
</template>

<style scoped>
* {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
        sans-serif;
    color: #1c1c1c;
}
h1 {
    text-align: center;
}
</style>
