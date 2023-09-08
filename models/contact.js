const mongoose = require('mongoose'); // importing the mongoose module

const contactSchema = new mongoose.Schema({ // creating the schema
    name: { // defining the name field
        type: String,
        required: true
    },
    phone: { // defining the phone field
        type: Number,
        required: true
    }
});

const Contact = mongoose.model('Contact', contactSchema); // creating the model/db
module.exports = Contact; // exporting the model/db