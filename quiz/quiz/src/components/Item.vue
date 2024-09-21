<template>
    <div class="item" @click="click()">
        <h2>{{ item.title }}</h2>
        <span>{{ item.like }}</span>
        <p>{{ item.content }}</p>
    </div>
</template>

<style>
    .item {
        border: solid;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>

<script>
    export default {
        props: {
            item: Object
        },
        data() {
            return {
                
            }
        },
        methods: {
            click() {
                this.$emit('toggle_item')
            }
        }
    }
</script>