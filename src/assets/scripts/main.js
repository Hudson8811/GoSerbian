import AOS from 'aos'
import 'aos/dist/aos.css'
'use strict';
$(document).ready(function() {
	AOS.init({
		once: true,
		offset: 250,
		duration: 500
	});
});
