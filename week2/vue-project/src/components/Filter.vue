<template>
    <select>
        <option>Rating</option>
        <option>Date</option>
    </select>
</template>

<script>
    export default {
        name: "Filter"
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Jersey+10&display=swap');
    option {
        font-size: 1em;
        color: #1DE390;
        font-family: "Jersey 10";
    }
    select {
        font-size: 2em;
        font-family: "Jersey 10";
        color: #1DE390;

        height: 1em;
        width: 5em;

        border-style: none;

        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background: url(../assets/triangle.svg) 4em 7px no-repeat #EDFCF7;
    }
    select:focus {
        outline:none;
    }
</style>