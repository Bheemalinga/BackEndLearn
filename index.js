const express = require('express'); // importing the express module
const port = 8000; // defining the port number
const app = express(); // Creating an express application
const data = require('./models/Data.json'); // importing the data from Data.json file
const UserRouters = require('./router/users'); // importing the router object from router/users.js file
const Contact = require('./models/contact'); // importing the model/db from models/contact.js file

// Profile router is not getting displayed on the website
const profilesRouters = require('./router/profile'); // importing the router object from router/profile.js file




app.use('/api', UserRouters); // Calling the router object from router/users.js file

// profile router is not getting displayed on the website
app.use('/api',profilesRouters); // Calling the router object from router/profile.js file


// Middleware Important part. It is used to convert the data into json format
app.use(express.urlencoded()); // converting the data into json format

    var contactList = [ // creating the contactList array
        {
            name: "Kummara", // defining name field
            phone:"1234567890" // defining phone field
        },
        {
            name: "Bheema",
            phone:"987654321"
        },
        {
            name: "Linga",
            phone:"13579"
        },
        {
            name:"Sai",
            phone:"24680"
        }
        
    ]

    // app.get('/', function (req,res) { // creating the home route

    // })




app.listen(port, function(err){ // running the server
    if(err){
        console.log(`Error in running the server`);
    }
    console.log(`Server is running on port: ${port}`);
});



