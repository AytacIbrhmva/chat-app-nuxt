<template>
    <header class="py-5 border-b border-gray-200 bg-gray-100">
        <div class="px-4 md:px-[60px]">
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="font-semibold text-[24px] mb-2">Chat app</h1>
                </div>

                <div class="flex items-center gap-4">

                    <Icon name="mdi:bell-outline" style="color: black; width: 24px;height: 24px;" />
                    <div class="flex items-center gap-1">
                        <Icon name="mdi:person-outline" style="color: black; width: 28px;height: 28px;" />
                        <span class="font-medium text-lg">{{ user.name }}</span>

                    </div>
                    <button @click="logout">
                        <Icon name="mdi:logout" style="color: black; width: 24px;height: 24px;" />
                    </button>
                </div>
            </div>
        </div>
    </header>

</template>

<script setup>
import { useAuth } from '~/composables/useAuth';

const { user, logout } = useAuth()
</script>