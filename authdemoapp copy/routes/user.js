const route = require('express').Router();
const passport = require('passport');
const token = require('../utils/token');
route.get('/auth',passport.authenticate('google',{scope:['profile','email'],session:false}));
route.get('/auth/cb',passport.authenticate('google',{session:false}),(req,res)=>{
    console.log('Now in CallBack URL ',req.user);
    const userObject  = req.user;
    let genToken = token.createToken(userObject.emails[0].value);
    res.send(`<img src='${userObject.photos[0].value}'/> <p> Name is ${userObject.displayName} Email is ${userObject.emails[0].value} Token is ${genToken}</p>`);
    const mail = require('../utils/mail');
    mail(userObject.emails[0].value,'Reg SuccessFully',require('../utils/templates/regttemplate')(userObject.displayName));
})
module.exports  = route;