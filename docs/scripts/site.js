let slideIndex = 1;

if (window.location.pathname === '/' || window.location.pathname === '/golden-gym/') {
    const prevButton = document.getElementsByClassName('prev')[0];
    const nextButton = document.getElementsByClassName('next')[0];

    prevButton.addEventListener('click', function () {
        plusSlides(-1);
    }, false);
    nextButton.addEventListener('click', function () {
        plusSlides(1);
    }, false);

    showSlides(slideIndex);
}

window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementsByTagName('body')[0].classList.add('loaded');
});

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("site-main-background");

    if (n > slides.length) { slideIndex = 1 }

    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}



