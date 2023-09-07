// Commenting

const data=require('../models/Data.json'); // this line is used to import the data from Data.json file

// function getUsers(req,res){ // this function is used to send the data to the browser
//     const users=data; // this line is used to store the data from Data.json file in users variable
//     res.send({users}); // this line is used to send the data to the browser
// }

// module.exports ={getUsers}; // this line is used to export the getUsers function to the index.js file

exports.registercontroller = async(req, res) => {
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


// Login controller email, password ?
exports.Logincontroller = async(req, res) => {
    try{
        const { email, password} = req.body;
        const CheckingEmail = await data.findOne({ email });
            if(!CheckingEmail) {
                return res.send("Error the email is not registered. Try to sign up")
            }
            
            // i don't know the code for checking if the email and corresponding password matches or not for the login
            
            // have to check if the email and password matches or not 
            const CheckingPassword = await data.matchpassword(password);

            if(CheckingEmail && CheckingPassword) {
                return res.send("Login Successful")
                
            }

            //


    }
    catch(error){
        this.sendToken(error, 500)
    }
}