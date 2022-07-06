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


	let lastScrollTop = 0;
	let delta = 5;
	let header = $('.header');
	let navbarHeight =header.outerHeight();

	$(window).on('resize',function(){
		if (!header.hasClass('header--fixed')){
			navbarHeight =header.outerHeight();
		}
	});

	$(window).scroll(function(event){
		let st = $(this).scrollTop();

		if (st > navbarHeight){
			header.addClass('header--fixed');
		} else {
			if (!header.hasClass('header--show')){
				header.removeClass('header--fixed header--show header--animate');
			} else {
				if (st === 0){
					header.removeClass('header--fixed header--show header--animate');
				}
			}
		}

		if (st > lastScrollTop && st > navbarHeight){
			header.removeClass('header--show');
		} else {
			if (st > navbarHeight){
				if(st + $(window).height() < $(document).height()) {
					header.addClass('header--animate header--show');
				}
			}
		}
		header.on('transitionend',function (){
			if (!$(this).hasClass('header--show')){
				$(this).removeClass('header--animate');
			}
		});

		lastScrollTop = st;
	});
});
