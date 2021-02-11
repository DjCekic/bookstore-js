
<template>
    <div id=container>
        <div class="item" v-bind:key="book._id" v-for="book in books">
            <router-link :to="'/books/' + book._id" tag="img" :src="'/book_covers/' + book.book_cover" style="width: 100px; height: 157%; float: left;"/>
            <h4 style="padding-left: 50%; padding-top: 5%;">{{book.title}}</h4>
        </div>
    </div>

</template>
<script>
import UserService from '../UserService';
export default {
    name: 'cart',
    data() {
        return{
            books: [],
        }
    },
    methods: {
        async load_cart(){
            let user = this.$cookies.get('user');
            if(user){
                try{
                    this.books = await UserService.get_cart(user.id);
                }catch(err){err}
                
            }
        }
    },
    created(){
        this.load_cart();
    },

    
}
</script>
<style scoped>


#container{
    margin-top: 5%;
    margin-left: 20%;
    margin-right: 20%;
    color: #c9aa88;
}

.item{
    padding: 1%;
    margin-bottom: 2%;
    display: flex;
    background: #353535;
    border-radius: 20px;
    cursor: pointer;
}

img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 20px;
}

</style>