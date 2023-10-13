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

// слайдер
const moveSlides = () => {
  const slider = document.querySelector('.slider');
  const slides = slider.querySelectorAll('.slider__slide');
  const prevButton = slider.querySelector('.slider__button-prev');
  const nextButton = slider.querySelector('.slider__button-next');
  const paginationButtons = slider.querySelectorAll('.slider__button-pagination');
  const svgImages = slider.querySelectorAll('.slider__pagination-button');

  let currentSlideIndex = 0;

  // Функция, которая скрывает все слайды и показывает только текущий слайд.
  const showSlide = (index) => {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.remove('slider__slide--hidden');
      } else {
        slide.classList.add('slider__slide--hidden');
      }
    });
  };

  //пагинация
  const changePaginationColor = () => {
    paginationButtons.forEach((_, i) => {
      if (i === currentSlideIndex) {
        svgImages[i].style.fill = '#7859CF';
      } else {
        svgImages[i].style.fill = '#ffffff';
      }
    });
  };

  // Показать первый слайд при загрузке страницы.
  showSlide(currentSlideIndex);
  // Показать первую пагинацию при загрузке страницы.
  changePaginationColor();
  //
  if (currentSlideIndex === 0) {
    prevButton.setAttribute('disabled', true);
  }

  // Обработчик для кнопки "Следующий слайд".
  nextButton.addEventListener('click', () => {
    if (currentSlideIndex < slides.length - 1) {
      currentSlideIndex = currentSlideIndex + 1;
      showSlide(currentSlideIndex);
      changePaginationColor();
    }
    if (currentSlideIndex === slides.length - 1) {
      nextButton.setAttribute('disabled', true);
    }

    prevButton.removeAttribute('disabled');

  });

  // Обработчик для кнопки "Предыдущий слайд".
  prevButton.addEventListener('click', () => {
    if (currentSlideIndex > 0) {
      currentSlideIndex = currentSlideIndex - 1;
      showSlide(currentSlideIndex);
      changePaginationColor();
    }
    if (currentSlideIndex === 0) {
      prevButton.setAttribute('disabled', true);
    }

    nextButton.removeAttribute('disabled');
  });

  // Обработчик для пагинации.
  paginationButtons.forEach((paginationButton, i) => {
    paginationButton.addEventListener('click', () => {
      currentSlideIndex = i;
      showSlide(currentSlideIndex);
      changePaginationColor();

      if (currentSlideIndex === 0) {
        prevButton.setAttribute('disabled', true);
      } else {
        prevButton.removeAttribute('disabled');
      }

      if (currentSlideIndex === slides.length - 1) {
        nextButton.setAttribute('disabled', true);
      } else {
        nextButton.removeAttribute('disabled');
      }
    });
  });
};

moveSlides();

// paginationButtons.forEach((paginationButton, i) => {
//   paginationButton.addEventListener('mouseover', () => {
//     svgImages[i].style.fill = '#7859CF';
//   });

//   paginationButton.addEventListener('mouseout', () => {
//     if (i !== currentSlideIndex) {
//       svgImages[i].style.fill = '#ffffff';
//     }
//   });

//   // остальной код...
// });
