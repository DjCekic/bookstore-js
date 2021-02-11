const express = require('express');
const router = express.Router();
const User = require('../models/user')
const Book = require('../models/book')
const Bcrypt = require('bcryptjs')


router.get('/users', async (request, response) => {
    await User.find({}).then((users) => {
        response.send(users);
    });
});

router.get('/user/cart/:id', async (req, res) => {
    await User.findOne({_id: req.params.id}).then(async (user) => 
    {
        let books = [];
        
        for( let i=0; i<user.cart.length; i++ )
        {
            console.log(user.cart[i]);
            await Book.findOne({_id: user.cart[i]}).then((book) =>
            {
                books.push(book);
            });
        }
        res.send(books);
    });
});

router.post('/user/register', async (request, response) => {
    try {
        request.body.password = Bcrypt.hashSync(request.body.password, 10);
        let user = new User(request.body);
        let result = await user.save();

        response.send(result);
    } catch (error) {
        console.log(error)
        response.status(500).send(error);
    }
});

router.post('/user/login', async (request, response) => {
    try 
    {
        let user = await User.findOne( { username: request.body.username } ).exec();
        if( !user )
        {
            return response.status(400).send({ message: "The username does not exist" });
        }
        if( !Bcrypt.compareSync( request.body.password, user.password ) )
        {
            return response.status(400).send({ message: "The password is invalid" });
        }
        response.send(user);
    } catch ( error ) 
    {
        response.status(500).send(error);
    }
});

router.post('/user/cart', async (request, response) => {
    try 
    {
        let user = await User.updateOne( {_id: request.body.user_id}, {$addToSet: {cart: request.body.book_id}} ).exec();
        response.status(200).send( user );
    } catch ( error )
    {
        response.status(500).send( error.message );
    }
});




module.exports = router;