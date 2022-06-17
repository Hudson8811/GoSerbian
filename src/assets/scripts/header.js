'use strict';
$(document).ready(function() {
	$('.js-menu-toogle').on('click',function (){
		event.preventDefault();
		$(this).toggleClass('active');
		$('.header__row').toggleClass('active');
		$('body').toggleClass('menu-opened');
	});
});
