const express = require('express');

const router = express.Router();

const PropertySearch = require('../models/propertySearch');

// Routes
router.get('/', (req, res) => {

    PropertySearch.find({  })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', error);
        });

});

router.get('/name', (req, res) => {
    const data = {
        username: 'williams',
        age: 26
    };
    res.json(data);
});


module.exports = router;