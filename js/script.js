$(document).ready(function() {
	$(".main-slider").slick({
		dots: true,
		infinite: false,
	});

	$(".work-slider").slick({
		dots: true,
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 4,

		responsive:[
			{
				breakpoint: 1000,
				settings: {
					slidesToShow:3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow:2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1,
					slidesToScroll: 1,
				}
			},
		]

	});

	$(".reviews-slider").slick({
		dots: true,
		infinite: false,
	});

	$(".header-burger").click(function() {
		$(".header-burger, .header-menu, body").toggleClass("active");
	});

	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		let elementID = $(this).data('scroll');
		let elementOffset = $(elementID).offset().top;
		$(".header-burger, .header-menu, body").removeClass("active");
		$("html, body").animate({

			scrollTop: elementOffset - 50

		},1000);
	})
})