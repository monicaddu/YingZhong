/* A walkthrough example of writing
code to create an abstract site based on */


var red = "#FF0000";
var yellow = "#FFFF00";

var colorPalette = [red, yellow];

console.log(Math.random());
console.log(Math.floor(Math.random()));
console.log(Math.floor(Math.random() * 5));

// This is a test to see if my file is linked to my html
console.log("Hello World!");

// change the page background color to green
$("body").css("background-color", colorPalette[1]);

$("#box-container div").click(function(){
	var randomWidth = Math.random() * 300;
	var randomHeight= Math.random() * 300;
	$(this).css("width",randomWidth).css("width",randomHeight);
});