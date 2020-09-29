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

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// tells app to handle each endpoint based on the associated file
app.use('/api', routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

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