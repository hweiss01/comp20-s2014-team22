
function hello(){

	var ctx = document.getElementById("chart");

	if(!ctx)
		{console.log('Canvas not found.');}
	else{ 
		if(!ctx.getContext)
			{console.log('Context not supported');}
		else{
			var context = ctx.getContext('2d');

			
			labels = [];
			data1 = [];


			table = (document.getElementById("table"));
			var height = table.rows.length;

			
			for(var i = 1; i < height; i++){

					labels.push(table.rows[i].cells[1].innerHTML);
					data1.push(parseFloat(table.rows[i].cells[2].innerHTML));

				}

			

			var myNewChart = new Chart(context);
			var data = {
				labels : labels,
				datasets : [
					{
						fillColor : "rgba(220,220,220,0.5)",
						strokeColor : "rgba(220,220,220,1)",
						pointColor : "rgba(220,220,220,1)",
						pointStrokeColor : "#fff",
						data : data1
					}
				]
			}
		new Chart(context).Line(data);

		}
	}

}
