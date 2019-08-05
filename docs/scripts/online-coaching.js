if (window.location.pathname === '/online-coaching/' || window.location.pathname === '/golden-gym/online-coaching/') {
    let slideIndex = 1;
    let listItems = document.getElementsByClassName('testemonial-slideshow');
    listItems[slideIndex - 1].style.display = "block";

    setInterval(function () {
        let i;

        if (slideIndex > listItems.length) { slideIndex = 1 }

        for (i = 0; i < listItems.length; i++) {
            listItems[i].style.display = "none";
        }

        listItems[slideIndex - 1].style.display = "block";
        slideIndex++;

    }, 8000);
}