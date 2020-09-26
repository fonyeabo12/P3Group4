const mongoose = require('mongoose');

// Schema
const Schema = mongoose.Schema;
const PropertySearchSchema = new Schema({
    zipcode: String,

    addressLine1: String,
    bedrooms: Number,
    bathrooms: Number,
    price: Number,
    daysOnMarket: Number,
    
    averageRent: Number,
    minRent: Number,
    maxRent: Number

});

// Model
const PropertySearch = mongoose.model('PropertySearch', PropertySearchSchema);
module.exports = PropertySearch;