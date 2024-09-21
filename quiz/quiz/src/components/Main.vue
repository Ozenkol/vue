<template>
    <div class="input">
        <input type="text" v-model="selectedItem">
        The input text: {{ selectedItem }}
    </div>
    <div class="main">
        <Item v-for="item in listData" :item="item"></Item>
    </div>
</template>

<style>

</style>

<script>
    import Item from './Item.vue';
    export default {
        props: {
            listData: Array
        },
        components: {
            Item
        },
        data() {
            return {
                selectedItem: String
            }
        },
        methods: {
            
        }
    }
</script>