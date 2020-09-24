const express = require('express');
const router = express.Router();

const PropertySearch = require('../models/propertySearch');

router.get('/', (req, res, next) => {
    // get a list of all saved properties
    res.send('getting a list of all saved properties')
});

router.post('/save', (req, res, next) => {
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

router.get('/:id', (req, res, next) => {
    // to get a single saved property by its id
    res.send('getting a single property')
});

router.delete('/:id', (req, res, next) => {
    // to get a single saved property by its id
    res.send('deleting a single property')
});

module.exports = router;