const express = require('express');

const app = express();
const morgan = require('morgan');
app.use(morgan('combined'));
//app.use(morgan('tiny'));
app.use(express.static('public'));

//console.log('App is ',typeof app, '   ',app );
const debug = require('debug')('app');
const server = app.listen(process.env.PORT || 1234,()=>{
    console.log('Server Start..... ',server.address().port);
    debug('Server Start ',server.address().port, ' PID ',process.pid);
})