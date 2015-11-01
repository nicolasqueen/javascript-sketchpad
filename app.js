$(document).ready(function() {
	for (var x = 0; x < 64; x++) {
		for (var i=0; i<64; i++){
			var grid = $('<div class="gridSquares"></div>');
			grid.appendTo('#container');
		}
	}

	$(".gridSquares").hover(function() {
		/* Stuff to do when the mouse enters the element */
		$(this).addClass('gridChanged')
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(this).removeClass('gridSquares')
	});

	$("#reset").click(function(){
		$(".gridChanged").addClass('gridSquares').removeClass('gridChanged');
		console.log("Hi!")
	});

});


