<template>
    <div id="book_info">
        <img id='book_cover' :src="'/book_covers/' + book.book_cover"/>
        <div id="book_details">
            <h3 class="info">{{book.title}}</h3>
            <br/><br/><br/>
            <h5 class="info">Autor: <span style="opacity: 0.8;">{{book.author}}</span></h5>
            <br/><br/>
            <h5 class="info">Kategorija: <span style="opacity: 0.7;">{{book.category}}</span></h5>
            <br/><br/>
            <b-button v-b-toggle.collapse-2 class="m-1" style="width: 100%;">Opis</b-button>
            <br/><br/><br/>
            <b-collapse id="collapse-2">
                <b-card style="background-color: #353535">{{book.description}}</b-card>
            </b-collapse>
            <br/><br/><br/><br/><br/><br/><hr/>
            <h5 class="info" style="background-color: #353535">Cena: <span style="opacity: 0.7;">{{book.price}}.00 rsd</span></h5>
            <!-- <b-button style="float: right;" variant="success">Add to cart</b-button> -->

        </div>
    </div>
</template>


<script>
import BookService from '../BookService';

export default {
    name: "BookDetails",
    data(){
        return {
            book: undefined,
            error: '',
        };
    },
    async created(){
        try{
            this.book = await BookService.get_books('/' + this.$route.params.book_id);
        }catch(err){
            this.error = err.message;
        }
  },
}
</script>

<style scoped>

#book_cover {
    float: left;
}

#book_info {
    margin-top: 5%;
    margin-left: 20%;
    margin-right: 20%;
    margin-bottom: 20%;
    color: #c9aa88;

    
}

#book_details {
    width: 50%;

    float: end;

}

.info {
    float: bottom;
}


</style>