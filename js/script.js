'use strict'

const next = document.querySelector('.next');
const prev = document.querySelector('.prev')

const swiper = new Swiper('.swiper', {
	// Optional parameters
	loop: true,
	// Navigation arrows
	navigation: {
		nextEl: next,
		prevEl: prev,
	},
});


const burgerBtn = document.querySelector('.burger-desctop__btn');
const burgerMenuDesc = document.querySelector('.burger-desctop')
const body = document.querySelector('body')
burgerBtn.addEventListener('click', (e) => {
	burgerBtn.classList.toggle('active');
	burgerMenuDesc.classList.toggle('open');
	body.classList.toggle('lock');

})



const tabsLink = document.querySelectorAll('.tabs__title-link');
const tabsBody = document.querySelectorAll('.tabs__body');

tabsLink.forEach(el => {
	el.addEventListener('click', () => {

		tabsBody.forEach(el => {
			el.classList.remove('active')
		});
		const content = document.querySelector('#' + el.dataset.tab);
		content.classList.toggle('active');

		tabsLink.forEach(el => {
			el.classList.remove('active')
		});

		el.classList.toggle('active')

	})
});





const accordionBody = document.querySelectorAll('.tabs__title-item');
const accordionLink = document.querySelectorAll('.tabs__title-link_mobile');

accordionLink.forEach(el => {
	el.addEventListener('click', () => {

		accordionBody.forEach(el => {
			el.classList.remove('active')
		});
		const content = document.querySelector('#' + el.dataset.acc);
		content.classList.add('active');

		accordionLink.forEach(el => {
			el.classList.remove('active')
		});

		el.classList.toggle('active')

	})
});

const footerAccordionBody = document.querySelectorAll('.footer__blocks-wrap');
const footerAccordionBtn = document.querySelectorAll('.open-btn');

footerAccordionBtn.forEach(el => {
	el.addEventListener('click', () => {


		footerAccordionBody.forEach(el => {
			el.classList.remove('active')
		});
		const content = document.querySelector('#' + el.dataset.accord);
		content.classList.toggle('active');


		footerAccordionBtn.forEach(el => {
			el.classList.remove('active')
		});
		el.classList.toggle('active');

	})
});











ymaps.ready(init)

const mapCoords = [59.923468, 30.360649];

function init() {
	let map = new ymaps.Map('map', {
		center: mapCoords,
		zoom: 14
	})
	let placemark = new ymaps.Placemark(mapCoords, {}, {
		iconLayout: 'default#image',
		iconImageHref: '..//img/location-mark.png',
		iconImageSize: [30, 30],
		iconImageOffset: [0, 0]
	})
	map.geoObjects.add(placemark);
}



