const express = require('express');
const app = express();
const passport = require('./utils/passportconfig');
app.use(express.static('public'));
app.use('/',require('./routes/user'));
app.listen(process.env.PORT || 1234,()=>{
    console.log('Server Start');
})