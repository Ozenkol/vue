<script setup>
    import { ref } from "vue";
    const count = ref(0);
</script>

<template>
    <h1> MyCounter Component </h1>
    Reactive variable count: <b>{{ count }}</b>
    <br /><br />
    <button @click="count++">count+1</button>
</template>

<style scoped>

</style>