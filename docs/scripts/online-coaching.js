if (window.location.pathname === '/online-coaching/'
    || window.location.pathname === '/golden-gym/online-coaching/') {
    let slideIndex = 1;
    let listItems = document.getElementsByClassName('testemonial-slideshow');
    let dots = document.getElementsByClassName('dot');

    listItems[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    let changeSlideInterval = setInterval(intervalFunction, 6000);

    function changeSlide() {
        let i;

        if (slideIndex > listItems.length) { slideIndex = 1 }

        for (i = 0; i < listItems.length; i++) {
            listItems[i].style.display = "none";
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        listItems[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    function intervalFunction() {
        changeSlide();

        slideIndex++;
    }

    function currentSlide(n) {
        changeSlide(slideIndex = n);

        clearInterval(changeSlideInterval);

        changeSlideInterval = setInterval(intervalFunction, 6000);
    }

}