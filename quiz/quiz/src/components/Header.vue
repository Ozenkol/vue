<template>
    <div class="header">
        <h1>My quiz</h1>
        <nav>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Support us</li> 
            </ul>
            
        </nav>
    </div>
</template>

<style>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: aliceblue;
    }
    nav {
        display: flex;
    }
    ul {
        display: flex;
        list-style-type: none;
    }
    li {
        margin-left: 10px;
        margin-right: 10px;
    }
</style>

<script>
    export default {
        
    }
</script>