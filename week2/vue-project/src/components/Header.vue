<template>
    <header>
        <img src="../assets/dropdown.svg" width="50px" @click="click()">
        <div class="heading"><span>New trips on Fall season ! Full details on our Instagram account</span></div>
        <Profile></Profile>
    </header>
</template>

<script>
    import Navigation from './Sidebar.vue';
    import Profile from './Profile.vue';
    export default {
        components: {
            Profile
        },
        name: 'Header',
        methods:{
            click() {
                this.$emit('toggle_sidebar')
            }
        }
    }
</script>

<style scoped>
    header {
        margin-top: 5px;
        height: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: aliceblue;
        opacity: 0.9;
    }
    .heading {
        max-inline-size: 50em;
        background-color: #E9EC63;
        border-radius: 5px;
        padding-left: 10%;
        padding-top: 5px;
        padding-bottom: 5px;
        padding-right: 10%;
    }
    .heading span {
        color: #F39A92;
        font-size: large;
        font-weight: 500;
    }
</style>