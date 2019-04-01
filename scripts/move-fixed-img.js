const fixedImg = document.querySelector('#fixed_img');

document.addEventListener("DOMContentLoaded", function() {
        fixedImg.style.transform = "translateY(" + window.pageYOffset / 1.6 + "px)"
    document.body.onscroll = function() {
        fixedImg.style.transform = "translateY(" + window.pageYOffset / 1.6 + "px)"
    }
})