---
---

//FPMC CHATBOT

//BEGIN onload function
window.onload = function() {
	var mychatbox = document.getElementById("chatbot-txta");
	
	mychatbox.value = "";
	document.getElementById("chatbot-uplvlbtn").style.display = "none";
}
//END onload function

//BEGIN bootup greeting
function chatbotbootup() {
	var mychatbox = document.getElementById("chatbot-txta");

	mychatbox.value = "Hello! Welcome to our Chatbot!\n\nDevelopment in progress as of March 9, 2022.\n\nWould you like to speak to FEMPUTER or Manchine?\n\nA. FEMPUTER\nB. Manchine";
	document.getElementById("chatbot-btnA").style.display = "inline";
	document.getElementById("chatbot-btnB").style.display = "inline";
	document.getElementById("chatbot-btnC").style.display = "none";
	document.getElementById("chatbot-uplvlbtn").style.display = "none";
	
	document.getElementById("chatbot-btnA").setAttribute('onclick','avael()');
	document.getElementById("chatbot-btnB").setAttribute('onclick','cedric()');
}
//END bootup greeting

//BEGIN AVAEL
function avael() {
	var mychatbox = document.getElementById("chatbot-txta");
	
	document.getElementById("chatbot-btnA").style.display = "inline";
	document.getElementById("chatbot-btnB").style.display = "inline";
	document.getElementById("chatbot-btnC").style.display = "inline";
	document.getElementById("chatbot-uplvlbtn").style.display = "inline";
	mychatbox.rows = "11";
	mychatbox.value = "Hello there, it's delightful to make your acquaintance. I'm filling in for FEMPUTER today. That means I've saved you from the all caps crusade.\n\nWhat would you like to do today?\n\nA. Learn more about FP&MC\nB. Learn more about other nan.nyc works\nC. Learn more about the author";
	
	document.getElementById("chatbot-btnA").setAttribute('onclick','fpmc()');
	document.getElementById("chatbot-btnB").setAttribute("onclick","otherworks()");
	document.getElementById("chatbot-btnC").setAttribute("onclick","author()");
	document.getElementById("chatbot-uplvlbtn").setAttribute("onclick","chatbotbootup()");
}
//END AVAEL

//BEGIN CEDRIC
function cedric() {
	var mychatbox = document.getElementById("chatbot-txta");
	
	document.getElementById("chatbot-btnA").style.display = "inline";
	document.getElementById("chatbot-btnB").style.display = "none";
	document.getElementById("chatbot-btnC").style.display = "none";
	document.getElementById("chatbot-uplvlbtn").style.display = "inline";
	mychatbox.value = "Hi all. Cedric here. What can I do for you?\n\nA. Ask about characters";
	
	document.getElementById("chatbot-uplvlbtn").setAttribute("onclick","chatbotbootup()");
}
//END CEDRIC

//BEGIN FPMC
function fpmc() {
	var mychatbox = document.getElementById("chatbot-txta");
	
	document.getElementById("chatbot-btnA").style.display = "none";
	document.getElementById("chatbot-btnB").style.display = "none";
	document.getElementById("chatbot-btnC").style.display = "none";
	mychatbox.value = "FP&MC is a writing project that began with a game of the Sims 4. It boils down to Vampires VS. Mages VS. Aliens but has become a whole lot more.";
}
//END FPMC

//BEGIN OTHERWORKS
function otherworks(){
	var mychatbox = document.getElementById("chatbot-txta");
	
	document.getElementById("chatbot-btnA").style.display = "inline";
	document.getElementById("chatbot-btnB").style.display = "inline";
	document.getElementById("chatbot-btnC").style.display = "none";
	mychatbox.value = "The author has been playing World of Warcraft lately. Are you interested in that or something else?\n\nA. World of Warcraft\nB. Something else";
}

//END OTHERWORKS

