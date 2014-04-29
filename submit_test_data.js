	//POST to server
    var data = 'data={ "user":"brian", "purchases": [ { "date":"1/1/2010", "confirmation":"9869758", "items": [ { "website":"Amazon", "date":"1/1/2010", "price":"15.97" }, { "website":"Ebay", "date":"1/1/2010", "price":"54.37" }, { "website":"Amazon", "date":"1/1/2010", "price":"10.21" } ] }, { "date":"12/26/2013", "confirmation":"2135009", "items": [ { "website":"Overstock", "date":"12/26/2013", "price":"68.53" } ] }, { "date":"12/10/2012", "confirmation":"6854403", "items": [ { "website":"Overstock", "date":"12/10/2012", "price":"100.02" } ] } ] }';

//    $.post("http://localhost:3000/submit.json", data, function(data) {
    $.post("http://pacific-caverns-6327.herokuapp.com/submit.json", data, function(data) {
      console.log("GOOD: Posted DATA to URL");
    });