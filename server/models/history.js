const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HistorySchema = new Schema({
    book_title: {
        type: String,
        required: [true, 'Book name is required']
    },
    user_name: {
       type: String,
       required: [true, 'User name is required']
   },
   purchase_date: {
       type: Date,
       required: [true, 'Date is required']
   }
});

const History = mongoose.model('history', HistorySchema, 'bookstore_history');

module.exports = History;
