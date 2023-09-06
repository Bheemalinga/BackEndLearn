const data=require('../models/Data.json');

function getUsers(req,res){
    const users=data;
    res.send({users});
}

module.exports ={getUsers};