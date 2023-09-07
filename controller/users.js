// Commenting

const data=require('../models/Data.json'); // importing the data from Data.json file

function getUsers(req,res){ // function that send the data to the browser
    const users=data; // storing the data from Data.json file in users variable
    res.send({users}); // sending the data to the browser
}

module.exports ={getUsers}; // exporting the getUsers function to the index.js file





// register controller

exports.registerController = async(req, res) => { // function that sends the data to the browser
    try {
        const { name, email, password } = req.body; // storing the data from the body in the variables
        const existingEmail = await data.findOne({ email }); // finding if the email exists in the model/database
        if (existingEmail) {
            return res.send("Error the email is already registered. Try to sign in")
        }
        const user = await data.create({ name, email, password }); // creating the new user in the database
        this.sendToken(user, 201, res); // sending the token to the browser
    } catch(error){
        this.sendToken(error, 500)
    }
}







// 201 success
// 404 for not found error
// 500 for internal server error







// Login controller email, password.
exports.LoginController = async(req, res) => { // function that sends the data to the browser
    try{
        const { email, password} = req.body; // storing the data from the body in the variables
        const CheckingEmail = await data.findOne({ email }); // finding if the email exists in the model/database
            if(!CheckingEmail) {
                return res.send("Error the email is not registered. Try to sign up",404)
            }
            
            // // i don't know the code for checking if the email and corresponding password matches or not for the login
            
            // have to check if the email and password matches or not 
            const CheckingPassword = await data.matchpassword({ password }); // .then is used to check if the password exits in the model/database or not

            if(CheckingPassword) {
                return res.send("Login Successful",201)
                
            }

            //
    }
    catch(error){
        this.sendToken(error, 500)
    }
}








// register controller

exports.registerController = (req, res) => { // function that sends the data to the browser
    const {username, email, password} = req.body; // storing the data from the body in the variables

    data.findOne({email}) // finding if the email exists in the model/database
    .then(existingEmail=> {
        if(existingEmail) {
            return res.send("Error in email id is already present");
        }
        return data.create({username, email, password}) // creating the new user in the database
    })
    .then(user => { // sending the token to the browser
        this.sendToken(user, 201, res);
    })
    .catch(error => {
        res.sendToken(error, 500)
    });
}







//login controller interms of email and password.

exports.LoginController = (req, res) => { // function that sends the data to the browser
    const {email, password} = req.body; // storing the data from the body in the variables

    data.findOne({email}) // finding if the email exists in the database(model)
    .then(existingEmail => {
        if(!existingEmail){
            return res.send("Error !, Email unavailable, Try to sign up", 404);
        }
        else {
            return data.matchpassword({password})
        }
    })

    .then(existingPassword => { // .then is used to check if the password exits in the model or not
        if(!existingPassword){
            return res.send("Error !, Password incorrect, Try again", 404);
        }
        else {
            return res.send("Login Successful", 201);
        }
    })

    .catch(error => {
        res.sendToken(error, 500)
    });
    
}







//  create controller for forms which consists of name(> 2), roll number, branch, specialization.

exports.formController = (req,res) => { // function to send the data to the browser
    try {
        
        const {username, roll_number, branch, specialization} = req.body; // storing the data from the body in the variables
        
        if(username.length < 2){
            return res.send("Error, Name should be greater than 2 characters")  
        }

        if(roll_number.length < 5){
            return res.send("Error, Roll number should be greater than 5 numbers")  
        }

        if(branch.length > 6){
            return res.send("Error, Branch should be less than 6 characters")  
        }

        data.create({username, roll_number, branch, specialization}) // creating data in the database

    } catch(error) {
        this.sendToken(error, 500)
    }
}






// profile info: Name, description, price.

exports.profileController = (req, res) => { // function used to send the data to the browser

    try {
    const {name, description, price} = req.body; // storing the data from the body in the variables

    // Checking the criteria conditions for the name, description, price.
    if(name.length > 2) {
        return res.send("Error, Name should be greater than 2 characters")  
    }

    if(description.length > 300 && description.length < 500) {
        return res.send("Error, Description should be less than 500 characters and greater than 300 characters")
    }

    if(price <= 0) {
        return res.send("Error, Price should be greater than 0")
    }

    data.create({name, description, price}); // creating data in the database/model
    
    } catch(error) {
        this.sendToken(error, 500);
    }
}