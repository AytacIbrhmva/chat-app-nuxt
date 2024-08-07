<template>
    <div class="border border-gray-200 rounded-md bg-white">
        <!-- users -->
        <div>
            <div class="p-4 flex items-center justify-between mb-5 border-b border-gray-200">
                <h1 class="font-medium text-xl">Users</h1>
            </div>

            <div class="px-4 pb-4 max-sm:h-[300px] overflow-y-auto">
                <ul v-if="allUsers.length > 0" class="flex flex-col gap-3">
                    <li v-for="user in allUsers" :key="user.id" v-show="user.email !== currentUser.email"
                        class="pb-1 flex items-center gap-2  truncate">
                        <input type="checkbox"  :checked="isUserSelected(user)"  @change="toggleUserSelection(user)" />
                        <img src="https://static-00.iconduck.com/assets.00/user-avatar-happy-icon-2048x2048-ssmbv1ou.png"
                            alt="user" class="size-[30px] rounded-full">
                        <p class="font-medium flex flex-col ">

                            {{ user.name }}
                            <span class="text-xs text-blue-500">{{ user.email }}</span>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script setup>
import { useAuth } from '~/composables/useAuth';
import { useChat } from '~/composables/useChat';

const { user } = useAuth();
const { selectedUsers, allUsers, messages } = useChat()
const currentUser = user


const toggleUserSelection = (selectedUser) => {
    messages.value = []
    if (selectedUsers.value.find((sUser) => sUser.id === selectedUser.id)) {
        selectedUsers.value = [...selectedUsers.value.filter((sUser) => sUser.id !== selectedUser.id)]
    } else {
        selectedUsers.value.push(selectedUser)
    }
}

const isUserSelected = (user) => {
  return selectedUsers.value.find(selectedUser => selectedUser.email === user.email);
};
</script>