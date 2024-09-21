<script>
  let id = 0
import { onBeforeMount } from 'vue';
  import Header from './components/Header.vue';
  import Main from './components/Main.vue';
import Sidebar from './components/Sidebar.vue';
  export default {
        components: {
            Header,
            Main,
            Sidebar
        },
        directives: {
          clickoutside: {
            mounted: (el, binding) => {
              el.clickOutsideEvent = event => {
                // here I check that click was outside the el and his children
                if (!(el == event.target || el.contains(event.target))) {
                  // and if it did, call method provided in attribute value
                  binding.value()
                }
              };
              document.addEventListener("click", el.clickOutsideEvent);
            },
            unmounted: el => {
              document.removeEventListener("click", el.clickOutsideEvent);
            },
          }
        },
        computed: {
          filterItem: function () {
            let filterTopic = this.selectedTopic            
            return this.list.filter(item => {
              return filterTopic.includes(item.topic);
            })
          }
        },
        data() {
          return {
            list: [
                {id: id++, personName: 'Alice', avatar: "https://xsgames.co/randomusers/assets/avatars/male/1.jpg", pubDate: new Date(2024, 8, 17, 12, 0, 0), rating: 5, commentary: "Excellent experience!", topic: "Adventure"},
                {id: id++, personName: 'Bob', avatar: "https://xsgames.co/randomusers/assets/avatars/male/2.jpg", pubDate: new Date(2024, 8, 16, 15, 30, 0), rating: 4, commentary: "Good overall, but some issues.", topic: "Adventure"},
                {id: id++, personName: 'Charlie', avatar: "https://xsgames.co/randomusers/assets/avatars/male/3.jpg", pubDate: new Date(2024, 8, 15, 9, 45, 0), rating: 3, commentary: "Average service, nothing special.", topic: "Fashion"},
                {id: id++, personName: 'David', avatar: "https://xsgames.co/randomusers/assets/avatars/male/4.jpg", pubDate: new Date(2024, 8, 14, 18, 20, 0), rating: 2, commentary: "Needs improvement.", topic: "Adventure"},
                {id: id++, personName: 'Eve', avatar: "https://xsgames.co/randomusers/assets/avatars/male/5.jpg", pubDate: new Date(2024, 8, 13, 10, 15, 0), rating: 1, commentary: "Terrible experience.", topic: "Nature"},
                {id: id++, personName: 'Frank', avatar: "https://xsgames.co/randomusers/assets/avatars/male/6.jpg", pubDate: new Date(2024, 8, 12, 14, 40, 0), rating: 5, commentary: "Loved it!", topic: "Adventure"},
                {id: id++, personName: 'Grace', avatar: "https://xsgames.co/randomusers/assets/avatars/male/7.jpg", pubDate: new Date(2024, 8, 11, 16, 0, 0), rating: 4, commentary: "Great, but could be better.", topic: "Nature"},
                {id: id++, personName: 'Hank', avatar: "https://xsgames.co/randomusers/assets/avatars/male/8.jpg", pubDate: new Date(2024, 8, 10, 12, 30, 0), rating: 3, commentary: "Decent product.", topic: "Nature"},
                {id: id++, personName: 'Ivy', avatar: "https://xsgames.co/randomusers/assets/avatars/male/9.jpg", pubDate: new Date(2024, 8, 9, 11, 0, 0), rating: 2, commentary: "Not what I expected.", topic: "Nature"},
                {id: id++, personName: 'Jack', avatar: "https://xsgames.co/randomusers/assets/avatars/male/10.jpg", pubDate: new Date(2024, 8, 8, 9, 50, 0), rating: 1, commentary: "Very disappointing.", topic: "Nature"},
                {id: id++, personName: 'Karen', avatar: "https://xsgames.co/randomusers/assets/avatars/male/11.jpg", pubDate: new Date(2024, 8, 7, 10, 15, 0), rating: 5, commentary: "Superb product!", topic: "Nature"},
                {id: id++, personName: 'Leo', avatar: "https://xsgames.co/randomusers/assets/avatars/male/12.jpg", pubDate: new Date(2024, 8, 6, 14, 0, 0), rating: 4, commentary: "Very satisfied.", topic: "Adventure"},
                {id: id++, personName: 'Mona', avatar: "https://xsgames.co/randomusers/assets/avatars/male/13.jpg", pubDate: new Date(2024, 8, 5, 12, 45, 0), rating: 3, commentary: "It’s okay.", topic: "Fashion"},
                {id: id++, personName: 'Nina', avatar: "https://xsgames.co/randomusers/assets/avatars/male/14.jpg", pubDate: new Date(2024, 8, 4, 13, 30, 0), rating: 2, commentary: "Could be better.", topic: "Modern"},
                {id: id++, personName: 'Oscar', avatar: "https://xsgames.co/randomusers/assets/avatars/male/15.jpg", pubDate: new Date(2024, 8, 3, 10, 20, 0), rating: 1, commentary: "Worst purchase ever.", topic: "Modern"},
                {id: id++, personName: 'Paul', avatar: "https://xsgames.co/randomusers/assets/avatars/male/16.jpg", pubDate: new Date(2024, 8, 2, 11, 40, 0), rating: 5, commentary: "Exceeded expectations.", topic: "Modern"},
                {id: id++, personName: 'Quinn', avatar: "https://xsgames.co/randomusers/assets/avatars/male/17.jpg", pubDate: new Date(2024, 8, 1, 9, 55, 0), rating: 4, commentary: "Solid product.", topic: "Adventure"},
                {id: id++, personName: 'Rachel', avatar: "https://xsgames.co/randomusers/assets/avatars/male/18.jpg", pubDate: new Date(2024, 7, 31, 16, 30, 0), rating: 3, commentary: "It works, but has flaws.", topic: "Adventure"},
                {id: id++, personName: 'Steve', avatar: "https://xsgames.co/randomusers/assets/avatars/male/19.jpg", pubDate: new Date(2024, 7, 30, 12, 25, 0), rating: 2, commentary: "Not happy with the results.", topic: "Modern"},
                {id: id++, personName: 'Tina', avatar: "https://xsgames.co/randomusers/assets/avatars/male/20.jpg", pubDate: new Date(2024, 7, 29, 15, 10, 0), rating: 1, commentary: "Completely unsatisfied.", topic: "Modern"}
                ],
              isopen: false,
              selectedTopic: "Adventure" 
          }
        },
        methods: {
          close() {
            console.log(1)
            this.isopen = false
          },
          setTopic: function(param) {
            this.selectedTopic = param
            this.close()
          }
        },
        mounted() {
    // this.$refs.child will hold an instance of <Child />
  }
  }
</script>

<template>
  <Header @toggle_sidebar="isopen = true" ref="header_ref"></Header>
  <div class="sidebar" v-if="isopen">
      <Sidebar @mounted_side="isopen = false" @toggled_topic="setTopic"></Sidebar>
  </div>
  <Main :list-data="filterItem" :topic="selectedTopic"></Main>
</template>

<style scoped>
  .sidebar {
    background-color: #BEE8EE;
    display: flex;
    padding-left: 10px;
    padding-right: 10px;
    flex-direction: column;
    align-items: center;
    position: absolute;
    z-index: 3;
    left: 0px;
    top: 0px;
    height: 100%;
}
</style>
