import axios from 'axios';

    function save(data) {
        return axios.post('/properties/save', data);
    }

    function getProps() {
        return axios.get('/properties');
    }

    function deleteProp(id) {
        return axios.delete('/properties' + id);
    }

    export {save, getProps, deleteProp};


/*
    export default {
        // Gets all saved property cards


        // Gets a single property by its id
        getProp: function() {
            return axios.get('/properties/' + id);
        },

        // Saves property card data to the database
        save: function(data) {
            return axios.post('/properties/save', data);
        },

        // Deletes a property card with the given id
        deleteProp: function(id) {
            return axios.delete('/properties/' + id);
        },



};
*/

/*

const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Book
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Book
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Book
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

*/