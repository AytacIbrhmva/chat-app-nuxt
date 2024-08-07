<template>
    <div class="flex justify-end mt-2">
        <div class="w-[50%]">
            <span class="font-medium text-base">You</span>
            <p class="rounded-b-md rounded-tl-md p-3 bg-purple-600 text-white">{{ message }}</p>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    message: {
        type: String,
        required: true,
    }
})

</script>