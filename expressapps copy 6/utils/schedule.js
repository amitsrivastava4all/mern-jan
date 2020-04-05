const cron = require('node-cron');
var task = cron.schedule('* * * * *',()=>{
    console.log('Run on Every Minute');
});
setTimeout(()=>{
    console.log('Timeout called and destroy the schedule');
    task.destroy();
},10000);


var result = cron.validate('* * * * *');
console.log(result?'Valid Cron Pattern':'Not valid Pattern');
cron.schedule('* 23 * * Monday',()=>{

});