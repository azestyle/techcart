"use strict";

var addbtn = document.querySelectorAll('.cart-div');
var localebox = [];
var orderlist = document.querySelector('.bucket-list');
var subtotal = document.querySelector('.subtotal');
var s1totala1 = document.querySelector('.s1totala1');
var totalvals = document.querySelector('.totalvals');
addbtn.forEach(function (btn) {
  btn.addEventListener('click', function (events) {
    var bigbox = events.target.closest('.big-js');
    var pricebox = bigbox.querySelector('.price-js').innerText;
    var tittlebox = bigbox.querySelector('.tittle-js').innerText;
    var imgbox = bigbox.querySelector('.img-js').src;
    var product = {
      img: imgbox,
      tittle: tittlebox,
      price: pricebox,
      value: 1
    };
    checklocale();
    checkcart(product);
    localStorage.setItem('cart', JSON.stringify(localebox));
    addlist();
  });
});

function checklocale() {
  if (localStorage.getItem('cart') === null) {
    localebox = [];
  } else {
    localebox = JSON.parse(localStorage.getItem('cart'));
  }
}

function checkcart(elements) {
  var tested = localebox.find(function (item) {
    return item.img === elements.img && item.tittle === elements.tittle && item.price === elements.price;
  });

  if (tested) {
    tested.value++;
  } else {
    localebox.push(elements);
  }

  addlist();
  updateTotalPrice();
  updateTotalValue();
}

;

function addlist() {
  orderlist.innerHTML = "";
  var takebox = JSON.parse(localStorage.getItem('cart')) || [];
  takebox.forEach(function (element, index) {
    if (element.img && element.tittle && element.price) {
      var list = document.createElement('div');
      list.setAttribute('class', 's1-listen');
      list.innerHTML = "\n                        <div class=\"s1-l-gr\">\n                         <p class=\"s1img\"><img src=".concat(element.img, "  class=\"imag\"></p>\n                        <p class=\"s1tittle\">").concat(element.tittle, "</p>\n                        <button class=\"dltbtn\">&times;</button>\n                        </div>\n                         <p class=\"s1price\">").concat(element.value, " x AUD $ ").concat(element.price, ".00</p>  \n                      \n                    \n                       ");
      orderlist.append(list);
      var dltbtn = list.querySelector('.dltbtn');
      dltbtn.addEventListener('click', function () {
        takebox.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(takebox));
        localebox = takebox;
        addlist();
        updateTotalPrice();
        updateTotalValue();
      });
    }
  });
}

function updateTotalPrice() {
  var totalprc = localebox.reduce(function (sum, item) {
    return sum + Number(item.price) * item.value;
  }, 0);
  subtotal.innerText = "Subtotal: AUD $ ".concat(totalprc, ".00");
  s1totala1.innerText = "".concat(totalprc);
}

;

function updateTotalValue() {
  var totalval = localebox.reduce(function (sum, item) {
    return sum + item.value;
  }, 0);
  totalvals.innerText = "".concat(totalval);
}

document.addEventListener('DOMContentLoaded', function () {
  checklocale();
  addlist();
  updateTotalPrice();
  updateTotalValue();
});