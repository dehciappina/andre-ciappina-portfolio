let userLang = navigator.language || navigator.userLanguage;

let changeLangBt = document.querySelector('#change_lang')

let elementosPt = document.querySelectorAll('.pt_vs');
let elementosEn = document.querySelectorAll('.en_vs');

let setPortuguese = function() {
    for(i = 0; i < elementosPt.length; ++i) {
        elementosPt[i].classList.remove('display_none');
    }
    for(i = 0; i < elementosEn.length; ++i) {
        elementosEn[i].classList.add('display_none');
    }
    pageSetPt = true;
}

let setEnglish = function() {
    for(i = 0; i < elementosPt.length; ++i) {
        elementosPt[i].classList.add('display_none');
    }
    for(i = 0; i < elementosEn.length; ++i) {
        elementosEn[i].classList.remove('display_none');
    }
    pageSetPt = false;
}

let pageSetPt;

if (userLang === "pt-BR") {
    setPortuguese()
} else {
    setEnglish()
}

changeLangBt.addEventListener('click', function() {
    if(pageSetPt === true) {
        setEnglish()
    } else {
        setPortuguese()
    }
})