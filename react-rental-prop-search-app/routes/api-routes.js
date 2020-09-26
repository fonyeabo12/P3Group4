const express = require('express');

const router = express.Router();

const PropertySearch = require('../models/propertySearch');

// Routes
// GET

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

// COPIED DATA:
// from saved-properties.route.js
router.post('/properties/save', (req, res, next) => {
    // add a new property to saved properties list
    // display bootstrap toaster message
    console.log(req.body);
    PropertySearch.create(req.body)
    .then((doc) => {
        console.log(doc);
        res.json(doc);
    })
    .catch((err) => {
        res.status(500).send("Server Error");
        console.log(err);
    })
});

router.get('/properties/', (req, res, next) => {
    // get a list of all saved properties
    console.log(req.query);
    // res.send('getting a list of all saved properties')
    PropertySearch.findAll(req.query)
        .then((doc) => {
            console.log(doc);
            res.json(doc);
        })
        .catch((err) => {
            res.status(500).send("Server Error");
            console.log(err);
        })
});

router.delete('/properties/:id', (req, res, next) => {
    // to get a single saved property by its id
    // res.send('deleting a single property')
    console.log(req.query);
    PropertySearch.findById({ _id: req.params.id })
        .then((doc) => {
            console.log(doc);
            res.json(doc);
        })
        .catch((err) => {
            res.status(500).send("Server Error");
            console.log(err);
        })
});

module.exports = router;
