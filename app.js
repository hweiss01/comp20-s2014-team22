//SpendingRetriever
//(C) Spring 2014
// by Will, Brian, etc. of Tufts University

//Cross-Origin Resource Sharing (CORS)
//source: http://bannockburn.io/2013/09/cross-origin-resource-sharing-cors-with-a-node-js-express-js-and-sencha-touch-app/
var enableCORS = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
 
    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};

//Dependencies and Environments
var express = require("express");
var mongo = require('mongodb');
var jade = require('jade');
var app = express(express.logger());
app.use(express.logger());
app.use(express.bodyParser()); //needed for retrieving data from jQuery post
app.use(enableCORS); //enable CORS
app.use(app.router); //needed for retrieving data from jQuery post

//MongoDB Setup
var mongoUri = process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/myDatabase';

//connect to Mongo globally
var db = mongo.Db.connect(mongoUri, function (err, databaseConnection) {
  db = databaseConnection;
});

app.get('/', function(req, res) {
  res.send('Hello, you have arrived at SpendingRetriever 2.0!');
});

/*
NEW COLLECTION for each USER
COLLECTION = WILL

DOCUMENT: JSON object; contains arrays of tuples

WILL
	{date:1/1/11, items:[[d,w,p], [d,w,p]]}
	{[d,w,p]}
	{[d,w,p], [d,w,p], [d,w,p], [d,w,p]}
*/


// GET /retrieve
app.get('/retrieve', function(req, res) {
  var user = req.query.username; //from /retrieve?username=SOMEDATA

  db.collection(user, function(er, collection) {

    //sort documents in <user> collection
    collection.find().toArray(function (err, docs) {
      var purchaseData = sortResults(docs, "date", false); //possible fields: data, website, price

      var output = []; //holds JSON objects

      //find data for correct user
      for (doc in purchaseData) {
      	for (item in purchaseData[doc]) {
      		output.push(purchaseData[doc][item]);
      	}
      }

      res.send(output); //[ [d,w,p], [d,w,p], ... ]
    });
  });
});


var port = Number(process.env.PORT || 4000);
app.listen(port, function() {
  console.log("Listening on " + port);
});