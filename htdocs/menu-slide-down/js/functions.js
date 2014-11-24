var win = $(window),
	doc = $(document),
	body = $('body'),
	$self = $(this);

$(function(){

	$('.menu-btn').click(function(e){
		e.preventDefault();
		$('header').toggleClass('active');
		$('body').toggleClass('menuopen');
		var text = $(this).text();
		$(this).text(text == "Menu" ? "Close" : "Menu");
	});
		
});