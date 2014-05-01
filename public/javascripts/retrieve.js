
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
			var insertflag = 0;

			
			for(var i = 1; i < height; i++){
				insertflag = 0;
				for(var j = 0; j < labels.length; j++){
					if (table.rows[i].cells[1].innerHTML == labels[j])
						{data1[j] = data1[j] + parseFloat(table.rows[i].cells[2].innerHTML);
							insertflag = 1;}
				}

				if(insertflag == 0)
					{
						labels.push(table.rows[i].cells[1].innerHTML);
						data1.push(parseFloat(table.rows[i].cells[2].innerHTML));
					}

				}

				labels.reverse();
				data1.reverse();

			

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
