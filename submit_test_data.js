function simulateBrian() {
//    var data = 'data={ "user":"brian", "purchases": [ { "date":"1/1/2010", "confirmation":"9869758", "items": [ { "website":"Amazon", "date":"1/1/2010", "price":"15.97" }, { "website":"Ebay", "date":"1/1/2010", "price":"54.37" }, { "website":"Amazon", "date":"1/1/2010", "price":"10.21" } ] }, { "date":"12/26/2013", "confirmation":"2135009", "items": [ { "website":"Overstock", "date":"12/26/2013", "price":"68.53" } ] }, { "date":"12/10/2012", "confirmation":"6854403", "items": [ { "website":"Overstock", "date":"12/10/2012", "price":"100.02" } ] } ] }';
	var data = 'data={ "user":"brian", "purchases": [ { "date":"5/1/2010", "confirmation":"9869758", "items": [ { "website":"Amazon", "date":"5/1/2010", "price":"15.97" }, { "website":"Ebay", "date":"5/1/2010", "price":"54.37" }, { "website":"Amazon", "date":"5/1/2010", "price":"10.21" } ] }, { "date":"6/1/2000", "confirmation":"2135009", "items": [ { "website":"Overstock", "date":"6/1/2000", "price":"68.53" } ] }, { "date":"12/10/2012", "confirmation":"6854403", "items": [ { "website":"Overstock", "date":"12/10/2012", "price":"100.02" } ] } ] }';
	postData(data);
}

function simulateWill() {
	var data = 'data={ "user":"will", "purchases": [ { "date":"3/15/2014", "confirmation":"1568923", "items": [ { "website":"GrubHub", "date":"3/15/2014", "price":"14.21" } ] }, { "date":"12/11/2013", "confirmation":"659853", "items": [ { "website":"Apple Store", "date":"12/11/2013", "price":"23.16" } ] }, { "date":"3/29/2014", "confirmation":"1245986", "items": [ { "website":"GrubHub", "date":"3/29/2014", "price":"65.98" } ] }, { "date":"4/12/2014", "confirmation":"6584523", "items": [ { "website":"GrubHub", "date":"4/12/2014", "price":"2.32" } ] }, { "date":"1/4/2014", "confirmation":"12589655", "items": [ { "website":"JumboCash", "date":"1/4/2014", "price":"49.99" } ] } ] }';
	postData(data);
}

function simulateMing() {
	var data = 'data={ "user":"ming", "purchases": [ { "date":"12/10/2013", "confirmation":"8695686", "items": [ { "website":"GameStop", "date":"12/10/2013", "price":"19.99" }, { "website":"GameStop", "date":"12/10/2013", "price":"14.99" }, { "website":"GameStop", "date":"12/10/2013", "price":"49.99" } ] }, { "date":"1/12/2014", "confirmation":"7865435", "items": [ { "website":"GameStop", "date":"1/12/2014", "price":"29.99" }, { "website":"GameStop", "date":"1/12/2014", "price":"14.99" } ] }, { "date":"4/30/2014", "confirmation":"724244", "items": [ { "website":"Blizzard Hearthstone Store:", "date":"4/30/2014", "price":"24.99" }, { "website":"Blizzard Hearthstone Store", "date":"4/30/2014", "price":"39.99" }, { "website":"Blizzard Hearthstone Store", "date":"4/30/2014", "price":"29.99" } ] } ] }';
	postData(data);
}

function postData(data) {
//    $.post("http://localhost:3000/submit.json", data, function(data) {
    $.post("http://pacific-caverns-6327.herokuapp.com/submit.json", data, function(data) {
      console.log("GOOD: Posted DATA to URL");
      alert("SIMULATION COMPLETE. Data has been sent to the database.");
    });
}
