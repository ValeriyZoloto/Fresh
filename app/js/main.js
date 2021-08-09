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

	$(".counter__current").styler();

	//--Fade-block---------//

	const button = document.querySelector(".roster__btn--cart");
	const modal = document.querySelector(".fade-block");
	const basket = document.querySelector(".basket");
	const buttonClose = document.querySelector("[data-modal-close]");

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
			basket.classList.remove("basket__active");
		}
	});
	//--fade-block-Finish--------//

	//ВЫПАДАЮЩИЙ СПИСОК
	var select = $(".dropdown"),
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

	let btn = document.querySelector(".roster__btn--search");
	let mobileForm = document.querySelector(".search-form--mobile");

	btn.addEventListener("click", function () {
		mobileForm.classList.toggle("search-form--active");
	});
});
