function myFunction(x) {
    x.classList.toggle("change");

    var nav = document.getElementsByClassName("site-nav")[0];
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
}
