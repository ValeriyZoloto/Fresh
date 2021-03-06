$(function () {
	$(".top-slider__inner").slick({
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,

		prevArrow:
			'<button type="button" class="slick-prev"><img src="./images/slider/arrows/arrow-left.svg" alt="стрелка влево"></button>',
		nextArrow:
			' <button type="button" class="slick-next"><img src="./images/slider/arrows/arrow-right.svg" alt="стрелка вправо" /></button>',
	});

	let mixer = mixitup(".top-products__content", {
		load: {
			filter: ".category-all",
		},
	});
});
