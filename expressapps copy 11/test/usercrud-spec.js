const userOperations = require('../db/helpers/usercrud');
const userObject = {userid:'amit',password:'amit1111'};
var promise = userOperations.add(userObject);
promise.then(data=>{
    console.log('Record Added');
}).catch(err=>{
    console.log('Error in Add',err);
})
//var promise  = userOperations.search(userObject);
//promise.then(doc=>console.log(doc)).catch(err=>console.log('Error in Search ',err));