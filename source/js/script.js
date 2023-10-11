/* в этот файл добавляет скрипты*/
const openMenuButton = document.querySelector('.js-toggle-button');
const navMenu = document.querySelector('.header__nav');

openMenuButton.addEventListener('click', () => {
  if (navMenu.classList.contains('header__nav--closed')) {
    navMenu.classList.remove('header__nav--closed');
    openMenuButton.style.backgroundImage = 'url("/images/burger-close.svg")';
  } else {
    navMenu.classList.add('header__nav--closed');
    openMenuButton.style.backgroundImage = 'url("/images/burger.svg")';
  }
});
