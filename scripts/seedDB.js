const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Properties collection and inserts the properties below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/investorpropertyapp"
);

const propertySeed = [
  {
    addressLine1: "",
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
    lotSize: "",
    yearBuilt: ""
  },
  {
    addressLine1: "",
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
    lotSize: "",
    yearBuilt: ""
  },
  {
    addressLine1: "",
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
    lotSize: "",
    yearBuilt: ""
  },
  {
    addressLine1: "",
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
    lotSize: "",
    yearBuilt: ""
  },
  {
    addressLine1: "",
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
    lotSize: "",
    yearBuilt: ""
  },
  {
    addressLine1: "",
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
    lotSize: "",
    yearBuilt: ""
  },
  {
    addressLine1: "",
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
    lotSize: "",
    yearBuilt: ""
  },
  {
    addressLine1: "",
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
    lotSize: "",
    yearBuilt: ""
  },
  {
    addressLine1: "",
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
    lotSize: "",
    yearBuilt: ""
  },
  {
    addressLine1: "",
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
    lotSize: "",
    yearBuilt: ""
  }
];

db.Property
  .remove({})
  .then(() => db.Property.collection.insertMany(propertySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
