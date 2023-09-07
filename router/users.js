// this file is similar to the commenting in controller/users.js file.

const express=require('express'); // importing the express module
const router=express.Router(); // creating a router object
const userController=require('../controller/users'); // importing the getUsers function from controller/users.js file

router.get('/users',userController.getUsers); // calling the getUsers function from controller/users.js file

module.exports=router; // exporting the router object to the index.js file