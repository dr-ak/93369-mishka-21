let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--opend')) {
    navMain.classList.remove('main-nav--opend');
  } else {
    navMain.classList.add('main-nav--opend');
  }
});
