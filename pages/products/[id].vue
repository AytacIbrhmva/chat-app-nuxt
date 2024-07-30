<template>
     
    <div>
        <h2>Products one id: {{ id }}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A aliquam dolorem voluptatem accusantium soluta harum, laudantium velit impedit voluptatibus asperiores consectetur? Nihil nobis dolore sit porro asperiores inventore doloremque hic?</p>
    </div>
</template>

<script setup>
    const { id } = useRoute().params
    definePageMeta({
        layout: 'products'
    })
</script>

<style scoped>
    h2 {
        margin-bottom: 20px;
    }
    p {
        font-size: 18px;
    }
</style>