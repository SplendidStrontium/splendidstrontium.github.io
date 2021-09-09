// MAP GENERATOR

window.onload = function() {

	var w = 800;
	var h = 600;
	var step = 20;

	var canvas = document.getElementById("mapgenCanvas");
	canvas.width = w;
	canvas.height = h;
	
	
	var ctx = canvas.getContext("2d");

	var drawGrid = function(ctx, w, h, step){
		// horizontal grid lines
		ctx.beginPath();
		for (var x=0;x<=w;x+=step) {
			ctx.moveTo(x+0.5, 0);
			ctx.lineTo(x+0.5, h);
		}
		// set the color of the line
		ctx.strokeStyle = 'rgb(150,150,150)';
		ctx.lineWidth = 1;
		// the stroke will actually paint the current path
		ctx.stroke();
		
		// vertical grid lines
		ctx.beginPath();
		for (var y=0;y<=h;y+=step) {
			ctx.moveTo(0, y+0.5);
			ctx.lineTo(w, y+0.5);
		}
		// set the color of the line
		ctx.strokeStyle = 'rgb(150,150,150)';
		// just for fun
		ctx.lineWidth = 1;
		// stroke once
		ctx.stroke();
	
	};

	drawGrid(ctx, w, h, step);

}

function submitMapGen() {
	//var monsters = {{ site.data.monsters.monsters | jsonify }};
	var resultsdetail = document.getElementById("mapgen-results");
	var mnstramt = document.getElementById("monster-amount").value;
	var resultsdetailline1 = "You generated " + mnstramt + " monster(s)";
	
	document.getElementById("mapgen-results").innerHTML = resultsdetailline1;
	//document.getElementById("mapgen-results").innerHTML = monsters;
}



