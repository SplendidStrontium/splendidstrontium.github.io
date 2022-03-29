---
---

//FPMC CHATBOT

//
//BEGIN onload function
//
window.onload = function() {
	var mychatbox = document.getElementById("chatbot-txta");
	
	mychatbox.value = "Press [Boot Up!] to begin.";
	document.getElementById("chatbot-uplvlbtn").style.display = "none";
}
//END onload function

//
//BEGIN bootup greeting
//
function chatbotbootup() {
	var mychatbox = document.getElementById("chatbot-txta");

	document.getElementById("chatbot-btnA").style.display = "inline";
	document.getElementById("chatbot-btnB").style.display = "inline";
	document.getElementById("chatbot-btnC").style.display = "none";
	document.getElementById("chatbot-btnD").style.display = "none";
	document.getElementById("chatbot-bootupbtn").style.display = "none";
	document.getElementById("chatbot-uplvlbtn").style.display = "none";
	mychatbox.rows = "10";
	mychatbox.value = "Hello! Welcome to our Chatbot!\n\nDevelopment in progress as of March 29, 2022.\n\nWould you like to speak to FEMPUTER or Manchine?\n\nA. FEMPUTER\nB. Manchine";
	
	
	document.getElementById("chatbot-btnA").setAttribute('onclick','avael()');
	document.getElementById("chatbot-btnB").setAttribute('onclick','cedric()');
}
//END bootup greeting

//
//FUNCTIONS ARE ALPHABETICAL FROM HERE ON OUT
//

//
//BEGIN AUTHOR
//
function author() {
	var mychatbox = document.getElementById("chatbot-txta");
	
	document.getElementById("chatbot-btnA").style.display = "none";
	document.getElementById("chatbot-btnB").style.display = "none";
	document.getElementById("chatbot-btnC").style.display = "none";
	document.getElementById("chatbot-btnD").style.display = "none";
	document.getElementById("chatbot-uplvlbtn").style.display = "inline";
	mychatbox.rows= "9";
	mychatbox.value = "The author resides in NYC with her husband, two kids, and two cats. She enjoys the Oxford comma. She also enjoys mushrooms, chevre, and crispy cabbage. She went to Columbia where she studied Astronomy with some forays into world languages, computer programming, and creative writing.";
	
	document.getElementById("chatbot-uplvlbtn").setAttribute("onclick","avael()");
}
//END AUTHOR 

//
//BEGIN AVAEL
//
function avael() {
	var mychatbox = document.getElementById("chatbot-txta");
	
	document.getElementById("chatbot-btnA").style.display = "inline";
	document.getElementById("chatbot-btnB").style.display = "inline";
	document.getElementById("chatbot-btnC").style.display = "inline";
	document.getElementById("chatbot-btnD").style.display = "none";
	document.getElementById("chatbot-uplvlbtn").style.display = "inline";
	mychatbox.rows = "11";
	mychatbox.value = "Hello there, it's delightful to make your acquaintance. I'm filling in for FEMPUTER today. That means I've saved you from the all caps crusade.\n\nWhat would you like to do today?\n\nA. Learn more about FP&MC\nB. Learn more about other nan.nyc works\nC. Learn more about the author";
	
	document.getElementById("chatbot-btnA").setAttribute("onclick","fpmc()");
	document.getElementById("chatbot-btnB").setAttribute("onclick","otherworks()");
	document.getElementById("chatbot-btnC").setAttribute("onclick","author()");
	document.getElementById("chatbot-uplvlbtn").setAttribute("onclick","chatbotbootup()");
}
//END AVAEL

//
//BEGIN CEDRIC
//
function cedric() {
	var mychatbox = document.getElementById("chatbot-txta");
	
	document.getElementById("chatbot-btnA").style.display = "inline";
	document.getElementById("chatbot-btnB").style.display = "inline";
	document.getElementById("chatbot-btnC").style.display = "none";
	document.getElementById("chatbot-btnD").style.display = "none";
	document.getElementById("chatbot-uplvlbtn").style.display = "inline";
	mychatbox.rows = "6";
	mychatbox.value = "Hi all. Cedric here. What can I do for you?\n\nA. Ask about characters\nB. Explore common complaints";
	
	document.getElementById("chatbot-btnA").setAttribute("onclick","fpmcchars()");
	document.getElementById("chatbot-btnB").setAttribute("onclick","fpmccomplaints()");
	document.getElementById("chatbot-uplvlbtn").setAttribute("onclick","chatbotbootup()");
}
//END CEDRIC

//
//BEGIN FPMC
//
function fpmc() {
	var mychatbox = document.getElementById("chatbot-txta");
	
	document.getElementById("chatbot-btnA").style.display = "none";
	document.getElementById("chatbot-btnB").style.display = "none";
	document.getElementById("chatbot-btnC").style.display = "none";
	document.getElementById("chatbot-btnD").style.display = "none";
	mychatbox.rows = "5";
	mychatbox.value = "FP&MC is a writing project that began with a game of the Sims 4. It boils down to Vampires VS. Mages VS. Aliens but has become a whole lot more.";
	
	document.getElementById("chatbot-uplvlbtn").setAttribute("onclick","avael()");
}
//END FPMC

//
//BEGIN FPMC CHARACTERS
//
function fpmcchars() {
	var mychatbox = document.getElementById("chatbot-txta");
	
	document.getElementById("chatbot-btnA").style.display = "inline";
	document.getElementById("chatbot-btnB").style.display = "none";
	document.getElementById("chatbot-btnC").style.display = "none";
	document.getElementById("chatbot-btnD").style.display = "none";
	mychatbox.rows = "6";
	mychatbox.value = "How would you like to organize the characters? There's a lot of 'em.\n\nA. Alphabetically";
	
	document.getElementById("chatbot-btnA").setAttribute("onclick","fpmccharsalphabet()");
	document.getElementById("chatbot-uplvlbtn").setAttribute("onclick","cedric()");
}
//END FPMC CHARACTERS

//
//BEGIN FPMC CHARACTERS: ALPHABETICALLY
//
function fpmccharsalphabet(){
	var mychatbox = document.getElementById("chatbot-txta");
	
	document.getElementById("chatbot-btnA").style.display = "none";
	document.getElementById("chatbot-btnB").style.display = "none";
	document.getElementById("chatbot-btnC").style.display = "none";
	document.getElementById("chatbot-btnD").style.display = "none";
	mychatbox.rows = "13";
	mychatbox.value = "If you navigate to the author's GitHub account (username: SplendidStrontium), there is an alphabetical list of characters in the wiki for the website's repository. A URL for this location: https://github.com/SplendidStrontium/splendidstrontium.github.io/wiki/FPMC-Characters-and-Titles\n\nThis is a great way to get an overview of the current cast and includes titles and nicknames as well as everyone's standard first and last name.";
	
	document.getElementById("chatbot-uplvlbtn").setAttribute("onclick","fpmcchars()");
}
//END FPMC CHARACTERS: ALPHABETICALLY

//
//BEGIN FPMC COMPLAINTS
//
function fpmccomplaints() {
	var mychatbox = document.getElementById("chatbot-txta");
	
	document.getElementById("chatbot-btnA").style.display = "inline";
	document.getElementById("chatbot-btnB").style.display = "inline";
	document.getElementById("chatbot-btnC").style.display = "inline";
	document.getElementById("chatbot-btnD").style.display = "inline";
	mychatbox.rows = "13";
	mychatbox.value = "What is your most pressing complaint about FPMC? Please be advised that this response doesn't send to the author; any complaint you'd like to convey will need to be sent via the usual channels.\n\nA. Too short\nB. Too long\nC. Weird formatting\nD. Too many characters";
	
	document.getElementById("chatbot-btnA").setAttribute("onclick","fpmccompltooshort()");
	document.getElementById("chatbot-btnB").setAttribute("onclick","fpmccompltoolong()");
	document.getElementById("chatbot-btnC").setAttribute("onclick","fpmccomplformat()");
	document.getElementById("chatbot-btnD").setAttribute("onclick","fpmccompltoomanychars()");
	document.getElementById("chatbot-uplvlbtn").setAttribute("onclick","cedric()");
}
//END FPMC COMPLAINTS

//
//BEGIN FPMC COMPLAINT: FORMATTING
//
function fpmccomplformat(){
	var mychatbox = document.getElementById("chatbot-txta");
	
	document.getElementById("chatbot-btnA").style.display = "none";
	document.getElementById("chatbot-btnB").style.display = "none";
	document.getElementById("chatbot-btnC").style.display = "none";
	document.getElementById("chatbot-btnD").style.display = "none";
	mychatbox.rows = "14";
	mychatbox.value = "I would describe the format of the work as a hybrid between a screenplay and a typical novel. It has undergone a number of progressions -- you may see hints of previous versions in some of the older pieces. I needed something that worked for my dialogue-heavy writing style and was within the freedoms and limitations of Markdown. What I settled on uses quote-blocks for speech and headers for speaker/location data. Italics are reserved for internal monologue and character commentary.";
	
	document.getElementById("chatbot-uplvlbtn").setAttribute("onclick","fpmccomplaints()");
}
//END FPMC COMPLAINT: FORMATTING

//
//BEGIN FPMC COMPLAINT: TOO LONG
//
function fpmccompltoolong(){
	var mychatbox = document.getElementById("chatbot-txta");
	
	document.getElementById("chatbot-btnA").style.display = "none";
	document.getElementById("chatbot-btnB").style.display = "none";
	document.getElementById("chatbot-btnC").style.display = "none";
	document.getElementById("chatbot-btnD").style.display = "none";
	mychatbox.rows = "8";
	mychatbox.value = "Each individual piece is designed to be read in five to fifteen minutes. Together they sprawl days, weeks, centuries. I advise you to read whatever sounds interesting and the rest will come with time. The characters like to talk.";
	
	document.getElementById("chatbot-uplvlbtn").setAttribute("onclick","fpmccomplaints()");
}
//END FPMC COMPLAINT: TOO LONG

//
//BEGIN FPMC COMPLAINT: TOO MANY CHARACTERS
//
function fpmccompltoomanychars(){
	var mychatbox = document.getElementById("chatbot-txta");
	
	document.getElementById("chatbot-btnA").style.display = "none";
	document.getElementById("chatbot-btnB").style.display = "none";
	document.getElementById("chatbot-btnC").style.display = "none";
	document.getElementById("chatbot-btnD").style.display = "none";
	mychatbox.rows = "11";
	mychatbox.value = "I have been developing my writing style and favoring my creative whims rather than sticking to any specific rules about writing. I plan to pare down my introductions of new characters and work on developing the ones I have. It is reasonable to expect that a social network quickly gets larger the more individuals are added but I don't want to make the work forbidding for newcomers.";
	
	document.getElementById("chatbot-uplvlbtn").setAttribute("onclick","fpmccomplaints()");
}
//END FPMC COMPLAINT: TOO MANY CHARACTERS

//
//BEGIN FPMC COMPLAINT: TOO SHORT
//
function fpmccompltooshort(){
	var mychatbox = document.getElementById("chatbot-txta");
	
	document.getElementById("chatbot-btnA").style.display = "none";
	document.getElementById("chatbot-btnB").style.display = "none";
	document.getElementById("chatbot-btnC").style.display = "none";
	document.getElementById("chatbot-btnD").style.display = "none";
	mychatbox.rows = "16";
	mychatbox.value = "When I sit down to write, I try to aim for a particular number of lines for every individual piece. Sometimes it happens, sometimes it doesn't. I wish I had a more generous gift of gab but as with all things, I believe it will come with time and practice. Certainly anyone can talk at length if you find a topic about which they are passionate and knowledgeable; I try to steer myself in these directions so that I can fill my worlds out with detail. I also try not to repeat words and phrases ad nauseam, sometimes preferring omission to inclusion in cases of repetition, which results in a lower word count.";
	
	document.getElementById("chatbot-uplvlbtn").setAttribute("onclick","fpmccomplaints()");
}
//END FPMC COMPLAINT: TOO SHORT

//
//BEGIN HMSB
//
function hmsb(){
	var mychatbox = document.getElementById("chatbot-txta");
	
	document.getElementById("chatbot-btnA").style.display = "none";
	document.getElementById("chatbot-btnB").style.display = "none";
	document.getElementById("chatbot-btnC").style.display = "none";
	document.getElementById("chatbot-btnD").style.display = "none";
	mychatbox.value = "The other fiction worlds you may explore are Harmonic Mean and Sophie Blue. HM is a fantasy epic and SB is a sci-fi work about a robot. The menu in the upper-right provides a branching topic for each of the other areas in which the author works. Some of them may not have been updated terribly recently but no project has been completely shelved.";

	document.getElementById("chatbot-uplvlbtn").setAttribute("onclick","otherworks()");
}
//END HMSB

//
//BEGIN OTHERWORKS
//
function otherworks(){
	var mychatbox = document.getElementById("chatbot-txta");
	
	document.getElementById("chatbot-btnA").style.display = "inline";
	document.getElementById("chatbot-btnB").style.display = "inline";
	document.getElementById("chatbot-btnC").style.display = "none";
	document.getElementById("chatbot-btnD").style.display = "none";
	mychatbox.value = "The author has been playing World of Warcraft lately. Are you interested in that or something else?\n\nA. World of Warcraft\nB. Something else";
	
	document.getElementById("chatbot-btnA").setAttribute("onclick","wow()");
	document.getElementById("chatbot-btnB").setAttribute("onclick","hmsb()");
	document.getElementById("chatbot-uplvlbtn").setAttribute("onclick","avael()");
}

//END OTHERWORKS

//
//BEGIN WOW
//
function wow(){
	var mychatbox = document.getElementById("chatbot-txta");
	
	document.getElementById("chatbot-btnA").style.display = "none";
	document.getElementById("chatbot-btnB").style.display = "none";
	document.getElementById("chatbot-btnC").style.display = "none";
	document.getElementById("chatbot-btnD").style.display = "none";
	mychatbox.value = "Praise be to the Light!\n\nI started playing WoW in Burning Crusade and have played off-and-on to this day. I am primarily playing Alliance on Emerald Dream. I rebuke the term \"Retail\" and prefer to call it \"Modern\". I especially enjoy the Priest.";
	
	document.getElementById("chatbot-uplvlbtn").setAttribute("onclick","otherworks()");
}
//END WOW

