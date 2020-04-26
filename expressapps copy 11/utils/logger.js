const winston = require('winston');
const formatting = winston.format;
const options = {
    level:'error' ,//(dev)  // error (Prod)
    transports:[
        new winston.transports.File({filename:'error.log',level:'error'}),
        new winston.transports.File({filename:'combined.log'})
    ],
    format:formatting.combine(formatting.timestamp({
        format:'YYYY-MM-DD HH:mm:ss'
    }),formatting.json())
}
const logger = winston.createLogger(options);
module.exports = logger;