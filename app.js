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

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();
app.use(express.logger());
app.use(express.bodyParser()); //needed for retrieving data from jQuery post
app.use(enableCORS); //enable CORS
app.use(app.router); //needed for retrieving data from jQuery post


var mongo = require('mongodb');

//MongoDB Setup
var mongoUri = process.env.MONGOLAB_URI ||
	process.env.MONGOHQ_URL ||
	'mongodb://localhost/sr';

//connect to Mongo globally
var db = mongo.Db.connect(mongoUri, function (err, database) {
	db = database;
});

// db.insert({ 'purchases': [
// 						{'website': 'Amazon', 'date': '4/1/14', 'price': '50'},
// 						{'website': 'Amazon', 'date': '5/20/14', 'price': '25'}
// 					], 'total': '$75'
// 					});


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

app.get('/', routes.index);

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
	// var total = '$75'
	// 	res.render('retrieve', { 'purchases': [
	// 					{'website': 'Amazon', 'date': '4/1/14', 'price': '50'},
	// 					{'website': 'Amazon', 'date': '5/20/14', 'price': '25'}
	// 				], 'total': total
	// 				});
  var username = "no name";
  var user = username = req.query["username"];
  console.log("ABOUT TO GET USERNAME");
  //username = req.query["username"];
  //var tempname = JSON.parse(username);
  console.log(user);

  db.collection(user, function(er, collection) {

    //sort documents in <user> collection
    collection.find().toArray(function (err, docs) {
      var purchaseData = sortResults(docs, "date", false); //possible fields: data, website, price
      var output = []; //holds JSON objects
      var total = 0.00;

      //find data for correct user
       for (doc in purchaseData) {
         for (item in purchaseData[doc]["items"]) {
           output.push(purchaseData[doc]["items"][item]);
           total = total + parseFloat(purchaseData[doc]["items"][item]["price"]);
         }
       }

      output = '{ "purchases": ' + JSON.stringify(output) + ', "total": ' + parseFloat(total).toFixed(2) + '}';
      var userReceipts = JSON.parse(output);
      res.render('retrieve', userReceipts);
    });
  });
});

// POST /submit.json
app.post('/submit.json', function(req, res) {
  var JSONstring = req.body["data"];
  JSONstring = JSONstring.replace(/&/g, '').replace(/</g, '').replace(/>/g, ''); //sanitize for security
  var buffer = JSON.parse(JSONstring);

  db.collection(buffer["user"], function(er, collection) {
      for (key in buffer["purchases"]) {
        var sortableDate = reorderDate(buffer["purchases"][key]["date"]);
        var nextDocument = {"date":sortableDate, "confirmation":buffer["purchases"][key]["confirmation"], "items":buffer["purchases"][key]["items"]};
        insertPurchase(nextDocument, buffer["user"]);
      }
  });

  res.send("Posted scores to database.");
});

//Takes in a date string "mm/dd/yyyy" and returns int yyyymmdd
//Allows dates to easily be sorted
function reorderDate(oldDate) {
  var dateArray = oldDate.split("/");
  var year = dateArray[2];
  var month = "";
  if (parseInt(dateArray[0]) < 10) {
    month = "0" + dateArray[0];
  }
  else {
    month = dateArray[0];
  }
  var day = "";
  if (parseInt(dateArray[1]) < 10) {
    day = "0" + dateArray[1];
  }
  else {
    day = dateArray[1];
  }

  var newDate = year + month + day;
  return parseInt(newDate);
}

//Inserts a document into the database if a duplicate <confirmation> key is not already in the database
function insertPurchase(nextDocument, user) {
  db.collection(user, function(er, collection) {
    var currentConfirmation = nextDocument["confirmation"];
    collection.find({"confirmation":currentConfirmation}).toArray(function(err, docs) {
      if(docs.length == 0) {
        collection.insert(nextDocument, function (err, res) {
            //callback
        });
      }
    });
  });
}

//Sorts JSON Array <sortThis> by <prop>, in asc/desc order
//modified from Sean the Bean: http://stackoverflow.com/questions/881510/jquery-sorting-json-by-properties
function sortResults(sortThis, prop, asc) {
		sortThis = sortThis.sort(function(a, b) {
				if (asc) return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
				else return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
		});
		return sortThis;
}


http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});
