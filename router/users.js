// this file is similar to the commenting in controller/users.js file.

const express=require('express'); // this line is used to import the express module
const router=express.Router(); // this line is used to create a router object
const userController=require('../controller/users'); // this line is used to import the getUsers function from controller/users.js file

router.get('/users',userController.getUsers); // this line is used to call the getUsers function from controller/users.js file

module.exports=router; // this line is used to export the router object to the index.js file