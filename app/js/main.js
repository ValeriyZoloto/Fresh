$(function () {
	$(".top-slider__inner").slick({
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		prevArrow:
			'<button type="button" class="slick-prev"><span class="sr-only">Стрелка слайдера влево</span><img src="./images/slider/arrows/arrow-left.svg" alt="стрелка влево"></button>',
		nextArrow:
			' <button type="button" class="slick-next"><span class="sr-only">Стрелка слайдера вправо</span><img src="./images/slider/arrows/arrow-right.svg" alt="стрелка вправо" /></button>',
	});

	//----------------------------------------------

	const swiper = new Swiper(".partners-slider", {
		slidesPerView: 6,
		spaceBetween: 170,
		slidesPerGroup: 6,
		loop: true,
	});

	//----------------------------------
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
