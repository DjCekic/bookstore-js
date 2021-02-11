const mongoose = require('mongoose');
const Schema = mongoose.Schema;

 const BookSchema = new Schema({
     title: {
         type: String,
         required: [true, 'Book name is required']
     },
     author: {
        type: String,
        required: [true, 'Author name is required']
    },
    book_cover: {
        type: String,
        required: [true, 'Book cover is required']
    },
    description: {
        type: String,
        default: "No description"
    },
    price: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        default: "none"
    }
 });

 const Book = mongoose.model('book', BookSchema, 'bookstore_book');

 module.exports = Book;