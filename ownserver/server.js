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
    else
    if(isStaticFile(request.url))
    {
     serveStaticFile(response, request.url);
    }
    else
    if(request.url=='/login' && request.method=='POST'){
        //request.headers
       response.write("I am in Login with POST");
       var postData  = '';
       request.on('data',(chunk)=>{
        postData +=chunk;
       });
       request.on('end',()=>{
        const queryString = require('querystring');
        const obj = queryString.parse(postData);
        let userid = obj.userid;
        let pwd = obj.pwd;
        if(userid == pwd){
            response.write("Welcome "+userid);
        }
        else{
        response.write("Invalid Userid or Password");
        }
        response.end();
       });
       
    }
    else
    if(request.url.startsWith('/login') && request.method=='GET'){
        const parser = require('./utils/urlparser');
       var obj =  parser(request.url);
        // const url = require('url');
        // var obj = url.parse(request.url,true);
        let userid = obj.query.userid;
        let pwd = obj.query.pwd;
        if(userid == pwd){
            response.write("Welcome "+userid);
        }
        else{
        response.write("Invalid Userid or Password");
        }
        response.end();
    }
    else{
        response.write('404 File Not Found');
        response.end();
    }
    
   
}
const server = http.createServer(handleRequestResponse);
server.listen(1234,()=>{
    console.log('Server Started...');
})