const fixedImg = document.querySelector('#fixed_img');

let aLine = document.querySelectorAll('#a_line')
let aboutMeH4 = document.querySelectorAll('#about_me h4')

document.addEventListener("DOMContentLoaded", function() {
        fixedImg.style.transform = "translateY(" + window.pageYOffset / 1.6 + "px)"
    document.body.onscroll = function() {
        fixedImg.style.transform = "translateY(" + window.pageYOffset / 1.6 + "px)"

        if(window.scrollY > window.innerHeight/1.382) {
            for(i = 0; i < aboutMeH4.length; ++i) {
                aboutMeH4[i].classList.add('show_h4')
            }
            
            document.querySelector('#up_line').classList.add('up_line_hidden')
            
            for(i = 0; i < aLine.length; ++i) {
                aLine[i].classList.add('a_line_hidden')
            }
        } else {
            
            document.querySelector('#up_line').classList.remove('up_line_hidden')
            
            for(i = 0; i < aLine.length; ++i) {
                aLine[i].classList.remove('a_line_hidden')
            }
        }
    }
})