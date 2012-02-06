jQuery(function ($) {
	
var  $property = $('#property'),
	 $circle = $('.circle'),
	 $color = $('#color');

$('form').on('submit', function (e) {
	var color = $color.val();
	e.preventDefault();

	if (color) {
	  $circle.css($property.val(), color);
	}
});

	$('#hidebutton').on('click', function (e) {
	$circle.toggle("fast");
	});
});
