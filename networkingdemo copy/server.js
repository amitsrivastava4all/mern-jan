const express = require('express');
const app = express();
const socket = require('socket.io');
app.use(express.static('public'));
const server = app.listen(1234,()=>{
    console.log('Server Start');
});
var io = socket(server);
io.sockets.on('connection',function(socket){
    console.log('Connected with ',socket.id);
    // fire the event called message
    socket.emit('message',{msg:'Welcome Client '+socket.id});
    socket.on('send',(data)=>{
        
            io.sockets.emit('allmsg',data);
    })
})