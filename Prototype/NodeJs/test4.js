var connect = require ('connect');
var http = require ('http');

var app = connect();

function doFirst (req, res, nxt){
	console.log("bacon")
nxt();
}


function doSecond (req, res, nxt){
	console.log("fish")
	nxt();
}

app.use(doFirst);
app.use(doSecond);

http.createServer(app).listen(8080);
console.log("server is running"); 