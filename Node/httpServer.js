var http = require('http');
http.createServer((request,response)=>{
    response.end("hy from http server");
}).listen(3000)