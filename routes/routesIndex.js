var app = require("express").Router();
const { model } = require("../models/property");
var db = require("../models/property");

app.get("/api/allProperties", (req, res) => {
    console.log("Getting GET Route")
    db.find({}).then(function(response) {
        console.log("Saved property",response)
        res.json(response)
    })
});

app.get("/api/properties/:id", (req, res) => {
    console.log("Getting GET Route")
    db.findbyId(req.params.id).then(function(response) {
        res.json(response)
    })
});

app.post("/api/properties", (req, res) => {
    console.log("Getting POST Route",req.body)
    db.create(req.body).then(function(response) {
        res.json(response)
    })
});

app.put("/api/property/:id", (req, res) => {
    console.log("Getting PUT Route")
    db.findByIdAndUpdate(req.params.id, {status: req.body.status}).then(function(response) {
        res.json(response)
    })
});

app.delete("/api/properties/:id", (req, res) => {
    console.log("Getting DELETE Route")
    db.delete(req.params.id).then(function(response) {
        res.json(response)
    })
});

module.exports = app;