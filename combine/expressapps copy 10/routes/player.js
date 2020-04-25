const express = require('express');
const routes = express.Router();
const api = require('../utils/apicaller');
routes.get('/player',async (req,res)=>{
    var playerObject = await api();
    res.set({'content-type':'application/json'});
    res.json(playerObject);
    
});
module.exports = routes;