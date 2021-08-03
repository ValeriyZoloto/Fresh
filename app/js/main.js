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

	//----------------swiper------------------------------

	const swiper = new Swiper(".partners-slider", {
		slidesPerView: 6,
		spaceBetween: 170,
		slidesPerGroup: 6,
		loop: true,
	});

	//-----------------swiper finish-----------------//
	//mixitap----------------------------------------//
	var containerEl1 = document.querySelector('[data-ref="container-1"]');
	const containerEl2 = document.querySelector('[data-ref="container-2"]');

	const config = {
		controls: {
			scope: "local",
		},
	};

	const mixer1 = mixitup(containerEl1, config);
	const mixer2 = mixitup(containerEl2, config);
	//-mixitap-finish--//
	//--basket---------//
	//ОТКРЫТИЕ КОРЗИНЫ
	$(".header-roster__btn").on("click", function () {
		$(".basket").addClass("basket--active");
	});

	//ОТМЕНА СТАНДАРТНОГО ПОВЕДЕНИЯ ССЫЛОК
	$(".basket__link").on("click", function (event) {
		event.preventDefault();
	});

	// ЗАКРЫТИЕ КОРЗИНЫ
	$(".basket__close").on("click", function () {
		$(".basket").removeClass("basket--active");
	});
	//--basket-Finish--------//
	//ВЫПАДАЮЩИЙ СПИСОК
	var select = $(".select"),
		timeoutId;
	$(".header__list").hover(
		function () {
			clearTimeout(timeoutId);
			select.show(500);
		},
		function () {
			timeoutId = setTimeout($.proxy(select, "hide"), 1000);
		}
	);
	select
		.mouseenter(function () {
			clearTimeout(timeoutId);
		})
		.mouseleave(function () {
			select.hide(500);
		});
});
