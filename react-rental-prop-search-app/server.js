const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');

mongoose.connect('mongodb://localhost/react_prop_search', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// mongoose listener to verify that mongoose been connected
mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!');
});

// HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes);

app.listen(PORT, console.log(`Server is listening at ${PORT}`));