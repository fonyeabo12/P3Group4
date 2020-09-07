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

router.post('/save', (req, res) => {

    const data = req.body;

    const newPropertySearch = new PropertySearch(data);

    newPropertySearch.save((error) => {
        if (error) {
            res.status(500).json({ msg:'Sorry, internal sever errors' });
            return;
        } 
        // PropertySearch
        return res.json({
            msg: 'Your data has been saved!!!'
        });
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