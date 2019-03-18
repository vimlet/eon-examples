var path = require("path");
var http = require("http");
var express = require("express");
var app = express();

var staticPath = path.join(__dirname, "../webapp");
app.use(express.static(staticPath));

var server = http.createServer(app);

server.listen(8080, function() {
  var port = server.address().port;
  console.log("Server listening at http://localhost:" + port);
});
