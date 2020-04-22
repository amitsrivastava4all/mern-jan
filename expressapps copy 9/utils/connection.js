const mongoose = require('mongoose');
const db = require('./config').db;
mongoose.connect(db.url,{poolSize:db.poolsize},(err)=>{
    if(err){
        console.log('Connection Not Created Due to Some Error ',err);
    }
    else{
        console.log('Connection is Created...');
    }
});
module.exports = mongoose;