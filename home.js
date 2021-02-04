"use strict";
let firstGalleryContainer = document.querySelector(".first-gallery__items");

let leftArrow = document.getElementById("left-arrow");
let rightArrow = document.getElementById("right-arrow");
let secondGalleryItems = document.querySelectorAll(
  ".second-gallery__items .item"
);
let secondGalleryContainer = document.querySelector(".second-gallery__items");
let position = 0;
let width = 300;

initializeSlider();

function initializeSlider() {
  slideGalleryWithClick(leftArrow);
  slideGalleryWithClick(rightArrow);
}

function slideGalleryWithClick(button) {
  button.addEventListener("click", (e) => {
    if (button === leftArrow) {
      position += width;
      position = Math.min(position, 0);
    } else {
      position -= width;
      position = Math.max(position, -width * (secondGalleryItems.length - 4));
    }
    secondGalleryContainer.style.marginLeft = position + "px";
  });
}


chooseProduct()

function chooseProduct() {
  const products = document.querySelectorAll('.item') 

  products.forEach(prod => {
    prod.addEventListener('click', e => {
    
      if(e.target.classList.contains('second-icon')) {
        console.log(e.target);
      }
    })
  })
}