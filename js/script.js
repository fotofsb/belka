$(document).ready(function(){
		function changeBoxColor(event) {
		$(this).toggleClass('selected');
	}
	$('.checked').on('click', changeBoxColor);
});