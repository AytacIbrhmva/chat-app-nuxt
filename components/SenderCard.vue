<template>
    <div class="flex flex-col w-[50%] mt-2">
        <span class="font-medium text-base">{{ username }}</span>
        <p class="bg-gray-100 rounded-b-md rounded-tr-md p-3 my-2">{{ message }}</p>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    username: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
})
</script>