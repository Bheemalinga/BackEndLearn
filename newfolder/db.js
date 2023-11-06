const mongoose = require('mongoose'); // importing the mongoose module

// Below line copied from the mongoDB website, connecting to the database
// mongodb+srv://<user>:<password>@cluster0.vwuysw7.mongodb.net/
mongoose.connect('mongodb+srv://<user>:<password>@cluster0.vwuysw7.mongodb.net/')

const db = mongoose.connection; // creating the connection

db.on('error',console.log('Error in connecting to the database')); // checking for error

db.once('open', function() { // checking for success
    console.log('Successfully connected to the database');
});
