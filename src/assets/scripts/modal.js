'use strict';
import 'ion-rangeslider'
import 'ion-rangeslider/css/ion.rangeSlider.css'
$(document).ready(function() {
	$(".js-range-slider").ionRangeSlider({
		min: 1,
		max: 100,
		from: 40,
		max_postfix: "+"
	});


	$('.js-modal').on('click',function (){
		event.preventDefault();
		let type = $(this).data('type');
		if (type){
			$('#mainModal input[name=type]').prop("checked", false);
			$('#mainModal input[name=type][value="'+type+'"]').prop("checked", true);
		}

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

	let scrollWidth= window.innerWidth-$(document).width();
	$('#mainModal,#askForm,#modalForm').on($.modal.BEFORE_BLOCK , function(event, modal) {
		$('.wrapper').css('padding-right',scrollWidth);
	});

	$('#mainModal,#askForm,#modalForm').on($.modal.AFTER_CLOSE, function(event, modal) {
		$('.wrapper').css('padding-right','');
	});



});
