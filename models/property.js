const { Double, Decimal128 } = require("bson");
const mongoose = require("mongoose");
//const { Property } = require(".");
const Schema = mongoose.Schema;

const propertySchema = new Schema({
  addressLine1: { type: String, required: true },
  propertyType: { type: String, required: true },
  bedrooms: { type: Number, required: true},
  bathrooms: { type: Decimal128, required: true},
  lotSize: Number,
  yearBuilt: Number,
  date: { type: Date, default: Date.now } 
});

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;
