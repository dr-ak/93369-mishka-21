
let weekProductButton = document.querySelector('.week-product__button');
let catalogItemCarts = document.querySelectorAll('.catalog-item__cart');
let modalCart = document.querySelector('.modal-cart');
let modalToning = document.querySelector('.modal-toning');
let modalCartSizeButtons = document.querySelectorAll('.modal-cart__button-size');

if (weekProductButton) {
  weekProductButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    modalCart.classList.add('modal-cart--opend');
    modalToning.classList.add('modal-toning--opend');
  });
}

for (let i = 0; i < catalogItemCarts.length; i++){
  catalogItemCarts[i].addEventListener('click', (evt) => {
    evt.preventDefault();
    modalCart.classList.add('modal-cart--opend');
    modalToning.classList.add('modal-toning--opend');
  });
}

for (let i = 0; i < modalCartSizeButtons.length; i++){
  modalCartSizeButtons[i].addEventListener('click', (evt) => {
    evt.preventDefault();
    if (modalCartSizeButtons[i].classList.contains("modal-cart__button-size--active")) {
      return;
    }
    document.querySelector('.modal-cart__button-size--active').classList.remove('modal-cart__button-size--active');
    modalCartSizeButtons[i].classList.add('modal-cart__button-size--active');
  });
}

modalToning.addEventListener('click', () => {
  modalCart.classList.remove('modal-cart--opend');
  modalToning.classList.remove('modal-toning--opend');
});

window.addEventListener("keydown", (evt) => {
  if (evt.keyCode === 27) {
    if (modalCart.classList.contains("modal-cart--opend")
      || modalToning.classList.contains("modal-toning--opend")) {
      evt.preventDefault();
      modalCart.classList.remove('modal-cart--opend');
      modalToning.classList.remove('modal-toning--opend');
    }
  }
});
