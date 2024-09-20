<template>
    <div class="date-box">
        <span>{{ this.date }}</span>
    </div>
</template>

<script>
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth()
    let day = now.getDay()
    if (month < 10) {
        month = '0' + month
    }
    if (day < 10) {
        day = '0' + day
    }
    export default {
        data() {
            return {
                date: day + '.' + month + '.' + year
            }
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jersey+10&display=swap');
    .date-box {
        color: white;
        border-radius: 5px;
        margin-top: 30px;
        margin-left: 20px;
    }
    span {
        background-color: rgb(91, 185, 205);
        box-shadow: 0px 0px 0.25em 0.25em rgb(91, 185, 205);
        font-size: 1.75em;
        font-family:'Times New Roman', Times, serif;
        border-radius: 5px;
    }
</style>