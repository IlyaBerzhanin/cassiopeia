"use strict";

const colors = document.querySelectorAll(".color-choice__item");
const productName = document.querySelector(".product-name");

const quantityButtons = document.querySelectorAll(".counter__button");
let quantityNumber = document.querySelector("#card-quantity-number");

const productImages = document.querySelectorAll('.product-image');

initializeProductCard();

function initializeProductCard() {
  chooseProductColor();
  chooseProductQuantity();
}

function chooseProductColor() {
  colors.forEach((color) => {
    color.addEventListener("click", (e) => {

      colors.forEach(col => {
        col.classList.remove('active-item')
      })
      
      productName.innerText = e.target.dataset.color;
      e.target.classList.add('active-item')

      for(let i = 0; i < productImages.length; i++) {
         productImages[i].style.opacity = 0;
        if(productImages[i].dataset.show === e.target.dataset.color) {
          productImages[i].style.opacity = 1;
        }
      }
    });
  });
}

function chooseProductQuantity() {
  let num = 0;
  quantityButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (e.target.dataset.quantity === "less" && num > 0) {
        num -= 1;
        quantityNumber.innerText = num;
      } else if (e.target.dataset.quantity === "more") {
        num += 1;
        quantityNumber.innerText = num;
      }
    });
  });
}
