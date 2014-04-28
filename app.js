//SpendingRetriever
//Spring 2014
//Brian, Will, etc. of Tufts University

var express = require("express");
var mongo = require('mongodb');
var jade = require('jade');

var app = express(express.logger());


app.get('/', function(req, res) {
  res.send('Hello, you have arrived at SpendingRetriever!');
});

var port = Number(process.env.PORT || 4000);
app.listen(port, function() {
  console.log("Listening on " + port);
});