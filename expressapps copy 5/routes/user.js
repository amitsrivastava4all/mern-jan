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
    // response.write('Welcome User');
    // response.end();
    //response.status(200).send('Welcome User');
    //response.status(404).send('Resource Not Found');
    // response.format('text/html',()=>{
    //     response.send('Welcome User');
    // });
    // response.format('application/json',()=>{
    //     //response.send('Welcome User');
    //     response.json({id:1001,name:'Ram'});
    // });
    response.redirect('/dashboard?userid='+request.query.userid);
    //response.send('Welcome User');
})
userRoutes.get('/logout',(req,res)=>{
    if(req.session && req.session.uid){
        req.session.destroy((err)=>{
                if(err){
                    console.log('Error During Session Destroy ',err);
                }
                else{
                    console.log('Session Destroy SuccessFully');
                }
        });
        res.send('Logout SuccessFully');
    }
    else{
        const path = require('path');
        const p1 = path.normalize(__dirname+'/..');
        const fullPath = path.join(p1,'/public/login.html');
        res.sendFile(fullPath);
    }
    
})
userRoutes.get('/dashboard',(req,res)=>{
    // HTML Template 
    //res.send('<h1>Welcome User , U r On Dashboard Page</h1>');
    console.log('Userid in Dashboard is ',req.query.userid);
    if(req.session && req.session.uid){
        var phones = [9999,2232,4556,77788,88889];
        var object = {uid:req.session.uid, email:'admin@yahoo.com','phone':phones};
        res.render('dashboardpage',object);
    }
    else{
        console.log("Inside Else Part.....");
        const path = require('path');
        const p1 = path.normalize(__dirname+'/..');
        const fullPath = path.join(p1,'/public/login.html');
        res.sendFile(fullPath);
        
    }
    /*const path = require('path');
    const p1 = path.normalize(__dirname+'/..');
    const fullPath = path.join(p1,'/public/dashboard.html');
    res.sendFile(fullPath);*/
   
})
userRoutes.post('/login',(request, response)=>{
    console.log('Request Body is ',request.body);
    var userObject = request.body;
    if(userObject.userid==userObject.pwd){
        request.session.uid = userObject.userid;
       response.redirect('/dashboard');
        // response.send('Welcome User '+userObject.userid );
    }
    else{
        response.send('Invalid Userid or Password');
    }
    
    //console.log('Inside the LoginPost ');
})
module.exports = userRoutes;