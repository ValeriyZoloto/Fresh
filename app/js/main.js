$(function () {
	/*:::::::::::::::::::::::переменные:::::::::::::::::::::::::::::::::::::::::::::::*/
	var containerEl1 = document.querySelector('[data-ref="container-1"]');
	const containerEl2 = document.querySelector('[data-ref="container-2"]');
	const button = document.querySelector(".roster__btn--cart");
	const modal = document.querySelector(".fade-block");
	const basket = document.querySelector(".basket");
	const buttonClose = document.querySelector("[data-modal-close]");
	let mobileMenuOpen = document.querySelector(".burger");
	let mobMenu = document.querySelector(".mobile");
	let mobClose = document.querySelector(".mobile__close");
	let btn = document.querySelector(".roster__btn--search");
	let mobileForm = document.querySelector(".search-form");
	var select = $(".dropdown"),
		timeoutId;
	var inp = document.querySelector(".search-form__input");
	/*:::::::::::::::::::::::переменные-finish::::::::::::::::::::::::::::::::::::::::*/
	/*:::::::::::::::::::::::top-slider:::::::::::::::::::::::::::::::::::::::::::::::*/
	$(".top-slider__inner").slick({
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,

		prevArrow:
			'<button type="button" class="slick-prev"><span class="sr-only">Стрелка слайдера влево</span><img class="slick-img" src="./images/slider/arrows/arrow-left.svg" alt="стрелка влево"> <img class="slick-img-green" src="./images/slider/arrows/arrow-left-green.svg" alt="стрелка влево"></button>',
		nextArrow:
			' <button type="button" class="slick-next"><span class="sr-only">Стрелка слайдера вправо</span><img class="slick-img" src="./images/slider/arrows/arrow-right.svg" alt="стрелка вправо" /><img class="slick-img-green" src="./images/slider/arrows/arrow-right-green.svg" alt="стрелка вправо" /></button>',

		responsive: [
			{
				breakpoint: 1578,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: true,
					fade: true,
				},
			},
		],
	});
	/*:::::::::::::::::::::::top-slider-finish::::::::::::::::::::::::::::::::::::::::*/
	/*:::::::::::::::::::::::swiper-slider::::::::::::::::::::::::::::::::::::::::::::*/
	const swiper = new Swiper(".partners-slider", {
		slidesPerView: 6,
		spaceBetween: 170,
		slidesPerGroup: 6,
		loop: true,
	});
	/*:::::::::::::::::::::::swiper-slider-finish:::::::::::::::::::::::::::::::::::::*/
	/*:::::::::::::::::::::::mixitap::::::::::::::::::::::::::::::::::::::::::::::::::*/
	const config = {
		controls: {
			scope: "local",
		},
	};

	const mixer1 = mixitup(containerEl1, config);
	const mixer2 = mixitup(containerEl2, config);
	/*:::::::::::::::::::::::mixitap-finish::::::::::::::::::::::::::::::::::::::::*/
	/*:::::::::::::::::::::::counter:::::::::::::::::::::::::::::::::::::::::::::::*/
	$(".counter__current").styler();
	/*:::::::::::::::::::::::counter-finish::::::::::::::::::::::::::::::::::::::::*/
	/*:::::::::::::::::::::::Корзина:::::::::::::::::::::::::::::::::::::::::::::::*/
	button.addEventListener("click", function () {
		console.log("клик по кнопке открыть корзину");
		modal.classList.add("fade-block--active");
		basket.classList.add("basket__active");
	});

	buttonClose.addEventListener("click", function () {
		console.log("клик по кнопке закрыть  корзину");
		modal.classList.remove("fade-block--active");
		basket.classList.remove("basket__active");
	});

	modal.addEventListener("click", function () {
		console.log("клик по фейду");
		modal.classList.remove("fade-block--active");
		basket.classList.remove("basket__active");
	});

	$(".basket__link").on("click", function (event) {
		event.preventDefault();
	});

	$(".basket__order").on("click", function (event) {
		event.preventDefault();
	});

	$(document).keyup(function (e) {
		if (e.keyCode == 27) {
			console.log("click escape");
			modal.classList.remove("fade-block--active");
			mobMenu.classList.remove("mobile--active");
			basket.classList.remove("basket__active");
			mobileForm.classList.remove("search-form--active");
		}
	});
	/*:::::::::::::::::::::::Корзина-finish::::::::::::::::::::::::::::::::::::::::*/
	/*:::::::::::::::::::::::Мобильное меню::::::::::::::::::::::::::::::::::::::::*/
	mobileMenuOpen.addEventListener("click", function () {
		modal.classList.add("fade-block--active");
		mobMenu.classList.add("mobile--active");
		this.classList.add("active");
	});

	mobClose.addEventListener("click", function () {
		modal.classList.remove("fade-block--active");
		mobMenu.classList.remove("mobile--active");
		this.classList.remove("active");
	});

	modal.addEventListener("click", function () {
		console.log("клик по фейду");
		modal.classList.remove("fade-block--active");
		mobMenu.classList.remove("mobile--active");
	});
	/*:::::::::::::::::::::::Мобильное меню-finish::::::::::::::::::::::::::::::::::*/
	/*:::::::::::::::::::::::выпадающий список::::::::::::::::::::::::::::::::::::::*/
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
	/*:::::::::::::::::::::::выпадающий список-finish:::::::::::::::::::::::::::::::*/
	/*:::::::::::::::::::::::Форма::::::::::::::::::::::::::::::::::::::::::::::::::*/
	btn.addEventListener("click", function () {
		mobileForm.classList.toggle("search-form--active");
	});

	$(document).ready(function ($) {
		var $window = $(window),
			$element = $(".search-form");

		function resize() {
			if ($window.width() < 480) {
				return $element.addClass("search-form--mobile");
			}
			$element.removeClass("search-form--mobile");
		}

		$window.resize(resize).trigger("resize");
	});
	/*:::::::::::::::::::::::Форма-finish::::::::::::::::::::::::::::::::::::::::*/
	/*:::::::::::::::::::::::Замена текста в инпуте::::::::::::::::::::::::::::::*/
	window.addEventListener("resize", function () {
		inp.setAttribute(
			"placeholder",
			this.innerWidth >= 480 ? "Найти в магазине ..." : "Я ищу ..."
		);
	});
	window.dispatchEvent(new Event("resize"));
	/*:::::::::::::::::::::::Замена текста в инпуте-finish:::::::::::::::::::::::*/
	/*:::::::::::::::::::::::Logo отслеживание размера:::::::::::::::::::::::::::*/
	$(function () {
		if ($(window).width() <= 992) {
			$(".logo__img").each(function () {
				$(this).attr(
					"src",
					$(this)
						.attr("src")
						.replace(
							"./images/logo/logo.png",
							"images/logo/logo-short.png"
						)
				);
				$window.resize(resize).trigger("resize");
			});
		}
		$window.resize(resize).trigger("resize");
	});

	$(function () {
		var logo = document.querySelector(".logo__img");
		if ($(window).width() <= 345) {
			$(".logo__img").each(function () {
				logo.classList.add("sr-only");
				$window.resize(resize).trigger("resize");
			});
		}

		if ($(window).width() > 345) {
			$(".logo__img").each(function () {
				logo.classList.remove("sr-only");
				$window.resize(resize).trigger("resize");
			});
		}
		$window.resize(resize).trigger("resize");
	});

	/*:::::::::::::::::::::::Logo отслеживание размера-finish::::::::::::::::::::*/
});
