'use strict';
import 'ion-rangeslider'
import 'ion-rangeslider/css/ion.rangeSlider.css'
$(document).ready(function() {
	$(".js-range-slider").ionRangeSlider({
		min: 1,
		max: 100,
		from: 40
	});


	$('.js-modal').on('click',function (){
		event.preventDefault();
		$('#mainModal').modal({
			showClose: false,
			fadeDuration: 100
		});
		return false;
	});

	$('#modalForm').on('submit',function (){
		event.preventDefault();
		$('#thanksModal').modal({
			showClose: false,
			fadeDuration: 100
		});
	});


	$('#askForm').on('submit',function (){
		event.preventDefault();
		$('#thanksModal').modal({
			showClose: false,
			fadeDuration: 100
		});
	});
});
