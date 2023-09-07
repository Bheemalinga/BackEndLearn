const express = require('express');
const port = 8000;
const app = express();
const UserRouters = require('./router/users');
app.use('/', UserRouters);

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server`);
    }
    console.log(`Server is running on port: ${port}`);
});