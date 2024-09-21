<template>
    <div class="main-border">
        <div class="main">
            <div class="date">
                <Date></Date>
            </div>
            <div class="title-filter-nextPage">
                <span class="heading">{{topic}}</span>
                <div class="filter-box">
                    <select v-model="sortType" v-on:change="one">
                        <option value="rating">Rating</option>
                        <option value="date">Date</option>
                    </select>
                </div>
                <div class="next-box">
                    <NextButton @click="nextPage()"></NextButton>
                    <span class="page-number">{{ pageNumber + 1 }}/{{ pageCount() }}</span>
                </div>
            </div>
            <div class="grid">
                <Card v-for="item in paginatedData(sortedArray)" :card="item"></Card>
            </div>
        </div>
    </div>
</template>
<script>
import Date from './Date.vue';
import Card from './Card.vue';
import NextButton from './NextButton.vue';
import Filter from './Filter.vue';
    export default {
        name: 'Main',
        props: {
            listData:{
                type:Array,
                required:true
            },
            size:{
                type:Number,
                required:false,
                default: 4
            },
            topic: String
        },
        data(){
            return {
                pageNumber: 0,
                sortType: "rating",
            }
        },
        mounted() {
            console.log(this.pageNumber)
        },
        computed: {
            sortedArray: function() {
                function compareRating(a, b) {
                    if (a.rating < b.rating)
                        return -1;
                    if (a.rating > b.rating)
                        return 1;
                    return 0;
                }
                function compareDate(a, b) {
                    if (a.pubDate.getTime() < b.pubDate.getTime())
                        return -1;
                    if (a.pubDate.getTime() > b.pubDate.getTime())
                        return 1;
                    return 0;
                }
                if (this.sortType == 'rating') {
                    return this.listData.sort(compareRating);
                }
                if (this.sortType == 'date') {
                    return this.listData.sort(compareDate);
                }
            }
        },
        methods: {
            prevPage() {
                this.pageNumber++
            },
            nextPage() {
                console.log(this.pageNumber)
                this.pageNumber = (this.pageNumber + 1)  % this.pageCount() 
            },
            pageCount(){
                let l = this.listData.length,
                    s = this.size;
                return Math.ceil(l/s);
            },
            paginatedData(){
                const start = this.pageNumber * this.size,
                    end = start + this.size;
                return this.listData.slice(start, end);
            }
        },
        components: {
            Date,
            Card,
            NextButton,
            Filter
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jersey+10&display=swap');
    .grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto auto;
        gap: 5px; 
    }
    .main-border {
        position: relative;
        z-index: 2;
        height: 100%;
        margin-top: 10px;
        margin-left: 30px;
        margin-right: 30px;
        display: flex;
        justify-content: center;
        background: radial-gradient(circle at 50%, rgb(255, 255, 255, 0) 0%,rgb(0, 255, 255, 0.2));
        clip-path: polygon(0% 3%, 50% 0%, 100% 3%, 100% 100%, 50% 97%, 0% 100%);
    }
    .main {
        background-color: rgba(255, 255, 255, 0.5);
        position: relative;
        z-index: 3;
        margin: 0.2%;
        padding-bottom: 20px;
        width: 99.5%;
        height: 99%;
        clip-path: polygon(0% 3%, 50% 0%, 100% 3%, 100% 100%, 50% 97%, 0% 100%);
    }
    .heading {
        border-radius: 5px;
    }
    .title-filter-nextPage {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .next-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 0.75em;
    }
    .page-number {
        font-family:'Times New Roman', Times, serif;
        font-style: italic;
        background: none;
    }
    .filter-box {
        background-color: #EDFCF7;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img {
        margin-right: 5px;
    }
    span {
        color: white;
        font-family: "Jersey 10";
        font-size: 3em;
        background-color: rgb(91, 185, 205);
        margin-left: 1rem;
        margin-top: 0px;
        margin-bottom: 0px;
        padding-bottom: 0px;
        padding-top: 0px;
        padding-left: 0.5em;
        padding-right: 2em;
    }
    option {
        font-size: 1em;
        color: #1DE390;
        background: #EDFCF7;
        font-family: "Jersey 10";
    }
    select {

        cursor: pointer;

        font-size: 2em;
        font-family: "Jersey 10";
        color: #1DE390;

        height: 1em;
        width: 5em;
        padding-left: 35px;

        border-style: none;

        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background: url(../assets/triangle.svg) 4em 7px no-repeat,
        url(../assets/filter.svg) 0px 5px no-repeat;
    }
    select:focus {
        outline:none;
    }
</style>
