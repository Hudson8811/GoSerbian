import AOS from 'aos'
import 'aos/dist/aos.css'
'use strict';
$(document).ready(function() {
	AOS.init({
		once: true,
		offset: 250,
		duration: 500
	});


	if ($('.o-slider').length > 0){
		$('.o-slider__inner').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: false,
			nextArrow: '.o-slider__button--next',
			prevArrow: '.o-slider__button--prev',
			responsive: [
				{
					breakpoint: 1099,
					settings: {
						adaptiveHeight: true,
					}
				}
			]
		});

		$('.o-slider__inner').on('beforeChange', function(event, slick, currentSlide, nextSlide){
			setActiveStep(nextSlide);
		});

		function setActiveStep(nextSlide){
			let steps = $('.steps__inner .step');
			steps.removeClass('step--active step--current');
			for (var i = 0; i < nextSlide+1; i++) {
				steps.eq(i).addClass('step--active');
			}
			steps.eq(nextSlide).addClass('step--current');

			let left = steps.eq(nextSlide).position().left;
			let leftPadding = parseInt(steps.eq(nextSlide).parent().css('padding-left'));
			$('.steps').stop().animate({scrollLeft: (left - leftPadding)}, 300);
		}

		$(window).resize(function (){
			let left = $('.step--current').position().left;
			let leftPadding = parseInt($('.step--current').parent().css('padding-left'));
			$('.steps').stop().scrollLeft(left - leftPadding);
		});
	}



});
