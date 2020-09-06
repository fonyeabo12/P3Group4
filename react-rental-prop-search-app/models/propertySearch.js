const mongoose = require('mongoose');

// Schema
const Schema = mongoose.Schema;
const PropertySearchSchema = new Schema({
    title: String,
    body: String,
    date: {type: String, default: Date.now()}

    // zipCode:    {type: Number, required: true, minlength: 5, maxlength: 5},
    // city:       'String',
    // state:      'String',
    // bedrooms:   {type: Number, required: true, max: 8, min: 1},
    // bathrooms:  {type: Number, required: true, max: 8, min: 1},
    // squarefoot: {type: Number, max: 10000, min: 500},
    // daysListed: {type: Number, max: 1000, min: 1},
    // maxRent:    {type: Number, max: 10000, min: 100},
    // minRent:    {type: Number, max: 10000, min: 100}
});

// Model
const PropertySearch = mongoose.model('PropertySearch', PropertySearchSchema);
module.exports = PropertySearch;