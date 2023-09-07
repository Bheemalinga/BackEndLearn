// Commenting

const data=require('../models/Data.json'); // this line is used to import the data from Data.json file

function getUsers(req,res){ // this function is used to send the data to the browser
    const users=data; // this line is used to store the data from Data.json file in users variable
    res.send({users}); // this line is used to send the data to the browser
}

module.exports ={getUsers}; // this line is used to export the getUsers function to the index.js file





// register controller

exports.registerController = async(req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingEmail = await data.findOne({ email });
        if (existingEmail) {
            return res.send("Error the email is already registered. Try to sign in")
        }
        const user = await data.create({ name, email, password });
        this.sendToken(user, 201, res);
    } catch(error){
        this.sendToken(error, 500)
    }
}







// 201 success
// 404 for not found error
// 500 for internal server error







// Login controller email, password.
exports.LoginController = async(req, res) => {
    try{
        const { email, password} = req.body;
        const CheckingEmail = await data.findOne({ email });
            if(!CheckingEmail) {
                return res.send("Error the email is not registered. Try to sign up",404)
            }
            
            // i don't know the code for checking if the email and corresponding password matches or not for the login
            
            // have to check if the email and password matches or not 
            const CheckingPassword = await data.matchpassword({ password });

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

exports.registerController = (req, res) => { // this function is used to send the data to the browser
    const {username, email, password} = req.body; // this line is used to store the data from Data.json file in users variable

    data.findOne({email}) // this line is used to find the email in the database
    .then(existingEmail=> { // this line is used to check if the email is already present in the database or not
        if(existingEmail) {
            return res.send("Error in email id is already present");
        }
        return data.create({username, email, password}) // this line is used to create the new user in the database
    })
    .then(user => {
        this.sendToken(user, 201, res);
    })
    .catch(error => {
        res.sendToken(error, 500)
    });
}







//login controller interms of email and password.

exports.LoginController = (req, res) => {
    const {email, password} = req.body;

    data.findOne({email}) // this line is used to find the email in the database
    .then(existingEmail => {
        if(!existingEmail){
            return res.send("Error !, Email unavailable, Try to sign up", 404);
        }
        else {
            return data.matchpassword({password})
        }
    })

    .then(existingPassword => { // this line is used to check if the password is correct or not
        if(!existingPassword){
            return res.send("Error !, Password incorrect, Try again", 404);
        }
        else {
            return res.send("Login Successful", 201);
        }
    })

    .catch(error => { // this line is used to send the error message to the browser
        res.sendToken(error, 500)
    });
    
}







//  create controller for forms which consists of name(> 2), roll number, branch, specialization.

exports.formController = (req,res) => { // this function is used to send the data to the browser
    try {
        
        const {username, roll_number, branch, specialization} = req.body; // this line is used to store the data from Data.json file in users variable
        
        if(username.length < 2){
            return res.send("Error, Name should be greater than 2 characters")  
        }

        if(roll_number.length < 5){
            return res.send("Error, Roll number should be greater than 5 numbers")  
        }

        if(branch.length > 6){
            return res.send("Error, Branch should be less than 6 characters")  
        }

        data.create({username, roll_number, branch, specialization}) // this line is used to create data in the database

    } catch(error) {
        this.sendToken(error, 500)
    }
}






// Name, description, price.

exports.profileController = (req, res) => { // this function is used to send the data to the browser

    try {
    const {name, description, price} = req.body; // this line is used to store the data from Data.json file in users variable

    if(name.length > 2) {
        return res.send("Error, Name should be greater than 2 characters")  
    }

    if(description.length > 300 && description.length < 500) {
        return res.send("Error, Description should be less than 500 characters")
    }

    if(price <= 0) {
        return res.send("Error, Price should be greater than 0")
    }

    data.create({name, description, price}) // this line is used to create data in the database
    
    } catch(error) {
        this.sendToken(error, 500)
    }
}