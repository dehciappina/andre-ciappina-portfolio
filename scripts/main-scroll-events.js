const fixedImg = document.querySelector('#fixed_img');

let aLine = document.querySelectorAll('#a_line')
let aboutMeH4 = document.querySelectorAll('#about_me h4')

document.addEventListener("DOMContentLoaded", function() {
        fixedImg.style.transform = "translateY(" + window.pageYOffset / 1.6 + "px)"
    document.body.onscroll = function() {
        fixedImg.style.transform = "translateY(" + window.pageYOffset / 1.6 + "px)"

        if(window.scrollY > window.innerHeight/2) {
            for(i = 0; i < aboutMeH4.length; ++i) {
                aboutMeH4[i].classList.add('show_h4')
            }
            
            document.querySelector('#up_line').style.transform = 'scaleY(' + 0 + ')'
            
            for(i = 0; i < aLine.length; ++i) {
                aLine[i].style.transform = 'translateX(0) scaleX(' + 0 + ')'
            }
        } else {
            
            document.querySelector('#up_line').style.transform = 'scaleY(' + 1 + ')'
            
            for(i = 0; i < aLine.length; ++i) {
                aLine[i].style.transform = 'translateX(0) scaleX(' + 1 + ')'
            }
        }
    }
})