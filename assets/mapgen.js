---
---

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
	// load monsterlist as an object
	var monsterlist = {{ site.data.d20srd-monsters.monsters | jsonify }};

	var mnstramt = document.getElementById("monster-amount").value;
	document.getElementById("mapgen-results").innerHTML = "You generated " + mnstramt + " monster(s)";
	
	//document.getElementById("mapgen-results").innerHTML = monsters;
	
	for (var n=1;n<=mnstramt;n+=1){
		var random_number = Math.floor(Math.random()*monsterlist.length);
		var mymonster = monsterlist[random_number];
		document.getElementById("mapgen-results").innerHTML += "<br>" + mymonster.name + ": ";
		document.getElementById("mapgen-results").innerHTML += "<a href=\"" + mymonster.d20srd_url + "\">d20 SRD</a>";
	}
}



