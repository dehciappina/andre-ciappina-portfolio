var userLang = navigator.language || navigator.userLanguage;

let elementosPt = document.querySelectorAll('.pt_vs');
let elementosEn = document.querySelectorAll('.en_vs');

let setPortuguese = function() {
    for(i = 0; i < elementosPt.length; ++i) {
        elementosPt[i].classList.remove('display_none');
    }
    for(i = 0; i < elementosEn.length; ++i) {
        elementosEn[i].classList.add('display_none');
    }
}

let setEnglish = function() {
    for(i = 0; i < elementosPt.length; ++i) {
        elementosPt[i].classList.add('display_none');
    }
    for(i = 0; i < elementosEn.length; ++i) {
        elementosEn[i].classList.remove('display_none');
    }
}

let pageSetPt;

if (userLang === "pt-BR") {
    pageSetPt = true;
    setPortuguese()
} else {
    pageSetPt = false;
    setEnglish()
}