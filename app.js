$(function(){
	$(window).scroll(function(){
		if(($(this).scrollTop()>60) && ($(window).width()>1000)){
			$('#Navbar').addClass('fixed');
		}
		else if(($(this).scrollTop()<60) && ($(window).width()>1000)){
			$('#Navbar').removeClass('fixed');
		}
	});
});

$(function(){
	$(window).scroll(function(){
		if(($(this).scrollTop()>85) && ($(window).width()<1000)) {
			$('#Navbar').addClass('fixed');
		}
		else if(($(this).scrollTop()<85) && ($(window).width()<1000)) {
			$('#Navbar').removeClass('fixed');
		}
	});
});

$(function(){
	$(window).scroll(function(){
		if(($(this).scrollTop()>60) && ($(window).width()<383)) {
			$('#Navbar').addClass('fixed');
		}
		else if(($(this).scrollTop()<60) && ($(window).width()<383)) {
			$('#Navbar').removeClass('fixed');
		}
	});
});

$(document).ready(main);