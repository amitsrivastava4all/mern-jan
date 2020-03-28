const express = require('express');
const userRoutes = express.Router();
userRoutes.get('/register/:userid',(req, res)=>{
    res.send('Userid is '+req.params.userid);
})
userRoutes.get('/profile',(req, res)=>{
    res.send('Userid is ::::::: '+req.query.userid);
})
userRoutes.get('/login',(request,response)=>{
    //  ;
    console.log('Request Get is ',request.query);
    response.send('Welcome User');
})
userRoutes.post('/login',(request, response)=>{
    console.log('Request Body is ',request.body);
    var userObject = request.body;
    if(userObject.userid==userObject.pwd){
        response.send('Welcome User '+userObject.userid );
    }
    else{
        response.send('Invalid Userid or Password');
    }
    
    //console.log('Inside the LoginPost ');
})
module.exports = userRoutes;