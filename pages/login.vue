<template>
    <div class="flex flex-col items-center justify-center h-screen bg-gray-50 px-4">
        <div class="w-full min-[600px]:w-[500px] p-10 rounded-lg border border-gray-100 bg-white">

            <h1 class="font-medium text-[30px] mb-10">Login</h1>

            <form @submit.prevent="handleSubmit" class="flex flex-col gap-5">
                <input v-model="email" type="email" placeholder="Enter email"
                    class="px-3 py-2 rounded-md border bordder-gray-200 w-full" required >
                <div class="relative flex items-center">
                    <input v-model="password" :type="passwordType" placeholder="Enter password"
                        class="pl-3 pr-10 py-2 rounded-md border border-gray-200 w-full" required>
                    <Icon v-if="passwordType === 'password'" name="mdi:eye-outline"
                        style="color: gray; width: 20px;height: 20px;" class="absolute right-3 cursor-pointer"
                        @click="togglePasswordVisibility" />
                    <Icon v-else name="mdi:eye-off-outline" style="color: gray; width: 20px;height: 20px;"
                        class="absolute right-3 cursor-pointer" @click="togglePasswordVisibility" z />
                </div>

                <button type="submit"
                    class="w-full bg-blue-600 rounded-md py-2.5 text-white text-lg hover:bg-blue-500">Login</button>
            </form>

            <div class="mt-4">
                Not a member? <NuxtLink to="/register" class="text-blue-600">Signup</NuxtLink>
            </div>
        </div>

    </div>

</template>

<script setup>
import { useAuth } from '~/composables/useAuth';

const email = ref('');
const password = ref('');
const passwordType = ref("password")
const { login } = useAuth();

const togglePasswordVisibility = () => {
    if (passwordType.value === "password") {
        passwordType.value = "text"
    } else {
        passwordType.value = "password"
    }
};

const handleSubmit = async () => {
    try {
        const { data } = await $fetch('http://localhost:8000/api/login', {
            method: 'post',
            body: {
                email: email.value,
                password: password.value,
            }

        });
        login(data.token, data.user)
        await navigateTo('/')
    } catch (error) {
        console.error('Login failed:', error.response.data);
    }
};
</script>