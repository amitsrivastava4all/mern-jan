const fs = require('fs');
const path = '/Users/amit/Documents/node-march2020/two.js';
console.log("Start ");
fs.readFile(path,(err,result)=>{
    if(err){
        console.log('Error During Read ',err);
    }
    else{
        console.log(""+result);
    }
});
fs.readFile('/Users/amit/Documents/node-march2020/one.js',(err,result)=>{
    if(err){
        console.log('Error During Read ',err);
    }
    else{
        console.log("One JS ********* "+result);
    }
});
console.log("I am Here");
var a = 10;
var b = 20;
var c = a + b;
console.log("Sum is ",c);
