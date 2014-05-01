
function hello(){

	var ctx = document.getElementById("chart");
	console.log(table);
	//console.log(document.getElementById("price").innerHTML);
	if(!ctx)
		{console.log('Canvas not found.');}
	else{ 
		if(!ctx.getContext)
			{console.log('Context not supported');}
		else{
			var context = ctx.getContext('2d');
			console.log(ctx);
			console.log(context);

			//Purchase = ['{"website":"Amazon", "date":"1/12/14", "price":50}', '{"website":"Ebay", "date":"1/13/14", "price":70}'];

			labels = [];
			data1 = [];


			table = (document.getElementById("table"));
			var height = table.rows.length;

			
			for(var i = 1; i < height; i++){

					console.log(table.rows[i].cells[1].innerHTML);
					console.log(table.rows[i].cells[2].innerHTML);
					labels.push(table.rows[i].cells[1].innerHTML);
					data1.push(table.rows[i].cells[2].innerHTML);

				}
				
			/*Purchase.map (function (str) {
				datum = JSON.parse(str);
				labels.push(datum.date);
				data1.push(datum.price);
			});
*/


			var myNewChart = new Chart(context);
			var data = {
				labels : labels,
				datasets : [
					{
						fillColor : "rgba(220,220,220,0.5)",
						strokeColor : "rgba(220,220,220,1)",
						//pointColor : "rgba(220,220,220,1)",
						//pointStrokeColor : "#fff",
						data : data1
					}
				]
			}
		new Chart(context).Bar(data);

		}
	}

}
