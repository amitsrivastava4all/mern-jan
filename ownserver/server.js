const http = require('http');
function isStaticFile(fullPath){
    const ext  = [".html",".css",".js",".png",".jpg"];
    const path = require('path');
    var fileName = path.basename(fullPath);
    var currentExt = path.extname(fileName);
    return ext.indexOf(currentExt)>=0;
    //console.log('File Name ',fileName);
}
function serveStaticFile(response, url){
    const fs = require('fs');
    const path = require('path');
    const fullPath = path.join(__dirname,'public/'+url);
    if(isStaticFile(fullPath)){
        const stream = fs.createReadStream(fullPath);
        stream.pipe(response);
    }
   
    // stream.on('data',(chunk)=>{
    //     response.write(chunk);
    // })
    // stream.on('end',()=>{
    //     response.end();
    // })

}
function handleRequestResponse(request, response){
    //console.log('Request Accept ');
    // var a = 100;
    // var b = 200;
    // var  c=  a + b;
    // response.write('Hello User '+c);
    // response.end();
    console.log("Req res ",request.url);
    if(request.url=='/'){
        serveStaticFile(response,'/index.html');
    }
    else{
     serveStaticFile(response, request.url);
    }
    
   
}
const server = http.createServer(handleRequestResponse);
server.listen(1234,()=>{
    console.log('Server Started...');
})