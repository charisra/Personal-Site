$(document).ready(function(){
	$('.nav a').on('click',function(){
		$('.nav a').removeClass('active');
		$(this).addClass('active')
	});
	$('.project').hover(function(){
		$('.thumbnail').css('opacity',0.2);
		$('#overflow-btn').css('opacity',1);
	},
	function(){
		$('.thumbnail').css('opacity',1);
		$('#overflow-btn').css('opacity',0);
});
	});
