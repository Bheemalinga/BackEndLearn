
// something went wrong with the ./api/profile.js file      no website display 

const express=require('express'); // importing the express module
const router=express.Router(); // creating a router object
const profilesController=require('../controller/users'); // importing the getUsers function from controller/users.js file

router.get('/users',profilesController.getUsers); // calling the getUsers function from controller/users.js file

module.exports=router; // exporting the router object to the index.js file