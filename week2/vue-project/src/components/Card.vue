<template>
    <div class="card">
        <div class="name-rating-avatar">
            <div class="name-date">
                <span>{{ card.personName }}</span>
                <TimeAgo :date="card.pubDate"></TimeAgo>
            </div>
            <div class="rating-box">
                <span>Rating</span>
                <Rating :rate="card.rating"></Rating>
            </div>
            <div class="avatar">
                <img :src="card.avatar" alt="">
            </div>
        </div>
        <div class="comment">
            <span>{{ card.commentary }}</span>
        </div>
        <div class="like-button-box">
            <div class="like-button">
                <span>LIKE</span>
            </div>
        </div>
    </div>
</template>

<script>
    import Rating from './Rating.vue';
    import TimeAgo from './TimeAgo.vue';
    export default {
        name: "Card",
        props: {
            card: {
                type: Object
            }
        },
        components: {
            Rating,
            TimeAgo
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jersey+10&display=swap');
    .card {
        display: flex;
        border-radius: 10px;
        flex-direction: column;
        max-inline-size: 25em;
        background-color: rgb(91, 185, 205);
        margin: 10px 10px 10px 10px;
    }
    .name-rating-avatar {
        display: flex;
        justify-content: space-between;
    }
    img {
        width: 75px;
        margin-top: 5px;
        margin-right: 5px;
    }
    .rating-box {
        height: 90%;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 5px;
    }
    .name-date {
        height: 70%;
        background-color: rgb(114, 195, 211);
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 2px 2px 2px 2px;
        padding: 0.5em 0.5em 0.5em 0.5em;
    }
    .comment {
        margin: 3px 3px 3px 3px;
    }

    span {
        font-size: 1.25em;
        font-family: "Jersey 10";
        color: white;
    }
    .like-button {
        cursor: pointer;

        color: white;
        padding: 2px 1em 2px 1em;
        margin-bottom: 5px;
        margin-right: 5px;
        border-radius: 10px;
        float: right;
        width: fit-content;
        background-color: #43EF27;
    }
</style>
