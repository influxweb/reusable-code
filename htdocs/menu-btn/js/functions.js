var win = $(window),
	doc = $(document),
	body = $('body'),
	$self = $(this);

$(function(){

	// Animated Menu BTN Trigger
	$('.menu-btn').click(function(e){
		e.preventDefault();
		$(this).toggleClass('is-active');
	});
		
});