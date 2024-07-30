<template>
    <header>
    <nav>
        
    </nav>
</header>


<div>
    <slot />
</div>

<footer>
    <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/products">Products</NuxtLink></li>
        </ul>
</footer>
</template>

<script setup>

</script>

<style scoped>
.router-link-exact-active {
    color: rgb(112, 190, 112);
}
</style>