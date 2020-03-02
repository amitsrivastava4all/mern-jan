const fs = require('fs');
// c:\\abcd\\xyz.txt

//const path = '/Users/amit/Documents/node-march2020/two.js';
console.log("Start ");
fs.readFile(__filename,(err,result)=>{
    if(err){
        console.log('Error During Read ',err);
    }
    else{
        console.log(""+result);
    }
});
const path = require('path');
const parentFolder = path.normalize(__dirname+"/..");

const fullPath = path.join(parentFolder,'second/one.js');
console.log("Full Path is ",fullPath);
fs.readFile(fullPath,(err,result)=>{
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
