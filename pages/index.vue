<template>
    <div class="container">
        <div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-body-tertiary" style="width: 380px;">
            <div
                class="d-flex align-items-center flex-shrink-0 p-3 link-body-emphasis text-decoration-none border-bottom">
                <svg class="bi pe-none me-2" width="30" height="24">
                    <use xlink:href="#bootstrap"></use>
                </svg>
                <input class="fs-5 fw-semibold" v-model="username" />
            </div>
            <div class="list-group list-group-flush border-bottom scrollarea">
                <div class="list-group-item list-group-item-action py-3 lh-sm" v-for="message in messages"
                    :key="message">

                    <div class="d-flex w-100 align-items-center justify-content-between">
                        <strong class="mb-1">{{ message.username }}</strong>
                    </div>
                    <div class="col-10 mb-1 small">{{ message.message }}</div>
                </div>
            </div>
        </div>

        <form @submit.prevent="submit">
            <input class="form-control" placeholder="write a message" v-model="message">
        </form>

        <!-- <button @click="getTodo">get todo</button> -->

    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useNuxtApp } from '#app';
import Pusher from "pusher-js";


const username = ref('');
const message = ref('');
const messages = ref([]);
// const todo = ref(null);

onMounted(async () => {
    Pusher.logToConsole = true;

    const pusher = new Pusher('d2d4d786416863f7c30b', {
        cluster: 'ap2',
        forceTLS: true,
    });

    const channel = pusher.subscribe('chat-app');
    channel.bind('chat', data => {
        const response = JSON.stringify(data)
        const end = JSON.parse(response)

        console.log('pusher data: ', response);

        // messages.value.(response);
        messages.value.push(end)
    });

});


const submit = async () => {
    try {
        const data = await $fetch("http://localhost:8000/api/send-message", {
            method: 'post',
            body: {
                username: username.value,
                message: message.value
            }
        })
        console.log(data);
        message.value = '';

    } catch (err) {
        console.error(err)
    }

}

const getTodo = async () => {
    const data = await $fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(data);
}

</script>


<style>
.scrollarea {
    min-height: 500px;
}
</style>
