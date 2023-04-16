var http = require('http');
var module = require('./module')

function onRequest(request, response){
    response.writeHead(200 , {'Content-Type': 'text/plain'});
    response.write(module.myName);
    module.logSomething();
    response.end();
}
http.createServer(onRequest).listen(8080)