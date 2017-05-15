$(function() {

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	//slider-calendar
	var owl = $('.owl-carousel');
	owl.owlCarousel({
		items:7,
		loop:true,
		animateOut: 'fadeOut',
		autoHeight: true,
		margin:0,
		// autoplay:true,
		// autoplayTimeout: 4000,
		// autoplayHoverPause: true,
		lazyLoad:true,
		nav: true,
		dots: false,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav: false
			},
			767:{
				items:5
			},
			960:{
				items:7
			}
		}
	});

	//list-program control
	$('.short .programm-img, .short .title, .full .button-close').on('click', function () {
		event.preventDefault();
		$(this).parents("div.item").toggleClass('active');
	});
});