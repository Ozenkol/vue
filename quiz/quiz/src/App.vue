<script>
  import Header from './components/Header.vue';
  import Main from './components/Main.vue';
  import Footer from './components/Footer.vue';
  let id=0
  export default {
      data() {
        return{
          list: [
            {id: id++, title: "Hello", content: "Lorem", like: 2},
            {id: id++, title: "Hello", content: "Lorem", like: 2},
            {id: id++, title: "Hello", content: "Lorem", like: 2},
            {id: id++, title: "Hello", content: "Lorem", like: 2},
            {id: id++, title: "Hello", content: "Lorem", like: 2},
            {id: id++, title: "Hello", content: "Lorem", like: 2},
          ]
        }
      },
      components: {
        Header,
        Main,
        Footer
      }
  }
</script>

<template>
  <Header></Header>
  <Main :listData="list"></Main>
  <Footer></Footer>
</template>

<style scoped>

</style>
