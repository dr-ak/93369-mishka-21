
let weekProductButton = document.querySelector('.week-product__button');
let catalogItemCarts = document.querySelectorAll('.catalog-item__cart');
let modalCart = document.querySelector('.modal-cart');
let modalToning = document.querySelector('.modal-toning');

if (weekProductButton != null) {
  weekProductButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    modalCart.classList.add('modal-cart--opend');
    modalToning.classList.add('modal-toning--opend');
  });
}

for (var i = 0; i < catalogItemCarts.length; i++){
  catalogItemCarts[i].addEventListener('click', function(evt){
    evt.preventDefault();
    modalCart.classList.add('modal-cart--opend');
    modalToning.classList.add('modal-toning--opend');
  });
}

modalToning.addEventListener('click', function() {
  modalCart.classList.remove('modal-cart--opend');
  modalToning.classList.remove('modal-toning--opend');
});
