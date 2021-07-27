$(function () {
	$(".top-slider__inner").slick({
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		prevArrow:
			'<button type="button" class="slick-prev"><img src="./images/slider/arrows/arrow-left.svg" alt="стрелка влево"></button>',
		nextArrow:
			' <button type="button" class="slick-next"><img src="./images/slider/arrows/arrow-right.svg" alt="стрелка вправо" /></button>',
	});

	var containerEl1 = document.querySelector('[data-ref="container-1"]');
	const containerEl2 = document.querySelector('[data-ref="container-2"]');

	const config = {
		controls: {
			scope: "local",
		},
	};

	const mixer1 = mixitup(containerEl1, config);
	const mixer2 = mixitup(containerEl2, config);
});
