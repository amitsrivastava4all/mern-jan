const events = require('events');
const eventEmitter = new events.EventEmitter();
//eventEmitter.addListener('hi',()=>{});
// Hook
eventEmitter.on('sayhello',(val)=>{
    console.log('Hello User1 ',val);
});
eventEmitter.on('sayhello',(val)=>{
    console.log('Hello User2 ',val);
});
eventEmitter.emit('sayhello',"Amit");
// UnHook
eventEmitter.removeAllListeners('sayhello');

