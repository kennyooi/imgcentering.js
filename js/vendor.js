$(document).ready( function() {
	var headerHeight = $('#header').outerHeight(true);
	$('#wrapper').css('minHeight', $(window).height() - headerHeight);
	//alert(headerHeight);
	
	$('.buttonclose a').on('click', function() {
		$(this).parent().parent().fadeOut(1000);
		$(this).off('click');
		return false;
	});
});