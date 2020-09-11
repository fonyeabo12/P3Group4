const mongoose = require("mongoose");
const { Property } = require(".");
const Schema = mongoose.Schema;

const propertySchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;
