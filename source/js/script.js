const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const btnBefore = document.querySelector('.slider-range__btn--before');
const btnAfter = document.querySelector('.slider-range__btn--after');
const wrapperBefore = document.querySelector('.slider__wrapper--before');
const sliderToggle = document.querySelector('.slider-range__toggle');

navMain.classList.remove('main-nav--nojs');
navMain.classList.add('main-nav--closed');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

btnBefore.addEventListener('click', function () {
  wrapperBefore.classList.remove('slider__state--after');
  wrapperBefore.classList.add('slider__state--before');
  sliderToggle.classList.remove('slider-range__toggle--after');
  sliderToggle.classList.add('slider-range__toggle--before');
});

btnAfter.addEventListener('click', function () {
  wrapperBefore.classList.add('slider__state--after');
  wrapperBefore.classList.remove('slider__state--before');
  sliderToggle.classList.add('slider-range__toggle--after');
  sliderToggle.classList.remove('slider-range__toggle--before');
});
