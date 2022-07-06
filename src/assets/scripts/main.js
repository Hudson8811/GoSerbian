import intlTelInput from 'intl-tel-input'
import 'intl-tel-input/build/css/intlTelInput.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
'use strict';
$(document).ready(function() {

	$('input[type=tel]').each(function (){
		let elem = this;
		let telInput = intlTelInput(elem, {
			preferredCountries: ['ru','rs'],
			separateDialCode: true,
			formatOnDisplay: true,
			initialCountry: "auto",
			utilsScript : "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.17/js/utils.min.js",
			autoPlaceholder: "aggressive",
			geoIpLookup: function(success, failure) {
				$.get("https://ipinfo.io", function() {}, "jsonp").always(function(resp) {
					var countryCode = (resp && resp.country) ? resp.country : "ru";
					success(countryCode);
				});
			},
		});

		$(elem).on('keyup paste change', function() {
			$(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]+/, ''))
		});
	});




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

		$('.o-slider__inner').on('afterChange', function(event, slick, currentSlide, nextSlide){
			$('.o-slider__inner .slick-slide').find('.o-slider__item').css('opacity',1);
		});

		$('.step').on('click',function (){
			event.preventDefault();
			let index = $(this).index();
			let current = $('.o-slider__inner').slick('slickCurrentSlide');
			if (Math.abs(current - index) > 1){
				if (index > current){
					for (var i = current+1; i < index; i++) {
						$('.o-slider__inner .slick-slide').eq(i).find('.o-slider__item').css('opacity',0);
					}
				} else {
					for (var i = index+1; i < current; i++) {
						$('.o-slider__inner .slick-slide').eq(i).find('.o-slider__item').css('opacity',0);
					}
				}
			}
			$('.o-slider__inner').slick('slickGoTo',index);
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
