"use strict";

var clicker = document.querySelector('.clicker');
var productlist = document.querySelector('.product-lists');
clicker.addEventListener('click', function () {
  if (productlist.style.transform === "translateY(5%)") {
    productlist.style.transform = "translateY(0)";
    productlist.style.visibility = "visible";
    productlist.style.opacity = "1";
  } else {
    productlist.style.transform = "translateY(5%)";
    productlist.style.opacity = "0";
    productlist.style.visibility = "hidden";
  }
});
var prevScrollpos = window.scrollY;
var header = document.querySelector(".header");
window.addEventListener('scroll', function () {
  var currentScrollPos = window.scrollY;

  if (prevScrollpos < 70) {
    header.style.top = "0";
  } else {
    header.style.top = "-110px";
  }

  prevScrollpos = currentScrollPos;
});