var connect = require ('connect');
var http = require ('http');

var app = connect();

function doFirst (req, res, nxt){
	console.log("bacon")
}

app.use(doFirst)

http.createServer(app).listen(8080);
console.log("server is running"); 