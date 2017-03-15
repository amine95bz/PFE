var connect = require ('connect');
var http = require ('http');

var app = connect();

http.createServer(app).listen(8080);
console.log("server is running"); 