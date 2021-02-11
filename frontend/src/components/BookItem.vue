<template>
    <div style="width: 193px; height: auto">
         <div class="container" style="position: relative;">
          <router-link :to="'/books/' + book._id" tag="img" :src="'/book_covers/' + book.book_cover"/>
          <div class="topright">
            <button class="btn" :to="'/user/cart'" @click="cart_book">&#128722;</button>
          </div>
        </div> 
        <router-link :to="'/books/' + book._id" id='info' tag="div">
            <h5>{{book.title}}</h5>
            <p>~ {{book.author}} ~</p>
        </router-link>
    </div>
</template>

<script>
import UserService from '../UserService';

export default {
    name: "BookItem",
    props: ["book"],
    data() {
      return {
        error: '',
      }
    },
    methods: {
      async cart_book(){
        
        try{
          let user = this.$cookies.get('user');
          if(user){
            await UserService.add_to_cart(user.id, this.book._id);
          }else{
            this.$router.push('/user/login');
          }
        }catch(err){
          this.error = err.message;
        }
        
      }
    }
}
</script>

<style scoped>

img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 20px;
}
img:hover {
  opacity: 0.7;
}
img:hover + .topright, .topright:hover{
  display: inline-block;
}

/* Style the button and place it in the middle of the container/image */
.btn {
  background-color: #555;
  color: white;
  font-size: 16px;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
}
.container .btn:hover {
  background-color: black;
}

.container:hover, #info:hover, .btn:hover {
  cursor: pointer;
}

#info:hover{
  opacity: 0.7;
}

.topright {
  display: none;
  position: absolute;
  top: 8px;
  right: 24px;
  font-size: 18px;
}

</style>