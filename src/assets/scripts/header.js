'use strict';
$(document).ready(function() {
	$('.js-menu-toogle').on('click',function (){
		event.preventDefault();
		$(this).toggleClass('active');
		$('.header__row').toggleClass('active');
		$('body').toggleClass('menu-opened');
	});


	$("a").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){
				window.location.hash = hash;
			});

			$('.js-menu-toogle').removeClass('active');
			$('.header__row').removeClass('active');
			$('body').removeClass('menu-opened');
		}
	});
});
