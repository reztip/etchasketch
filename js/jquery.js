
var gridWidth =  600; //in px
var gridHeight = 600; //in px

var loaded = false;
$(document).ready( function() {
  
  var resetGrid = function(rows, cols){
  	var sqheight = gridHeight/rows;
  	var sqwidth = gridWidth/cols;
  	
  	
  	$('.gridcontainer').fadeOut('fast');
  	$('.gridcontainer').detach('.row');
  
 	for(var i = 0; i < rows; i++){
 		$('.gridcontainer').append('<div class="row"></div>');
  		for(var j = 0; j < cols; j++){
  			addSquare($('.gridcontainer').last());
  		
  		}
  	}
  	$('.square').css({'width' : sqwidth+'px', 'height': sqheight+'px', 'background-color': 'white'});
  	$('.gridcontainer').fadeIn('slow');
  };

  

  var addSquare = function(elt){
  	elt.append("<div class='square'></div>");
  };

  	if(!loaded){
	  resetGrid(64,64);
	  loaded = true;
	  resetGrid(16,16);
	}
  
  $('.square').on('mouseenter', function(){
  	var newColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);

    $(this).css('background-color', newColor);
  });



  $('button').on('click', function(){
  	var rows = +prompt("how many rows do you want? <=64");
  	var cols = +prompt("how many columns do you want? <=64");
  	resetGrid(rows,cols);
  });

  
});
