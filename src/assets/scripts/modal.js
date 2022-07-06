'use strict';
import 'ion-rangeslider'
import 'ion-rangeslider/css/ion.rangeSlider.css'
import intlTelInput from "intl-tel-input";
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
		let validPhone = true;
		$(this).find('input[type=tel]').each(function (){
			let elem = this;
			let telInput = window.intlTelInputGlobals.getInstance(elem);
			let isValid = telInput.isValidNumber();
			if (!isValid) validPhone = false;
		});
		if (validPhone){
			let data = $(this).serialize();
			$.ajax({
				url: '/php/mail.php',
				method: 'post',
				dataType: 'json',
				data: data,
				success: function(data){
					if (data.status === 'ok'){
						$('#modalForm').clear();
						$('#thanksModal').modal({
							showClose: false,
							fadeDuration: 100
						});
					}
				}
			});
		}
	});


	$('#askForm').on('submit',function (){
		event.preventDefault();
		let validPhone = true;
		$(this).find('input[type=tel]').each(function (){
			let elem = this;
			let telInput = window.intlTelInputGlobals.getInstance(elem);
			let isValid = telInput.isValidNumber();
			if (!isValid) validPhone = false;
		});
		if (validPhone){
			let data = $(this).serialize();
			$.ajax({
				url: '/php/mail.php',
				method: 'post',
				dataType: 'json',
				data: data,
				success: function(data){
					if (data.status === 'ok'){
						$('#askForm').clear();
						$('#thanksModal').modal({
							showClose: false,
							fadeDuration: 100
						});
					}
				}
			});
		}
	});

	let scrollWidth= window.innerWidth-$(document).width();
	$('#mainModal,#askForm,#modalForm').on($.modal.BEFORE_BLOCK , function(event, modal) {
		$('.wrapper,.header').css('padding-right',scrollWidth);
		$('.header-right').css('border-right-width',scrollWidth);
	});

	$('#mainModal,#askForm,#modalForm').on($.modal.AFTER_CLOSE, function(event, modal) {
		$('.wrapper,.header').css('padding-right','');
		$('.header-right').css('border-right-width','');
	});



});
