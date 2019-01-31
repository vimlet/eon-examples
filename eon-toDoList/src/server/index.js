var path = require("path");
var express = require("express");
var app = express();

app.use(express.static(path.join(__dirname, "../../build/webapp")));

// Main server
var serverMain = app.listen(8082, function() {
  var host = serverMain.address().address;
  var port = serverMain.address().port;
  console.log("Main server listening at http://localhost:" + port);
});