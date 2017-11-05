var express = require('express');
var app = express();
var path = require('path');
var fs = require("fs");
var json = require("./sample.json");

app.use(express.static(path.join(__dirname)));

// var contents = fs.readFileSync("sample.json");
// var jsonContent = JSON.parse(contents);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
})

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
