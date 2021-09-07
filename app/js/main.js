$(function () {
	/*:::::::::::::::::::::::переменные:::::::::::::::::::::::::::::::::::::::::::::::*/
	var containerEl1 = document.querySelector('[data-ref="container-1"]');
	var containerEl2 = document.querySelector('[data-ref="container-2"]');
	const button = document.querySelector(".roster__btn--cart");
	const modal = document.querySelector(".fade-block");
	const basket = document.querySelector(".basket");
	const buttonClose = document.querySelector("[data-modal-close]");
	let mobileMenuOpen = document.querySelector(".burger");
	let mobileMenuOpen1 = document.querySelector(".btn-user--roster");
	let mobMenu = document.querySelector(".mobile");
	let mobClose = document.querySelector(".mobile__close");
	let btn = document.querySelector(".roster__btn--search");
	let mobileForm = document.querySelector(".search-form");
	var select = $(".fall-out"),
		timeoutId;
	var inp = document.querySelector(".search-form__input");
	const footerItem = document.querySelector(".footer__item");
	const footerItemMobile = document.querySelector(".footer__item--mobile");

	// const openFiltersButton = document.querySelector(".catalog-content__swich");
	// const closeFiltersButton = document.querySelector(".close-btn");
	const catalogFilter = document.querySelector(".filter");
	const hideBlock = document.querySelector(".hide-block");
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
	/*:::::::::::::::::::::::product-slider:::::::::::::::::::::::::::::::::::::::::::*/
	$(".product-one__slide").slick({
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		arrows: true,

		prevArrow:
			'<button type="button" class="slick-prev product-slide__arow--prev"><span class="sr-only">Стрелка слайдера влево</span><img class="slick-img" src="./images/slider/arrows/arrow-left.svg" alt="стрелка влево"> <img class="slick-img-green" src="./images/slider/arrows/arrow-left-green.svg" alt="стрелка влево"></button>',
		nextArrow:
			' <button type="button" class="slick-next product-slide__arow--next"><span class="sr-only">Стрелка слайдера вправо</span><img class="slick-img" src="./images/slider/arrows/arrow-right.svg" alt="стрелка вправо" /><img class="slick-img-green" src="./images/slider/arrows/arrow-right-green.svg" alt="стрелка вправо" /></button>',

		responsive: [
			{
				breakpoint: 1440,
				settings: {
					arrows: false,
				},
			},
		],
	});
	/*:::::::::::::::::::::::product-slider-finish::::::::::::::::::::::::::::::::::::*/
	/*:::::::::::::::::::::::swiper-slider::::::::::::::::::::::::::::::::::::::::::::*/
	const swiper = new Swiper(".partners-slider", {
		slidesPerView: 6,
		spaceBetween: 170,
		slidesPerGroup: 6,
		loop: true,
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 2,
				spaceBetween: 100,
				with: 80,
			},
			//when window width is >= 480px
			480: {
				slidesPerView: 3,
				spaceBetween: 130,
			},
			// when window width is >= 640px
			640: {
				slidesPerView: 3,
				spaceBetween: 140,
			},
			// when window width is >= 768px
			768: {
				slidesPerView: 4,
				spaceBetween: 150,
			},
			// when window width is >= 992px
			992: {
				slidesPerView: 5,
				spaceBetween: 150,
			},
			// when window width is >= 1200px
			1200: {
				slidesPerView: 5,
				spaceBetween: 170,
			},
			// when window width is >= 1200px
			1440: {
				slidesPerView: 6,
				slidesPerGroup: 6,
				spaceBetween: 170,
			},
		},
	});
	/*:::::::::::::::::::::::swiper-slider-finish:::::::::::::::::::::::::::::::::::::*/
	/*:::::::::::::::::::::::related-slider:::::::::::::::::::::::::::::::::::::::::::*/
	$(".related__content").slick({
		dots: false,
		slidesToShow: 4,

		prevArrow:
			'<button type="button" class="slick-prev related-arow--prev"><span class="sr-only">Стрелка слайдера влево</span><img class="slick-img" src="./images/slider/arrows/arrow-left.svg" alt="стрелка влево"> <img class="slick-img-green" src="./images/slider/arrows/arrow-left-green.svg" alt="стрелка влево"></button>',
		nextArrow:
			' <button type="button" class="slick-next related-arow--next"><span class="sr-only">Стрелка слайдера вправо</span><img class="slick-img" src="./images/slider/arrows/arrow-right.svg" alt="стрелка вправо" /><img class="slick-img-green" src="./images/slider/arrows/arrow-right-green.svg" alt="стрелка вправо" /></button>',

		responsive: [
			{
				breakpoint: 1440,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 775,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: false,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					arrows: false,
					dotsClass: "slick-dots__related",
					dots: true,
				},
			},
		],
	});
	/*:::::::::::::::::::::::related-slider-finish::::::::::::::::::::::::::::::::::::*/
	/*:::::::::::::::::::::::hide-slider::::::::::::::::::::::::::::::::::::::::::::::*/
	$(document).ready(function () {
		$(".product-slide__link").fancybox();
	});

	$(".modal-slider").slick({
		dots: true,
		slidesToShow: 1,
		dotsClass: "slick-dots__modal",
		infinite: true,
		prevArrow:
			'<button type="button" class="slick-prev modal-arow--prev"><span class="sr-only">Стрелка слайдера влево</span><img class="slick-img" src="./images/slider/arrows/arrow-left.svg" alt="стрелка влево"> <img class="slick-img-green" src="./images/slider/arrows/arrow-left-green.svg" alt="стрелка влево"></button>',
		nextArrow:
			' <button type="button" class="slick-next modal-arow--next"><span class="sr-only">Стрелка слайдера вправо</span><img class="slick-img" src="./images/slider/arrows/arrow-right.svg" alt="стрелка вправо" /><img class="slick-img-green" src="./images/slider/arrows/arrow-right-green.svg" alt="стрелка вправо" /></button>',
	});
	/*:::::::::::::::::::::::hide-slider-finish:::::::::::::::::::::::::::::::::::::::*/
	/*:::::::::::::::::::::::mixitap::::::::::::::::::::::::::::::::::::::::::::::::::*/
	const config = {
		controls: {
			scope: "local",
		},
	};
	/*:::::::::::::::::::::::mixitap-finish::::::::::::::::::::::::::::::::::::::::*/
	/*:::::::::::::::::::::::counter:::::::::::::::::::::::::::::::::::::::::::::::*/
	$(".counter__current").styler();
	/*:::::::::::::::::::::::counter-finish::::::::::::::::::::::::::::::::::::::::*/
	/*:::::::::::::::::::::::Select::::::::::::::::::::::::::::::::::::::::::::::::*/
	// Полифилл для метода forEach для NodeList
	if (window.NodeList && !NodeList.prototype.forEach) {
		NodeList.prototype.forEach = function (callback, thisArg) {
			thisArg = thisArg || window;
			for (var i = 0; i < this.length; i++) {
				callback.call(thisArg, this[i], i, this);
			}
		};
	}

	document.querySelectorAll(".dropdown").forEach(function (dropDownWrapper) {
		const dropDownBtn = dropDownWrapper.querySelector(".dropdown__button");
		const dropDownBtnActive = dropDownWrapper.querySelector(
			".dropdown__button--active"
		);
		const dropDownList = dropDownWrapper.querySelector(".dropdown__list");
		const dropDownListItems = dropDownList.querySelectorAll(
			".dropdown__list-item"
		);
		const dropDownInput = dropDownWrapper.querySelector(
			".dropdown__input-hidden"
		);
		const dropDownListVisible = dropDownWrapper.querySelector(
			".dropdown__list--visible"
		);

		// Клик по кнопке. Открыть/Закрыть select
		dropDownBtn.addEventListener("click", function (e) {
			dropDownList.classList.toggle("dropdown__list--visible");
			this.classList.add("dropdown__button--active");
		});

		// Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
		dropDownListItems.forEach(function (listItem) {
			listItem.addEventListener("click", function (e) {
				e.stopPropagation();
				dropDownBtn.innerText = this.innerText;
				dropDownBtn.focus();
				dropDownInput.value = this.dataset.value;
				dropDownList.classList.remove("dropdown__list--visible");
			});
		});

		// dropDownListVisible.addEventListener("click", function (e) {
		// 	e.preventDefault();
		// });

		// Клик снаружи дропдауна. Закрыть дропдаун
		document.addEventListener("click", function (e) {
			if (e.target !== dropDownBtn) {
				dropDownBtn.classList.remove("dropdown__button--active");
				dropDownList.classList.remove("dropdown__list--visible");
			}
		});

		// Нажатие на Tab или Escape. Закрыть дропдаун
		document.addEventListener("keydown", function (e) {
			if (e.key === "Tab" || e.key === "Escape") {
				dropDownBtn.classList.remove("dropdown__button--active");
				dropDownList.classList.remove("dropdown__list--visible");
			}
		});
	});

	/*:::::::::::::::::::::::Select-finish::::::::::::::::::::::::::::::::::::::::::*/
	/*:::::::::::::::::::::::catalog-content__btn:::::::::::::::::::::::::::::::::::*/
	$(".catalog-content__btn").on("click", function () {
		$(".catalog-content__btn").removeClass("catalog-content__btn--active");
		$(this).addClass("catalog-content__btn--active");
	});

	$(".button-grid").on("click", function () {
		$(".products-card").addClass("products-card--list");
		$(".catalog-content__inner").addClass("catalog-content__inner--list");
		$(".catalog-content__item").addClass("catalog-content__item--list");
		$(".products-card__image").addClass("products-card__image--list");
		$(".products-card__commodity").addClass(
			"products-card__commodity--list"
		);
		$(".products-card__status").addClass("products-card__status--list");
		$(".products-card__heart-btn").addClass(
			"products-card__heart-btn--list"
		);
		$(".counter").addClass("counter--list");
		$(".products-card__price-area").addClass(
			"products-card__price-area--list"
		);
		$(".products-card__raiting").addClass("products-card__raiting--list");
		$(".products-card__link").addClass("products-card__link--list");
		$(".products-card__stat").addClass("products-card__stat--hide");
	});

	$(".button-list").on("click", function () {
		$(".products-card").removeClass("products-card--list");
		$(".catalog-content__inner").removeClass(
			"catalog-content__inner--list"
		);
		$(".catalog-content__item").removeClass("catalog-content__item--list");
		$(".products-card__image").removeClass("products-card__image--list");
		$(".products-card__commodity").removeClass(
			"products-card__commodity--list"
		);
		$(".products-card__status").removeClass("products-card__status--list");
		$(".products-card__heart-btn").removeClass(
			"products-card__heart-btn--list"
		);
		$(".counter").removeClass("counter--list");
		$(".products-card__price-area").removeClass(
			"products-card__price-area--list"
		);
		$(".products-card__raiting").removeClass(
			"products-card__raiting--list"
		);
		$(".products-card__link").removeClass("products-card__link--list");
		$(".products-card__stat").removeClass("products-card__stat--hide");
	});

	/*:::::::::::::::::::::::catalog-content__btn-finish::::::::::::::::::::::::::::*/
	/*:::::::::::::::::::::::filters::::::::::::::::::::::::::::::::::::::::::::::::*/
	$(".catalog-content__swich").on("click", function () {
		$(".filter").addClass("filter--active");
		$(".fade-block").addClass("fade-block--active");
	});

	$(".close-btn").on("click", function () {
		$(".filter").removeClass("filter--active");
		$(".fade-block").removeClass("fade-block--active");
	});

	$(".fade-block").on("click", function () {
		$(".filter").removeClass("filter--active");
		$(".fade-block").removeClass("fade-block--active");
	});
	/*:::::::::::::::::::::::filters-finish:::::::::::::::::::::::::::::::::::::::::*/
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
		catalogFilter.classList.remove("filter--active");
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
			catalogFilter.classList.remove("filter--active");
			hideBlock.classList.remove("hide-block--active");
		}
	});
	/*:::::::::::::::::::::::Корзина-finish::::::::::::::::::::::::::::::::::::::::*/
	/*:::::::::::::::::::::::Мобильное меню::::::::::::::::::::::::::::::::::::::::*/
	mobileMenuOpen.addEventListener("click", function () {
		modal.classList.add("fade-block--active");
		mobMenu.classList.add("mobile--active");
		this.classList.add("active");
	});

	mobileMenuOpen1.addEventListener("click", function () {
		console.log("клик по юзеру");
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

	$(".mobile__goods").hover(
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
	/*:::::::::::::::::::::::Замена текста в инпуте-finish:::::::::::::::::::::::*/ 0;
	/*:::::::::::::::::::::::Range-slider::::::::::::::::::::::::::::::::::::::::*/
	$(".filter-price__input").ionRangeSlider({
		type: "double",
		min: 100,
		max: 1000,
		onStart: function (data) {
			$(".filter-price__from").text(data.from);
			$(".filter-price__to").text(data.to);
		},
		onChange: function (data) {
			$(".filter-price__from").text(data.from);
			$(".filter-price__to").text(data.to);
		},
	});

	/*:::::::::::::::::::::::Range-slider-finish:::::::::::::::::::::::::::::::::*/
	/*:::::::::::::::::::::::tabs:::::::::::::::::::::::::::::::::::::::::::::::::*/
	$(".product-tabs__item").on("click", function (e) {
		e.preventDefault();
		$(".product-tabs__item").removeClass("product-tabs__item--active");
		$(this).addClass("product-tabs__item--active");

		$(".product-tabs__point--active").removeClass(
			"product-tabs__point--active"
		);

		$($(this).attr("href")).addClass("product-tabs__point--active");
	});
	/*:::::::::::::::::::::::tabs-finish::::::::::::::::::::::::::::::::::::::::::*/

	var mixer1 = mixitup(containerEl1, config);
	var mixer2 = mixitup(containerEl2, config);
});

/*:::::::::::::::::::::::custom-counter::::::::::::::::::::::::::::::::::::::*/
window.addEventListener("click", function (event) {
	if (event.target.hasAttribute("data-action")) {
		//От кнопки по которой кликнули находим родительский элемент обертку текущего счетчика
		const counterWrapper = event.target.closest(".counter-wrapper");
		//От обертки  находим div со значением  счетчика
		const counter = counterWrapper.querySelector("[data-counter]");

		if (event.target.dataset.action === "plus") {
			//Изменяем текст показания счетчика увеличивая его на единицу
			counter.innerText = ++counter.innerText;

			if (event.target.closest(".cart-wrapper")) {
				toggleCartStatus();
			}
		} else if (event.target.dataset.action === "minus") {
			if (event.target.closest(".cart-wrapper")) {
				//Уменьшаем счетчик только до единицы
				if (parseInt(counter.innerText) > 1) {
					//Изменяем текст показания счетчика уменьшая его на единицу
					counter.innerText = --counter.innerText;
				} else {
					event.target.closest(".cart-item").remove();
				}
				toggleCartStatus();
			} else {
				if (parseInt(counter.innerText) > 1) {
					counter.innerText = --counter.innerText;
				}
			}
		}
	}
	/*:::::::::::::::::::::::custom-counter-finish:::::::::::::::::::::::::::::::*/
});
