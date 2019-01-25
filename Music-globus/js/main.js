(function($) {
	$(window).on('load', function() {
		$preloader = $('.preloader'),
		$loader = $preloader.find('.colorlib-load');
		// $loader.fadeOut();
		$preloader.delay(500).fadeOut('slow');
	});

	//	
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
		// $('.menu-main').slideToggle('slow').toggleClass('show');
		$('body').toggleClass('open');
	});


	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 300) {
			$('.header_area').addClass('sticky');
		} else {
			$('.header_area').removeClass('sticky');
		}
	});

	$(document).ready(function() {
		setTimeout(function () {
			$('.letter').addClass('loaded');
			$('.reg-text').addClass('loaded');
		}, 1000);
	});


})(jQuery);

var typed2 = new Typed('#typed-text', {
	strings: ['Качественные', 'И не дорогие', 'Мзыкальные инструменты'],
	typeSpeed: 55,
	backSpeed: 30,
	loop: true
});

