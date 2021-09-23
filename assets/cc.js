// CONCENTRIC CIRCLES

window.onload = function() {
	
	var w = 1500;
	var h = 1500;
	var x_ctr = w/2;
	var y_ctr = h/2;

	var canvas = document.getElementById("cc-canvas");
	canvas.width = w;
	canvas.height = h;
	
	const ctx = canvas.getContext("2d");

	//draw month markers
	//x dimension
	ctx.beginPath();
	ctx.setLineDash([10,20]);
	ctx.strokeStyle = '#aaa';
	ctx.moveTo(0,y_ctr);
	ctx.lineTo(w,y_ctr);
	ctx.stroke();
	
	//label the x dimension
	ctx.font = 'italic 30px Didot'
	ctx.fillStyle = '#777';
	ctx.fillText('July',   w*0.02, y_ctr-4);
	ctx.fillText('January',w*0.90, y_ctr-4);
	
	//y dimension
	ctx.beginPath();
	ctx.setLineDash([10,20]);
	ctx.strokeStyle = '#aaa';
	ctx.moveTo(x_ctr,0);
	ctx.lineTo(x_ctr,h);
	ctx.stroke();
	
	//label the y dimension
	ctx.save();
	
	ctx.rotate(-Math.PI/2);
	ctx.font = 'italic 30px Didot'
	ctx.fillStyle = '#777';
	ctx.fillText('April',   -(w*0.07),  y_ctr-4);
	ctx.fillText('October', -(w*0.98),  y_ctr-4);
	ctx.restore();
	
	//draw the sun as the center
	ctx.beginPath();
	ctx.arc(x_ctr,y_ctr,20,0,2*Math.PI);
	ctx.fillStyle = 'rgb(255, 165, 0)';
	ctx.fill();	

}

//BEGIN function to validate entry date
function validateDate(year) {
	if (year != 2000) {
		alert("Sorry; only capable of calculating in year 2000. Reloading...");
		location.reload();
	}
}
//END function to validate entry date

//BEGIN make API call
async function callHorizons(){
	const response = await fetch('https://ssd.jpl.nasa.gov/api/horizons.api?format=json&COMMAND=\'399\'&OBJ_DATA=\'YES\'&MAKE_EPHEM=\'YES\'&EPHEM_TYPE=\'OBSERVER\'&CENTER=\'500@0\'&START_TIME=\'2006-01-01\'&STOP_TIME=\'2006-01-20\'&STEP_SIZE=\'1%20d\'&QUANTITIES=\'1,9,20,23,24,29\'');
	const myJson = await response.json(); //extract JSON from the http response
	console.log(myJson);
}
//END make API call

//BEGIN function to submit and calculate planet locations
function submitCC() {
	var ccyear = document.getElementById("cc-year-txtfield").value;
	validateDate(ccyear);
	
	callHorizons();
}


//END function to submit and calculate planet locations



