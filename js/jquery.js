var xCols = 0;
var yCols = 0;
var count = 0;
$(document).ready( function() {

  $('.gridcontainer').click(function() {

  	$(this).add("<div class='square'>ok</div>");
  	alert('square added');

  });

  $('button').click(function() {
    xCols = showSizePrompt("columns");
 	yCols = showSizePrompt('rows');
  });



});

var isNumeric = function() {
  return !isNaN(parseFloat(n)) && isFinite(n);
}


var showSizePrompt(messg){
	var y = prompt("How many "+ mssg + "do you want"?);
	while !isNumeric(y) y = prompt("Re enter a positive number");
	return y;
}