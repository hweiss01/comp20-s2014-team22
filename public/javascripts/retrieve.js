console.log("yo");
function hello(){
	alert("hi");
	var ctx = document.getElementById("chart");
	if(!ctx)
		{console.log('Canvas not found.');}
	else{ 
		if(!canvas.getContext)
			{console.log('Context not supported');}
		else{
			var context = ctx.getContext('2d');
		}
	}

}

