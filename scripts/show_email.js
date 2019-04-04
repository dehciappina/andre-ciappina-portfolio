const outArea = document.querySelector("#out_area")
const emailForm = document.querySelector('#form_container')

const emailButton = document.querySelector('.email_bt')

let showingForm = false;

let alternarEmail = function() {

    if(showingForm === false) {
        outArea.style.display = "initial";
        emailForm.classList.add('hide_form')
        showingForm = true;
    } else {
        outArea.style.display = "none";
        emailForm.classList.remove('hide_form')
        showingForm = false;
    }
}

emailButton.addEventListener('click', alternarEmail)
outArea.addEventListener('click', alternarEmail)