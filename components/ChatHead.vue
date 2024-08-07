<template>
    <div class="p-4 border-b border-gray-200">
        <div class="flex items-center gap-1 mb-2">
            <Icon name="mdi:chat-outline" style="color: gray; width: 28px;height: 28px;" />
            <span class="font-medium text-lg">Messages</span>
        </div>

        <ul class="flex flex-wrap gap-2">
            <li v-for="sUser in selectedUsers" :key="sUser.id" v-show="sUser.name !== user.name"
                class="border border-purple-300 rounded-md px-2 py-1 text-xs">
                 {{ sUser.name }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useChat } from '~/composables/useChat';
import { useAuth } from '~/composables/useAuth';

const { selectedUsers } = useChat()
const { user } = useAuth()
</script>