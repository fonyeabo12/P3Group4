const mongoose = require('mongoose');

// Schema
const Schema = mongoose.Schema;
const PropertySearchSchema = new Schema({
    title: String,
    city: String,
    zipcode: String,
    addressCards: String

});

// Model
const PropertySearch = mongoose.model('PropertySearch', PropertySearchSchema);
module.exports = PropertySearch;