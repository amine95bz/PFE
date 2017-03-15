var http = require("http");
var fs= require("fs");

function send404Response (res){;
	res.writehead(404,{"Content-Type": "text/plain"});
	res.write("error 404: page not found");
	res.end();
}

function onRequest (req, res) {

	if (req.method=="GET" && req.url == "/"){
		res.writehead(200, {"Content-Type": "text/html"});
		fs.createReadStream("./index.html").pipe(res);


	}
	else {

		send404Response(res);
	}

}

http.createServer(onRequest).listen(8080);
console.log("server is now running");