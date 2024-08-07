<template>
    <Header />
    <main class="bg-gray-50">
        <div class="px-4 md:px-[60px] py-5  gap-1 w-full h-full grid sm:grid-cols-[250px,1fr]">
            <Sidebar />
            <div class="border border-gray-200 rounded-md bg-white w-full h-full flex flex-col justify-between">
                <div>
                    <ChatHead />
                    <div class="p-4 h-full chat-scroll pb-5">
                        <div class="flex flex-col">
                            <div v-for="message in messages" :key="message">
                                <ReceiverCard v-if="message.username == user.name" :message="message.message" />
                                <SenderCard v-else :username="message.username" :message="message.message" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="p-4">
                    <ChatFooter />
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import Pusher from "pusher-js";
import { ref, onMounted } from 'vue';
import { Sidebar } from '#components';
import { SenderCard } from "#components"
import { ReceiverCard } from "#components"
import { ChatFooter } from "#components"
import { ChatHead } from "#components"
import { Header } from "#components"
import '~/assets/css/main.css'
import { useAuth } from '~/composables/useAuth';
import { useChat } from "~/composables/useChat";

const { user } = useAuth();
const { allUsers, selectedUsers, messages } = useChat()

onMounted(async () => {
    Pusher.logToConsole = true;

    const pusher = new Pusher('d2d4d786416863f7c30b', {
        cluster: 'ap2',
        forceTLS: true,
    });

    const channel = pusher.subscribe('chat-app');
    channel.bind('chat', data => {
        const response = JSON.stringify(data)
        const obj = JSON.parse(response)

        const yourMessage = obj.members.find((item) => item.email === user.value.email)
        if(yourMessage) {
            messages.value.push(obj)
            selectedUsers.value = obj.members
        }

    });

    const getUsers = async () => {
        const data = await $fetch('http://localhost:8000/api/users')
        allUsers.value = data
    }
    getUsers()
});


</script>
