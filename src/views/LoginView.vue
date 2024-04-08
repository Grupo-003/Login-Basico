<script setup>
import { reactive } from "vue";
import { useAuthStore } from "@/stores/auth.store";

const authStore = useAuthStore();
const user = reactive({
    nombre: "",
    contraseña: "",
});

const handleSubmit = () => {
    authStore.login(user);
};
</script>

<template>
    <div class="body">
        <div class="form-container">
            <h1>Login</h1>
            <form @submit.prevent="handleSubmit">
                <div class="input-group">
                    <label for="user">Usuario</label>
                    <input type="text" v-model="user.nombre" id="user" />
                </div>
                <div class="input-group">
                    <label for="password">Contraseña</label>
                    <input
                        type="password"
                        v-model="user.contraseña"
                        id="password"
                    />
                </div>
                <button class="submit-btn" type="submit">Iniciar sesión</button>
            </form>
            <div class="social-container">
                <img src="/brand-facebook.svg" alt="Facebook icon" />
                <img src="/brand-google.svg" alt="Google icon" />
                <img src="/brand-instagram.svg" alt="Instagram icon" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.body {
    min-height: 100dvh;
    width: 100%;
    background: linear-gradient(90deg, #ff5722, #ff5722d0, #ff5722);
    place-content: center;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
        sans-serif;
}

h1 {
    color: white;
    text-align: center;
}

.form-container {
    max-width: 400px;
    padding: 20px;
    margin: 0 auto;
    background: transparent;
    box-shadow: 0 4px 11px 8px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
}

form {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
}

input {
    padding: 10px;
    background: #fff;
    border: none;
    display: block;
    width: 100%;
}

label {
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    display: block;
}

.submit-btn {
    padding: 10px;
    background: #e64a19;
    border: none;
    color: #fff;
    cursor: pointer;
}

.social-container {
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
}
</style>
