// FULL SPECTRUM

window.onload = function() {

	var fs_tiles = [
		["red",    "sm_circ",  0,  100],
		["red",    "sm_circ",  0,  101],
		["red",    "sm_circ",  0,  102],
		["red",    "lg_circ",  0,  103],
		["red",    "lg_circ",  0,  104],
		["red",    "lg_circ",  0,  105],
		["red",    "cross",    0,  106],
		["red",    "cross",    0,  107],
		["red",    "cross",    0,  108],
		["red",    "asterisk", 0,  109],
		["red",    "asterisk", 0,  110],
		["red",    "asterisk", 0,  111],
		["red",    "orbitals", 0,  112],
		["red",    "orbitals", 0,  113],
		["red",    "orbitals", 0,  114],
		["red",    "square",   0,  115],
		["red",    "square",   0,  116],
		["red",    "square",   0,  117],
		["red",    "twinkle",  0,  118],
		["red",    "twinkle",  0,  119],
		["red",    "twinkle",  0,  120],
		["orng",   "sm_circ",  0,  121],
		["orng",   "sm_circ",  0,  122],
		["orng",   "sm_circ",  0,  123],
		["orng",   "lg_circ",  0,  124],
		["orng",   "lg_circ",  0,  125],
		["orng",   "lg_circ",  0,  126],
		["orng",   "cross",    0,  127],
		["orng",   "cross",    0,  128],
		["orng",   "cross",    0,  129],
		["orng",   "asterisk", 0,  130],
		["orng",   "asterisk", 0,  131],
		["orng",   "asterisk", 0,  132],
		["orng",   "orbitals", 0,  133],
		["orng",   "orbitals", 0,  134],
		["orng",   "orbitals", 0,  135],
		["orng",   "square",   0,  136],
		["orng",   "square",   0,  137],
		["orng",   "square",   0,  138],
		["orng",   "twinkle",  0,  139],
		["orng",   "twinkle",  0,  140],
		["orng",   "twinkle",  0,  141],
		["yelo",   "sm_circ",  0,  142],
		["yelo",   "sm_circ",  0,  143],
		["yelo",   "sm_circ",  0,  144],
		["yelo",   "lg_circ",  0,  145],
		["yelo",   "lg_circ",  0,  146],
		["yelo",   "lg_circ",  0,  147],
		["yelo",   "cross",    0,  148],
		["yelo",   "cross",    0,  149],
		["yelo",   "cross",    0,  150],
		["yelo",   "asterisk", 0,  151],
		["yelo",   "asterisk", 0,  152],
		["yelo",   "asterisk", 0,  153],
		["yelo",   "orbitals", 0,  154],
		["yelo",   "orbitals", 0,  155],
		["yelo",   "orbitals", 0,  156],
		["yelo",   "square",   0,  157],
		["yelo",   "square",   0,  158],
		["yelo",   "square",   0,  159],
		["yelo",   "twinkle",  0,  160],
		["yelo",   "twinkle",  0,  161],
		["yelo",   "twinkle",  0,  162],
		["grn",    "sm_circ",  0,  163],
		["grn",    "sm_circ",  0,  164],
		["grn",    "sm_circ",  0,  165],
		["grn",    "lg_circ",  0,  166],
		["grn",    "lg_circ",  0,  167],
		["grn",    "lg_circ",  0,  168],
		["grn",    "cross",    0,  169],
		["grn",    "cross",    0,  170],
		["grn",    "cross",    0,  171],
		["grn",    "asterisk", 0,  172],
		["grn",    "asterisk", 0,  173],
		["grn",    "asterisk", 0,  174],
		["grn",    "orbitals", 0,  175],
		["grn",    "orbitals", 0,  176],
		["grn",    "orbitals", 0,  177],
		["grn",    "square",   0,  178],
		["grn",    "square",   0,  179],
		["grn",    "square",   0,  180],
		["grn",    "twinkle",  0,  181],
		["grn",    "twinkle",  0,  182],
		["grn",    "twinkle",  0,  183],
		["blu",    "sm_circ",  0,  184],
		["blu",    "sm_circ",  0,  185],
		["blu",    "sm_circ",  0,  186],
		["blu",    "lg_circ",  0,  187],
		["blu",    "lg_circ",  0,  188],
		["blu",    "lg_circ",  0,  189],
		["blu",    "cross",    0,  190],
		["blu",    "cross",    0,  191],
		["blu",    "cross",    0,  192],
		["blu",    "asterisk", 0,  193],
		["blu",    "asterisk", 0,  194],
		["blu",    "asterisk", 0,  195],
		["blu",    "orbitals", 0,  196],
		["blu",    "orbitals", 0,  197],
		["blu",    "orbitals", 0,  198],
		["blu",    "square",   0,  199],
		["blu",    "square",   0,  200],
		["blu",    "square",   0,  201],
		["blu",    "twinkle",  0,  202],
		["blu",    "twinkle",  0,  203],
		["blu",    "twinkle",  0,  204],
		["indgo",  "sm_circ",  0,  205],
		["indgo",  "sm_circ",  0,  206],
		["indgo",  "sm_circ",  0,  207],
		["indgo",  "lg_circ",  0,  208],
		["indgo",  "lg_circ",  0,  209],
		["indgo",  "lg_circ",  0,  210],
		["indgo",  "cross",    0,  211],
		["indgo",  "cross",    0,  212],
		["indgo",  "cross",    0,  213],
		["indgo",  "asterisk", 0,  214],
		["indgo",  "asterisk", 0,  215],
		["indgo",  "asterisk", 0,  216],
		["indgo",  "orbitals", 0,  217],
		["indgo",  "orbitals", 0,  218],
		["indgo",  "orbitals", 0,  219],
		["indgo",  "square",   0,  220],
		["indgo",  "square",   0,  221],
		["indgo",  "square",   0,  222],
		["indgo",  "twinkle",  0,  223],
		["indgo",  "twinkle",  0,  224],
		["indgo",  "twinkle",  0,  225],
		["vlt",    "sm_circ",  0,  226],
		["vlt",    "sm_circ",  0,  227],
		["vlt",    "sm_circ",  0,  228],
		["vlt",    "lg_circ",  0,  229],
		["vlt",    "lg_circ",  0,  230],
		["vlt",    "lg_circ",  0,  231],
		["vlt",    "cross",    0,  232],
		["vlt",    "cross",    0,  233],
		["vlt",    "cross",    0,  234],
		["vlt",    "asterisk", 0,  235],
		["vlt",    "asterisk", 0,  236],
		["vlt",    "asterisk", 0,  237],
		["vlt",    "orbitals", 0,  238],
		["vlt",    "orbitals", 0,  239],
		["vlt",    "orbitals", 0,  240],
		["vlt",    "square",   0,  241],
		["vlt",    "square",   0,  242],
		["vlt",    "square",   0,  243],
		["vlt",    "twinkle",  0,  244],
		["vlt",    "twinkle",  0,  245],
		["vlt",    "twinkle",  0,  246]
	]
	


	
}


//BEGIN hide instructions
function hideInstructions() {
	document.getElementById("fs-instructions").style.display = "none";
	document.getElementById("fs-hidden-instructions").style.display = "inline";
	
}

//END   hide instructions

//BEGIN show instructions
function showInstructions() {
	document.getElementById("fs-hidden-instructions").style.display = "none";
	document.getElementById("fs-instructions").style.display = "inline";
	
}

//END   show instructions





