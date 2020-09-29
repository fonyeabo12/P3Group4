require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

const routes = require('./routes/api-routes');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// HTTP request logger
app.use(morgan('tiny'));

// tells app to handle each endpoint based on the associated file
app.use('/api', routes);
// app.use('/properties', SavedPropertiesRoute);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/react_prop_search", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

// mongoose listener to verify that mongoose been connected
mongoose.connection.on("connected", () => {
    console.log("Mongoose is connected!!!");
});

// DEPLOY START
app.listen(PORT, console.log(`Server is listening at ${PORT}`));