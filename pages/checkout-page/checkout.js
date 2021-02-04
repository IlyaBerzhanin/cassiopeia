"use strict";

const processDashes = document.querySelectorAll(".active-dash path");
const processBlocks = document.querySelectorAll(".current-stages__item");
const processBlockActiveCircles = document.querySelectorAll(
  ".moving-outline circle"
);
const processBlockDisabledCircles = document.querySelectorAll(".track-outline");
const processBlockNumbers = document.querySelectorAll(".process-number");
const paymentButton = document.querySelector(".delivery__buttons__second");

const quantityButtons = document.querySelectorAll(".counter__button");
let quantityNumber = document.querySelector("#checkout-quantity-number");

const orderTotal = document.querySelector('.header-title')
const productPrice = document.querySelector('.product-price')
const totalPrice = document.querySelector('#total-price')

const deliveryMethods = document.querySelectorAll('.methods__item')

initializeCheckoutPageWork();

function initializeCheckoutPageWork() {
  initializeProcessStages();
  chooseProductQuantity()
  chooseDeliveryMethod()
}

function initializeProcessStages() {
  let i = 0;
  window.addEventListener("load", () => {
    activateStageCompletely(
      processBlocks[i],
      processBlockActiveCircles[i],
      processBlockDisabledCircles[i],
      processBlockNumbers[i],
      processDashes[i]
    );

    activateStageByHalf(processDashes[i], processBlocks[i + 1]);

    

    paymentButton.addEventListener('click', () => {
        i = 1;
        if(processBlocks[i].classList.contains('activated-text-color')) {
            console.log('already');
        }
        else {
            activateStageCompletely(
                processBlocks[i],
                processBlockActiveCircles[i],
                processBlockDisabledCircles[i],
                processBlockNumbers[i],
                processDashes[i]
              );
          
              activateStageByHalf(processDashes[i], processBlocks[i + 1]);
        }
    })
  });
}

function activateStageCompletely(
  block,
  activeCircle,
  disabledCircle,
  number,
  dash
) {
  block.classList.add("scaled-item");

  block.addEventListener("transitionend", (e) => {
    activeCircle.classList.add("paint-circle");

    activeCircle.addEventListener("animationend", (e) => {
      block.classList.add("activated-text-color");
      disabledCircle.classList.add("activated-circle-bg");
      number.classList.add("activated-circle-number");

      disabledCircle.addEventListener('transitionend', () => {
        block.classList.remove("scaled-item");
        dash.classList.add("activate-dash");
      })
    });
  });
}

function activateStageByHalf(dash, block) {
  dash.addEventListener("animationend", (e) => {
    block.classList.add("scaled-item");
    block.addEventListener("transitionend", (e) => {
      block.classList.add("half-disabled");
      block.addEventListener("transitionend", (e) => {
        block.classList.remove("scaled-item");
      });
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

        orderTotal.innerText = `Order total (${quantityNumber.innerText})`

        let totalResult = Number(quantityNumber.innerText) * parseInt(productPrice.innerText)
        totalPrice.innerText = `${totalResult}$`
      });
    });
  }
  
function chooseDeliveryMethod() {
    deliveryMethods.forEach(method => {
        method.addEventListener('click', e => {
           deliveryMethods.forEach(m => {
            m.classList.remove('active-method')
           })
           e.currentTarget.classList.add('active-method')
        })
    })
}






























//    deliveryBlock.addEventListener('click', e => {
//         processBlocks[0].classList.add('scaled-item')

//         processBlocks[0].addEventListener('transitionend', e => {
//             processBlockActiveCircles[0].classList.add('paint-circle')

//             processBlockActiveCircles[0].addEventListener('animationend', e => {
//                 processBlocks[0].classList.add('activated-text-color')
//                 processBlockDisabledCircles[0].classList.add('activated-circle-bg')
//                 processBlockNumbers[0].classList.add('activated-circle-number')

//                 if(processBlocks[0].classList.contains('activated-text-color')) {
//                     processBlocks[0].classList.remove('scaled-item')
//                     processBlocks[0].addEventListener('transitionend', e => {
//                         processDashes[0].classList.add('activate-dash')

//                         processDashes[0].addEventListener('animationend', e => {
//                             processBlocks[1].classList.add('scaled-item')
//                             processBlocks[1].addEventListener('transitionend', e => {
//                                 processBlocks[1].classList.add('half-activated-text-color')
//                                 processBlocks[1].addEventListener('transitionend', e => {
//                                     processBlocks[1].classList.remove('scaled-item')
//                                 })
//                             })
//                         })
//                     })
//                 }
//             })
//         })
//    })
