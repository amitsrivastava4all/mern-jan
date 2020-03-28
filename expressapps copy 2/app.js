const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const courseRoutes = require('./routes/courses');
const app = express();
const morgan = require('morgan');
app.use(morgan('combined'));
//app.use(morgan('tiny'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false})); // QS
app.use(bodyParser.json());
app.use('/',userRoutes);  // http://localhost:1234/addcourse (req, res,next)
app.use('/course',courseRoutes);
//app.use('/admin',adminRoutes);
// app.get('/register/:userid',(req, res)=>{
//     res.send('Userid is '+req.params.userid);
// })
// app.get('/profile',(req, res)=>{
//     res.send('Userid is '+req.query.userid);
// })
// app.get('/login',(request,response)=>{
//     //  ;
//     console.log('Request Get is ',request.query);
//     response.send('Welcome User');
// })
// app.post('/login',(request, response)=>{
//     console.log('Request Body is ',request.body);
//     var userObject = request.body;
//     if(userObject.userid==userObject.pwd){
//         response.send('Welcome User '+userObject.userid );
//     }
//     else{
//         response.send('Invalid Userid or Password');
//     }
    
//     //console.log('Inside the LoginPost ');
// })
//console.log('App is ',typeof app, '   ',app );
const debug = require('debug')('app');
const server = app.listen(process.env.PORT || 1234,()=>{
    console.log('Server Start..... ',server.address().port);
    debug('Server Start ',server.address().port, ' PID ',process.pid);
})