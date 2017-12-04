
var http = require('http');
var connect = require("connect");
var serveStatic = require('serve-static');
var port = 4000;

var app = connect();

app.use(serveStatic("./main/"));
app.listen(port);


console.log("Connected via port", port);