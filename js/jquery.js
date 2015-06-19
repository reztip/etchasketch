/*var xCols = 0;
var yCols = 0;
var gridWidth =  600; //in px
var gridHeight = 600; //in px
var count = 0;*/
$(document).ready( function() {

  var resetGrid = function(rows, cols){
  	$('.gridcontainer').fadeOut('fast');
  	$('.gridcontainer').empty();
  	$('.gridcontainer').fadeIn('slow');
  };

  resetGrid(16,16);
  $('.gridcontainer').click(function() {

  	$(this).add("<div class='square'>ok</div>");
  

  });

  $('.gridcontainer').on('hover', '.square', function(){

  	$(this).css('background-color', 'black');
  	$(this).fadeIn();
  });


  $('button').on('click', function(){
  	var rows = +prompt("how many rows do you want?");
  	var cols = +prompt("how many columns do you want?");
  	resetGrid(rows,cols);
  });

  

});
