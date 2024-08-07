<template>
  <form @submit.prevent="handleSubmit" class="flex gap-2">
    <div class="relative flex items-center w-full">
      <Icon name="mdi:paperclip" style="color: gray; width: 16px;height: 16px;" class="absolute left-3" />
      <input v-model="message" class="text-sm pl-8 pr-3 py-2 border border-gray-200 rounded-md w-full"
        placeholder="Type a message">
      <Icon name="mdi:microphone-outline" style="color: gray; width: 16px;height: 16px;" class="absolute right-3" />
    </div>

    <button type="submit" class="px-3 py-2 flex items-center justify-center border border-gray-200 rounded-md">
      <Icon name="mdi:send-outline" style="color: gray; width: 16px;height: 16px;" />
    </button>
  </form>
</template>




<script setup>
import { ref } from 'vue';
import { useAuth } from '~/composables/useAuth';
import { useChat } from '~/composables/useChat';

const { user } = useAuth();
const { selectedUsers } = useChat();
const message = ref('');


const handleSubmit = async () => {
  const selectedUsersRes = selectedUsers.value.find((sUser) => sUser.email === user.value.email)
  try {
    const data = await $fetch("http://localhost:8000/api/send-message", {
      method: 'post',
      body: {
        username: user.value.name,
        message: message.value,
        members: selectedUsersRes ? selectedUsers.value : [...selectedUsers.value, user.value]
      }
    })

  } catch (err) {
    console.error(err.data)
  }

  message.value = '';
};
</script>