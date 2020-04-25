const express = require('express');
const app = express();
app.use(express.static('public'));
app.listen(process.env.PORT || 4321,()=>{
    console.log('Front End Server Started...');
});