<template>
    <div class="rating">
        <span v-if="rate < 1" class="star">★</span>
        <span v-else class="star rated">★</span>
        <span v-if="rate < 2" class="star">★</span>
        <span v-else class="star rated">★</span>
        <span v-if="rate < 3" class="star">★</span>
        <span v-else class="star rated">★</span>
        <span v-if="rate < 4" class="star">★</span>
        <span v-else class="star rated">★</span>
        <span v-if="rate < 5" class="star">★</span>
        <span v-else class="star rated">★</span>
    </div>
</template>

<script>
    export default {
        name: "Rating",
        props: {
            rate: Number
        }
    }
</script>

<style scoped>
    .star {
        color: white;
        font-size: 1.5em;
        margin-left: 5px;
        margin-right: 5px;
    }
    .rated {
        color: yellow;
    }
</style>