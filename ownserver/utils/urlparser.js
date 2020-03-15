 function parser(urlValue){
    const url = require('url');
        var obj = url.parse(urlValue,true);
       return obj;
}
module.exports = parser;