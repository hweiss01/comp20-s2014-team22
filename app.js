// 
var express = require("express");
var mongo = require('mongodb');
var jade = require('jade');
var app = express();


app.get('/', function(req, res) {
  res.send('Hello, you have arrived at SpendingRetriever!');
});

var port = Number(process.env.PORT || 4000);
app.listen(port, function() {
  console.log("Listening on " + port);
});