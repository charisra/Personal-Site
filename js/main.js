$(document).ready(function(){
	$('.nav a').on('click',function(){
		$('.nav a').removeClass('active');
		$(this).addClass('active')
	});
});