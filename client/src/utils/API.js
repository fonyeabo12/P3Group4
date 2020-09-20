import axios from "axios";

export default {
  // Gets all properties
  getProperties: function() {
    return axios.get("/api/allProperties");
  },
  // Gets the property with the given id
  getProperty: function(id) {
    return axios.get("/api/properties/" + id);
  },
  // Deletes the property with the given id
  deleteProperty: function(id) {
    return axios.delete("/api/properties/" + id);
  },
  // Saves a property to the database
  saveProperty: function(propertyData) {
    return axios.post("/api/properties", propertyData);
  }
};
