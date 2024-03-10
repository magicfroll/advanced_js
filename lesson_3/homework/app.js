"use strict";

const addReviewBtn = document.querySelector('.addReview-btn');
const inputProduct = document.querySelector('.productName-input');
const inputReview = document.querySelector('.review');
const reviewContainer = document.querySelector('.reviewContainer')

function addReview() {
    const keys = Object.keys(localStorage);
    if (localStorage.length > 0) {
        let add = false;
        for(let i = 0; i < localStorage.length; i++) {
            console.log(keys[i]);
            if (keys[i] === inputProduct.value) {
                let storageReview = localStorage.getItem(keys[i]);
                console.log(storageReview);
                let newReview = storageReview + '-' + inputReview.value;
                console.log(newReview);            
                localStorage.setItem(inputProduct.value, newReview);
                add = true;
            }
            if (!add) {
                localStorage.setItem(inputProduct.value, inputReview.value);
            }            
        }
    } else {
        localStorage.setItem(inputProduct.value, inputReview.value);
    }    
}

if (addReviewBtn) {
    addReviewBtn.addEventListener('click', addReview);
}

function reviewList() {
    const keys = Object.keys(localStorage);
    const values = Object.values(localStorage);
    
    for(let i = 0; i < localStorage.length; i++) {
        const productDiv = document.createElement('div');
        productDiv.className = keys[i]
        reviewContainer.appendChild(productDiv) 
        const productBtn = document.createElement('button');
        productBtn.className = `${keys[i]}-btn`;
        productBtn.innerHTML = keys[i]
        productDiv.appendChild(productBtn) 
        const p = document.createElement('p');
        p.textContent - '';  
        productDiv.appendChild(p); 
        productBtn.addEventListener('click', () => {
            const reviews = values[i].split('-');
            reviews.forEach(element => {
                let reviewDiv = document.createElement('div');
                productDiv.appendChild(reviewDiv);
                const p = document.createElement('p');
                p.textContent = element;
                reviewDiv.appendChild(p);
                let deleteReviewBtn = document.createElement('button');
                deleteReviewBtn.className = `${keys[i]}_delete-btn`;
                deleteReviewBtn.textContent = 'Удалить';
                reviewDiv.appendChild(deleteReviewBtn);
                const p1 = document.createElement('p');
                p1.textContent - '';  
                reviewDiv.appendChild(p1); 
                deleteReviewBtn.addEventListener('click', () => {
                    let newReviews = reviews.filter(elem => elem !== element);
                    newReviews = newReviews.join('-');
                    localStorage.setItem(keys[i], newReviews);
                    reviewDiv.remove();                    
                })                
            })
        })
    }
}
reviewList();






