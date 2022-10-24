'use strict';
console.log('uzd3.js');



// Sukurk du input - į vieną įrašysi savo vardą, į kitą - amžių. Jei daugiau nei 18 - išmeta h1 elemente "Vairuoti gali: [vardas]"; jei nėra išmeta: "Dar mokysis vairuotis: [vardas]".



const htmlElements = {
    h1: document.querySelector('h1'),
    form: document.forms[0],
};

htmlElements.form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('js is in control');
    const ageFromInput = htmlElements.form.elements.age.valueAsNumber;
    const nameFromInput = htmlElements.form.elements.vardas.value;
    console.log('ageFromInput ===', ageFromInput);
    if (ageFromInput >= 18) {
        htmlElements.h1.textContent = `${nameFromInput} gali vairuoti. `;
    } else {
        htmlElements.h1.textContent = `${nameFromInput} dar mokysis vairuoti ${18 - ageFromInput} metus.`;
    }
    
    htmlElements.form.reset();
});