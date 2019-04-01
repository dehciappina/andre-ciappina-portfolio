

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('#a_svg').classList.add('hidden')
    document.querySelector('#start_anim').classList.add('hidden')

    document.body.onscroll = function() {
          document.querySelector('#fixed_img').style.transform = "translateY(" + window.pageYOffset / 1.6 + "px)"
    }
})