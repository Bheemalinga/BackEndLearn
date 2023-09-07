const express = require('express'); // this line is used to import the express module
const port = 8000; // defining the port number
const app = express(); // Creating an express application
const UserRouters = require('./router/users'); // importing the router object from router/users.js file
app.use('/', UserRouters); // this line is used to call the router object from router/users.js file

app.listen(port, function(err){ // running the server
    if(err){
        console.log(`Error in running the server`);
    }
    console.log(`Server is running on port: ${port}`);
});