
document.addEventListener("DOMContentLoaded", function() {
    let aLine = document.querySelectorAll('#a_line')

    setTimeout(() => {
        document.querySelector('#a_svg').classList.add('hidden')
        document.querySelector('#start_anim').classList.add('hidden')
    
        setTimeout(() => {
            document.querySelector('#up_line').style.transform = 'scaleY(' + 1 + ')'
            
            for(i = 0; i < aLine.length; ++i) {
                aLine[i].style.transform = 'translateX(0) scaleX(' + 1 + ')'
            }
        }, 1100);
    }, 100);
})