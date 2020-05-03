const express = require('express');
const app = express();
app.use(express.static('public'));
const fs = require('fs');
app.get('/stream',(req,res)=>{
    res.writeHead(200,{
        'content-type':'text/event-stream',
        'connection':'keep-alive',
        'Access-Control-Allow-Origin':'*'
    });
    var filePath = __dirname+'/cricket.txt';
    fs.watchFile(__dirname+'/cricket.txt',()=>{
        
        var liveScoreTxt = fs.readFileSync(filePath);
        res.write('data:Now '+liveScoreTxt+'\n\n');
        //res.write('event:givingulivescore\n'); // fire event
        //res.write('data: Now Score is '+liveScoreTxt ); // with event value
        console.log('Change Happen on Server Side '+liveScoreTxt);
    });

});
app.listen(1234,()=>{
    console.log('Server Start');
})