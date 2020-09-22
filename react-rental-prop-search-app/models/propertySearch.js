const mongoose = require('mongoose');

// Schema
const Schema = mongoose.Schema;
const PropertySearchSchema = new Schema({
    street: String,
    beds: Number,
    baths: Number,
    rent: Number,
    daysListed: Number

    //street
    //beds
    //baths
    //rent
    //days listed - calculate days listed

});

// Model
const PropertySearch = mongoose.model('PropertySearch', PropertySearchSchema);
module.exports = PropertySearch;