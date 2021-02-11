<template>
  <div id="home">
    <p v-if="error">{{error}}</p>
    <p v-if="books.length == 0" style="padding-top: 2%;"><b>No results found.</b></p>
    <Books v-bind:books="books"/>
  </div>
</template>

<script>

import Books from '../components/Books';
import BookService from '../BookService';

export default {
  name: 'home',
  components: {
    Books,
  },
  data(){
    return {
      books: [],
      error: '',
    };
  },
  methods: {
    async load_books(query){
      try{
        this.books = await BookService.get_books(query);
      }catch(err){
        this.error = err.message;
      }
    }
  },
  
  created(){
    this.$eventBus.$on('filter-books', this.load_books);
    this.load_books('');
  },
}
</script>

<style>
#home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  text-align: center;



}
</style>
