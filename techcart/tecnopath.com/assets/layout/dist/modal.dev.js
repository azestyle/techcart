"use strict";

document.addEventListener('DOMContentLoaded', function (event) {
  var bucketbtn = document.querySelector('.bucket');
  var modals = document.querySelector('.cart-modal');
  var closed = document.querySelector('.closed');
  bucketbtn.addEventListener('click', function () {
    modals.style.display = 'block';
    document.body.classList.add('modal-open');
  });
  closed.addEventListener('click', function () {
    modals.style.display = 'none';
    document.body.classList.remove('modal-open');
  });
  window.addEventListener('click', function (event) {
    if (event.target === modals) {
      modals.style.display = 'none';
      document.body.classList.remove('modal-open');
    }
  });
});