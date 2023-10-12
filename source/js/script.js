/* в этот файл добавляет скрипты*/
// модальное окно
const menuButton = document.querySelector('.js-toggle-button');
const navMenu = document.querySelector('.header__nav');

menuButton.addEventListener('click', () => {
  if (navMenu.classList.contains('header__nav--closed')) {
    navMenu.classList.remove('header__nav--closed');
    menuButton.style.backgroundImage = 'url("/images/burger-close.svg")';
  } else {
    navMenu.classList.add('header__nav--closed');
    menuButton.style.backgroundImage = 'url("/images/burger.svg")';
  }
});

// показ активной ссылки
const links = document.querySelectorAll('.nav-list__link');

links.forEach((link) => {
  link.addEventListener('click', () => {
    links.forEach((otherLink) => {
      if (otherLink.classList.contains('nav-list__link--current')) {
        otherLink.classList.remove('nav-list__link--current');
      }
    });
    link.classList.add('nav-list__link--current');
  });
});

