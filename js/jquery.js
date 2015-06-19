
var gridWidth =  600; //in px
var gridHeight = 600; //in px

$(document).ready( function() {
  var resetGrid = function(rows, cols){
  	var sqheight = gridHeight/rows - 2;
  	var sqwidth = gridWidth/cols - 2;
  	$('.square').css({'width' : sqwidth+'px', 'height': sqheight+'px'});
  	
  	$('.gridcontainer').fadeOut('fast');
  	$('.gridcontainer').empty();

 	for(var i = 0; i < rows; i++){
  		$('.gridcontainer').append('<div class="row"></div>');
  		for(var j = 0; j < cols; j++){
  			var sq = addSquare($('.gridcontainer').last());
  		}
  	}

  	$('.gridcontainer').fadeIn('slow');
  };

  var addSquare = function(elt){
  	elt.append("<div class='square'></div>");
  	return elt.last();
  };


  resetGrid(16,16);

  

  $('.square').on('mouseenter', function(){
  	var newColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);

    $(this).css('background-color', newColor);
  });


  $('button').on('click', function(){
  	var rows = +prompt("how many rows do you want?");
  	var cols = +prompt("how many columns do you want?");
  	resetGrid(rows,cols);
  });

  
});
