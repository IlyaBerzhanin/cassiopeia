'use strict';

const firstHiddenGallery = document.querySelector('#first-hidden-gallery')
const secondHiddenGallery = document.querySelector('#second-hidden-gallery')
const seeMoreButton = document.querySelector('.see-more-button')

initializeCatalogWork()

function initializeCatalogWork() {
    addGallery()
}


function addGallery() {
    seeMoreButton.addEventListener('click', () => {
       firstHiddenGallery.classList.remove('first-hidden-gallery')
       secondHiddenGallery.classList.remove('second-hidden-gallery')
    })
}