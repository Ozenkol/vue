<template>
    <div class="footer">
        <span class="header">CONTACTS</span>
        <span>PHONE: +1(234)-23-45-22</span>
        <span>ADDRESS: Green st., Yalow Park</span>
        <span>EMAIL: Yallow@park.info</span>
    </div>
</template>

<script>

</script>

<style scoped>
    .footer {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-family: "Jersey 10";
        padding: 10px 10px 10px 10px;
        font-size: 1.5em;
        font-weight: 300;
        color: white;
        background: linear-gradient(to top, #82DD68, #A6EC88);
        border-radius: 5px;
    }
    .footer .header {
        text-align: center;
        font-size: 1.5em;
        margin-top: 0px;
    }
    span {
        margin-top: 15px;
    }
</style>

