const express = require('express');
const coursesRoutes = express.Router();
// Get, Post, Put, delete - Http

// coursesRoutes.all('/getcourse',(req,res)=>{

// });
// coursesRoutes.get('/search*',(req,res)=>{
//     res.send('Search CALL DONE');
// });
// coursesRoutes.get('/se?a?rch',(req,res)=>{
//     res.send('I am in Search'); 
// });
// coursesRoutes.get('/sea*rch',(req,res)=>{
//     res.send('Search CALL DONE');
// });
//newspaper newpaper
coursesRoutes.get('/se+arch',(req,res)=>{
    res.send('I am in Search'); 
});


// coursesRoutes.get('/getcourse',(req,res)=>{

// });
coursesRoutes.get('/searchcourse',(req,res)=>{
    res.send("U search for this course "+req.query.cname);
});
coursesRoutes.get('/addcourse',(req,res)=>{
    res.send('Add Course Called..');
});
coursesRoutes.get('/profile',(req, res)=>{
    res.send('Course Profile is ---> '+req.query.userid);
})
module.exports =coursesRoutes;