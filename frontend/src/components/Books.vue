<template>
    <div>
        <div style="display: flex; flex-wrap: wrap; padding: 50px">
            <div v-bind:key="book._id" v-for="book in books">
                <BookItem v-bind:book="book" v-on:cart-book="$emit('cart-book', book._id)"/>
            </div>
        </div>
    </div>
</template>



<script>
import BookItem from './BookItem';

export default {
    name: 'Books',
    components: {
        BookItem
    },
    props: ["books"],
}
</script>

<style scoped>

</style>