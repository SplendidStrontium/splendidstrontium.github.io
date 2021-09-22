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
	
	//lets draw a rectangular room
	//table of probabilities approximates a bellcurve for most common room sizes
	var rmsize_prob = [
		[ 5,  2],  //2
		[10,  8],  //6
		[15, 20],  //12
		[20, 38],  //18
		[25, 51],  //13
		[30, 59],  //8
		[35, 65],  //6
		[40, 70],  //5
		[45, 75],  //5
		[50, 79],  //4
		[55, 83],  //4
		[60, 86],  //3
		[65, 89],  //3
		[70, 92],  //3
		[75, 94],  //2
		[80, 96],  //2
		[85, 98],  //2
		[90, 99],  //1
		[95, 100]  //1
	]
	
	var ceiling_prob = [
		[ 5, 15],  //15
		[10, 39],  //24
		[15, 69],  //30
		[20, 83],  //12
		[25, 89],  //6
		[30, 92],  //3
		[35, 94],  //2
		[40, 95],  //1
		[45, 96],  //1
		[50, 97],  //1
		[55, 98],  //1
		[60, 99],  //1
		[65, 100]  //1
	]
	
	//select the x dimension
	var weighted_room = Math.random()*100;
	for (let i=0; i<rmsize_prob.length; i++){
		if (rmsize_prob[i][1] >= weighted_room) {
			var x_rmdim = rmsize_prob[i][0];
			break; 
		}
	}
	x_rmdim += Math.floor(Math.random()*5);

	//select the y dimension
	weighted_room = Math.random()*100;
	for (let i=0; i<rmsize_prob.length; i++){
		if (rmsize_prob[i][1] >= weighted_room) {
			var y_rmdim = rmsize_prob[i][0];
			break; 
		}
	}
	y_rmdim += Math.floor(Math.random()*5);
	
	//select the z dimension
	weighted_room = Math.random()*100;
	for (let i=0; i<ceiling_prob.length; i++){
		if (ceiling_prob[i][1] >= weighted_room) {
			var z_rmdim = ceiling_prob[i][0];
			break;
		}
	}
	z_rmdim += Math.floor(Math.random()*5);
	
	var mapgenpadding = canvas.width * 0.05;
	var x_step = (canvas.width - (2*mapgenpadding)) / x_rmdim;
	var y_step = (canvas.height - (2*mapgenpadding)) / y_rmdim;
	
	//select limiting dimension
	if (x_step < y_step) {
		var step = x_step;
	} else {
		var step = y_step;
	}
	
	//draw the room
	ctx.beginPath();
	ctx.rect(mapgenpadding, mapgenpadding, x_rmdim*step, y_rmdim*step);
	//set the color of the line
	ctx.strokeStyle = 'rgb(0,0,0)';
	ctx.lineWidth = 2;
	//the stroke will actually paint the current path
	ctx.stroke();
	
	//lets draw a door
	//a door is equally likely on any wall
	var door_probtotal = x_rmdim + y_rmdim;
	var door_prob = Math.random()*door_probtotal;
	if (door_prob <= x_rmdim) {
		var door_loc = 'x';
	} else {
		var door_loc = 'y';
	}
	var door_loc_array = [];
	if (door_loc == 'x') {
		for (let i=0; i<=(x_rmdim-5); i++) { 
			door_loc_array.push([i,y_rmdim]);
		}
		door_prob = Math.floor(Math.random()*door_loc_array.length);
		var mydoorloc = door_loc_array[door_prob];
		ctx.beginPath();
		ctx.moveTo(mapgenpadding+(mydoorloc[0]*step),mapgenpadding+(y_rmdim*step)-10);
		ctx.lineTo(mapgenpadding+(mydoorloc[0]*step),mapgenpadding+(y_rmdim*step)+10);
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(mapgenpadding+(mydoorloc[0]*step)+(5*step),mapgenpadding+(y_rmdim*step)-10);
		ctx.lineTo(mapgenpadding+(mydoorloc[0]*step)+(5*step),mapgenpadding+(y_rmdim*step)+10);
		ctx.stroke();
	} else {
		for (let i=0; i<=(y_rmdim-5); i++) {
			door_loc_array.push([x_rmdim,i]);
		}
		door_prob = Math.floor(Math.random()*door_loc_array.length);
		var mydoorloc = door_loc_array[door_prob];
		ctx.beginPath();
		ctx.moveTo(mapgenpadding+(x_rmdim*step)-10,mapgenpadding+(mydoorloc[1]*step));
		ctx.lineTo(mapgenpadding+(x_rmdim*step)+10,mapgenpadding+(mydoorloc[1]*step));
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(mapgenpadding+(x_rmdim*step)-10,mapgenpadding+(mydoorloc[1]*step)+(5*step));
		ctx.lineTo(mapgenpadding+(x_rmdim*step)+10,mapgenpadding+(mydoorloc[1]*step)+(5*step));
		ctx.stroke();
	}
	
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
	document.getElementById("mapgen-results").innerHTML += "Your room has a ceiling "+z_rmdim+" ft. high.<br/>";
	document.getElementById("mapgen-results").innerHTML += "Room A contains:<br/>";
	
	//find a monster that obeys environment rules
	var mnstrclimate = document.getElementById("mapgen-climate").value;
	//as well as size rules
	if (x_rmdim<y_rmdim && x_rmdim<z_rmdim) {
		var limiting_dim = x_rmdim;
	} 
	if (y_rmdim<x_rmdim && y_rmdim<z_rmdim) {
		var limiting_dim = y_rmdim;
	} else {
		var limiting_dim = z_rmdim;
	}
	
	while (true) {
		var random_number = Math.floor(Math.random()*monsterlist.length);
		var mymonster = monsterlist[random_number];
		//select out monsters that are too large
		var maxmnstrsize;
		if (mymonster.size_category.includes("colossal")) {
			maxmnstrsize = 64;
		} else if (mymonster.size_category.includes("gargantuan")) {
			maxmnstrsize = 32;
		} else if (mymonster.size_category.includes("huge")) {
			maxmnstrsize = 16;
		} else if (mymonster.size_category.includes("large")) {
			maxmnstrsize = 8;
		} else if (mymonster.size_category.includes("medium")) {
			maxmnstrsize = 4;
		} else if (mymonster.size_category.includes("small")) {
			maxmnstrsize = 2;
		} else if (mymonster.size_category.includes("tiny")) {
			maxmnstrsize = 1;
		} else {
			maxmnstrsize= 0.5;
		}
		if (maxmnstrsize > limiting_dim) {
			console.log('your monster is too big!');
			continue;
		}
		if ((mymonster.environment).includes(mnstrclimate)) {
			document.getElementById("mapgen-results").innerHTML += mymonster.name + ": ";
			document.getElementById("mapgen-results").innerHTML += "&#128279; <a href=\"" + mymonster.d20srd_url + "\" target=\"_blank\" rel=\"noopener noreferrer\">d20 SRD</a>";
			return false;
		}
	}
	
}
//END map generation process


