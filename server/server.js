let express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      cors = require('cors');

const app = express();
app.use(express.static('public'));
app.use(cors())
app.use(bodyParser.json());
app.use('/api', require('./routes/histories')); /* initalizing routes */
app.use('/api', require('./routes/books')); /* initalizing routes */
app.use('/api', require('./routes/users')); /* initalizing routes */

/* connect to mongodb */
loadBookStore();

/* TODO */


let port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`server started on port ${port}.`)});

async function loadBookStore(){
      try {
          await mongoose.connect('mongodb://localhost:27017/Bookstore', { useUnifiedTopology: true, useNewUrlParser: true });
      } catch (error) {
        console.log(error);
      }
    
  }