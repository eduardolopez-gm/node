var http = require('http');
var module = require('./module')

http.createServer( function (request, response){
    response.writeHead(200 , {'Content-Type': 'text/plain'});
    response.write(module.myName);
    module.logSomething();
    response.end();
}).listen(8080)