const express = require('express');

const router = express.Router();

const PropertySearch = require('../models/propertySearch');

// Routes
// GET

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

router.get('/properties', (req, res, next) => {
    // get a list of all saved properties
    console.log('Get route test!!');
    // res.send('getting a list of all saved properties')
    PropertySearch.find()
        .then((doc) => {
            console.log(doc);
            res.send(doc);
        })
        .catch((err) => {
            res.status(500).send("Server Error");
            console.log(err);
        })
});

router.delete('/properties/:id', (req, res, next) => {
    // to get a single saved property by its id
    // res.send('deleting a single property')
    console.log(req.params.id);
    PropertySearch.findByIdAndDelete(req.params.id)
        .then((doc) => {
            console.log(doc, "Delete Route");
            res.json(doc);
        })
        .catch((err) => {
            res.status(500).send("Server Error");
            console.log(err);
        })
});

module.exports = router;
