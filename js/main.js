const headerButton = document.querySelector('.header__button');
const headerNav = document.querySelector('.header__nav');
const headerBtnClose = document.querySelector('.header__button--close');

headerButton.addEventListener('click', () => {
  headerNav.classList.add('header__nav--active')
})
headerBtnClose.addEventListener('click', () => {
  headerNav.classList.remove('header__nav--active')
})