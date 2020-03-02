console.log(process.cwd());
var env = process.argv[2];
var envName = env.split('=')[1];
if(envName=='DEV'){
    console.log('Connect to Dev');
}
else
if(envName=='SIT'){
    console.log('Connect to SIT');
}
console.log(process.argv[2]);
process.on('uncaughtException',()=>{
    console.log('Exception Occur ');
})
try{
y++;
}
 catch(e){
     console.log('Y is Not Defined ');
 }
console.log('Application Still Running ');
// process.on('exit',()=>{
//     console.log('Process is Exit');
// });
