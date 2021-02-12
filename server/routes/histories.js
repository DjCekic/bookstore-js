const express = require('express');
const router = express.Router();
const History = require('../models/history')


router.get('/history', async (request, response) => {
    await History.find({}).then((histories) => {
        response.send(histories);
    });
});

router.post('/history/purchase', async (request, response) => {
    try {
        let history = new History(request.body);
        let result = await history.save();

        response.send(result);
    } catch (error) {
        console.log(error)
        response.status(500).send(error);
    }
});

module.exports = router;