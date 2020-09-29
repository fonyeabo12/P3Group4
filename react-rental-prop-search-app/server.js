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

// DEPLOY START
app.listen(PORT, console.log(`Server is listening at ${PORT}`));

let uri = "mongodb://localhost/react_prop_search";
if(process.env.NODE_ENV === 'production') {
    uri = process.env.MONGODB_URI;
}
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// DEPLOY END

// mongoose.connect(MONGODB_URI || "mongodb://localhost/react_prop_search", {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
// });

// WORKING CODE PRIOR TO DEPLOY
// mongoose.connect("mongodb://localhost/react_prop_search", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// mongoose listener to verify that mongoose been connected
mongoose.connection.on("connected", () => {
    console.log("Mongoose is connected!!!");
});