<template>
    <span>{{ computedDate() }}, {{ date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}}</span>
</template>

<script>
    const now = new Date()

    export default {
        props: {
            date: Date
        },
        methods: {
            computedDate() {
                const diffTime = Math.abs(now - this.date);
                const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); 
                if (diffDays == 0) {
                    return 'Today'
                }
                else if(diffDays == 1) {
                    return 'Yeasterday'
                }
                return diffDays + ' days ago'
            }
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Jersey+10&display=swap');
    span {
        color: white;
        font-size: 1.25em;
        font-family: "Jersey 10";
    }
</style>