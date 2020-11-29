let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let siteListMobileItems = document.querySelectorAll('.site-list__item--mobile');

let removeMobileItems = function () {
  siteListMobileItems.forEach(function(item) {
    item.classList.remove('site-list__item--mobile');
  });
}

let addMobileItems = function () {
  siteListMobileItems.forEach(function(item) {
    item.classList.add('site-list__item--mobile');
  });
}

navMain.classList.remove('main-nav--nojs');
removeMobileItems();

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    addMobileItems();
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    removeMobileItems();
  }
});
