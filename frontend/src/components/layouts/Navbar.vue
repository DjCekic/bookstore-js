<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="nav-background">
      <b-navbar-brand href="#">Books Books Books</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav> 
        <b-navbar-nav>
          <b-nav-item :to="'/'">Home</b-nav-item>
          <b-nav-item v-if="logged_user !== null" :to="'/user/cart'">Cart &#128722;</b-nav-item>
          <b-nav-item v-else disabled>Cart &#128722;</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav @submit="search_books" class="ml-auto">
          <b-nav-form>
            <b-form-input v-model="form.search" size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

          <b-nav-item-dropdown text="Category" right>
            <b-dropdown-item @click="filter_books('')">Sve</b-dropdown-item>
            <div v-bind:key="category.id" v-for="category in categories">
                <b-dropdown-item @click="filter_books(category)">{{category}}</b-dropdown-item>
            </div>
          </b-nav-item-dropdown>
          <b-nav-item v-if="logged_user === null" :to="'/user/login'">Login</b-nav-item>
          <b-nav-item-dropdown right v-else>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em >{{logged_user.username}}</em>
            </template>
            <b-dropdown-item @click="logout();">Log Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <p v-if="error">{{error}}</p>
  </div>
  

</template>

<script>
import BookService from '../../BookService'

export default {
  name: "Navbar",
  data(){
    return {
      logged_user: null,
      categories: [],
      form: {
        serach: ''
      },
      error: '',
    };
  },
  async created(){
    this.logged_user = this.$cookies.get('user');
    try{
      this.categories = await BookService.get_books('/categories');
      this.$eventBus.$on('logged', () => {this.logged_user = this.$cookies.get('user')});
    }catch(err){
      this.error = err.message;
    }
  },
  methods: {
    filter_books(category){
      this.$eventBus.$emit('filter-books', '?category=' + category);
    },
    search_books(evt){
      evt.preventDefault(); /* stupid refresh on submit makes a lot of bugs */
      this.$eventBus.$emit('filter-books', '?title=' + this.form.search)
    },
    logout(){
      
      this.$cookies.remove('user');
      this.logged_user = null;
      try{
        this.$router.push('/');
      }catch(err){return;}

    },
  }
};
</script>

<style scoped>
    .nav-background {
        background: #19262f;
    }
</style>