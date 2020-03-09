const fs = require('fs');
console.log('Change..');
const path = require('path');
const tempPath = path.join(__dirname,'third.js');
// /Users/amit/Documents/node-march2020/second/third.js
var obj = path.parse(tempPath);
console.log('Object is ',obj);
const parentDir = path.normalize(__dirname +path.sep+"..");
const fullPath = path.join(parentDir,'myfolder/two.js')
fs.watchFile(fullPath,(curr, prev)=>{
    console.log('File Has been Changed');
    console.log(""+fs.readFileSync(__filename));

});
setTimeout(()=>{
    console.log("************************");
    console.log('Set TimeOut Called After 9 Sec ');
    

    fs.unwatchFile(__filename,()=>{
        console.log('File Will Not Watch');
    })
},9000);
console.log('Program Start...');