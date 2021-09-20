---
---

//MAP GENERATOR

//BEGIN onload function
window.onload = function() {

	var w = 670;
	var h = 700;
	var step = 20;

	var canvas = document.getElementById("mapgen-canvas");
	canvas.width = w;
	canvas.height = h;
	
	const ctx = canvas.getContext("2d");

	drawGrid(ctx, w, h, step);
	
}
//END onload function

//BEGIN grid draw function
function drawGrid(ctx, w, h, step){
		// horizontal grid lines
		ctx.beginPath();
		for (var x=0;x<=w;x+=step) {
			ctx.moveTo(x+0.5, 0);
			ctx.lineTo(x+0.5, h);
		}
		// set the color of the line
		ctx.strokeStyle = 'rgb(190,190,190)';
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
		ctx.strokeStyle = 'rgb(190,190,190)';
		// just for fun
		ctx.lineWidth = 1;
		// stroke once
		ctx.stroke();
}
//END grid draw function

//BEGIN map size dropdown toggle
function toggleMapType() {
	var mapsize = document.getElementById("mapgen-size-dropdown").value;
	console.log(mapsize);
	//toggle depending on selected value
	if (mapsize == 1) {
		document.getElementById("mapgen-tower-choice").style.display = "none";
		document.getElementById("mapgen-cave-choice").style.display = "";
	}
	/*
	if (mapsize == 2) {
		document.getElementById("mapgen-tower-choice").style.display = ""; 
		document.getElementById("mapgen-cave-choice").style.display = "";
	}
	if (mapsize == 4) {
		document.getElementById("mapgen-tower-choice").style.display = "";
		document.getElementById("mapgen-cave-choice").style.display = "none";
	}
	*/
}
//END map size dropdown toggle

//BEGIN climate selection
function isTemperature(value, climate) {
	return value == climate;
}
//END climate selection

//BEGIN map generation process
function submitMapGen() {
	//CLEAR canvas
	var canvas = document.getElementById("mapgen-canvas");
	const ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	//BEGIN drawing a room
	var mapsize = document.getElementById("mapgen-size-dropdown").value;
	//drawGrid(ctx, canvas.width, canvas.height, 30);
	
	//lets draw a rectangular room
	var minrmdim = 10;
	var maxrmdim = 100;
	var x_rmdim = minrmdim + Math.floor(Math.random()*(maxrmdim-minrmdim));
	var y_rmdim = minrmdim + Math.floor(Math.random()*(maxrmdim-minrmdim));
	var mapgenpadding = canvas.width * 0.05;
	
	var x_step = (canvas.width - (2*mapgenpadding)) / x_rmdim;
	var y_step = (canvas.height - (2*mapgenpadding)) / y_rmdim;
	
	//select limiting dimension
	if (x_step < y_step) {
		var step = x_step;
	} else {
		var step = y_step;
	}
	
	ctx.beginPath();
	ctx.rect(mapgenpadding, mapgenpadding, x_rmdim*step, y_rmdim*step);
	// set the color of the line
	ctx.strokeStyle = 'rgb(0,0,0)';
	ctx.lineWidth = 2;
	// the stroke will actually paint the current path
	ctx.stroke();
	//END drawing a room
	
	var step5 = 5*step;
	drawGrid(ctx, canvas.width, canvas.height, step5);
	
	x_rmctr = mapgenpadding + ((x_rmdim/2) * step);
	y_rmctr = mapgenpadding + ((y_rmdim/2) * step);
	ctx.font = '48px serif';
	ctx.strokeStyle = "#000";
	ctx.fillStyle = "#000";
	ctx.fillText('A', x_rmctr-24, y_rmctr-24);

	// load monsterlist as an object
	var monsterlist = {{ site.data.d20srd-monsters.monsters | jsonify }};

	var mnstramt = document.getElementById("monster-amount").value;
	document.getElementById("mapgen-results").innerHTML = "Your room is " + x_rmdim + " ft. by " + y_rmdim + " ft.<br/>";
	document.getElementById("mapgen-results").innerHTML += "Room A contains :<br/>";
	
	// find a monster that obeys environment rules
	var mnstrclimate = document.getElementById("mapgen-climate").value;
	
	while (true) {
		var random_number = Math.floor(Math.random()*monsterlist.length);
		var mymonster = monsterlist[random_number];
		console.log(mymonster.environment);
		if ((mymonster.environment).includes(mnstrclimate)) {
			document.getElementById("mapgen-results").innerHTML += mymonster.name + ": ";
			document.getElementById("mapgen-results").innerHTML += "&#128279; <a href=\"" + mymonster.d20srd_url + "\" target=\"_blank\" rel=\"noopener noreferrer\">d20 SRD</a>";
			return false;
		}
	}
	
}
//END map generation process


