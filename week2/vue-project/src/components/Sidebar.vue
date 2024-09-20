<template>
    <nav>
        <div class="heading">
            <span @click="clickOutside()">MENU</span>
        </div>
        <ul>
            <li>ADVENTURE BLOG</li>
            <li>NATURE BLOG</li>
            <li>FASHION BLOG</li>
            <li>MODERN BLOG</li>
            <div class="footer-box">
                <Footer></Footer>
            </div>
        </ul>
    </nav>
</template>

<script>
    import Footer from "./Footer.vue"
    export default {
        name: 'Sidebar',
        data() {
            return {
                isopen: false
            }
        },
        directives: {
            
        },

        components: {
            Footer
        },
        methods: {
            clickOutside() {
                return this.$emit("mounted_side")
            }
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jersey+10&display=swap');
    nav {
        width: 95%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .heading {
        cursor: pointer;
        background-color: rgb(240, 240, 240); 
        border-radius: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 0px;
        margin-right: 0px;
        font-family: "Jersey 10";
        font-size: 2em;    
        text-align: center;
    }
    ul {
        background-color: rgb(240, 240, 240);
        display: flex;
        flex-direction: column;
        padding: 0;
        margin: 0px 0px 0px 0px;
        border-radius: 10px;
    }
    ul li {
        cursor: pointer;
        font-family: "Jersey 10";
        text-align: center;
        font-size: 2em;
        margin: 10px 0px 10px 0px;
        background-color: #43D66B;
        list-style: none;
    }
    .footer-box {
        margin: 10px 10px 10px 10px;
    }
</style>