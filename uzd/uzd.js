'use strict';
console.log('uzd.js');



// 1. Sukurk input į kurį įvestum savo vardą. Submit paspaudus - išoktų alert su tavo vardu.



// const htmlEls = {
//    input: document.getElementById('vardas'),
//    btn: document.getElementById('btn'),
// };

// console.log('htmlEls ===', htmlEls);

// htmlEls.btn.addEventListener('click',() => {
//     console.log('Pavyko');
//     const nameFromInput = htmlEls.input.value.trim();
//     alert(nameFromInput);
//     htmlEls.input.value = '';
// });


// 2. Sukurk input į kurį įvesi savo amžių. Padaryk, kad submit paspaudus, viršuj esančiame h1 elemente atsirastų "Tavo amžius: [amžius]".

const htmlElements = {
    // input: document.getElementById('age'),
    // btn: document.getElementById('btnAge'),
    h1: document.querySelector('h1'),
    form: document.forms[0],
 };
 
 console.log('htmlElements ===', htmlElements);


 htmlElements.form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Js is in control');
    const ageFromInput = htmlElements.form.elements.age.valueAsNumber;
    console.log('ageFromInput ===', ageFromInput);
    htmlElements.h1.textContent = `Tavo amžius yra: ${ageFromInput}`;
    htmlElements.form.reset();
 });


//  const htmlElements = {
//     h1: document.querySelector('h1'),
//     form: document.forms[0],
//   };
  
//   console.log('htmlElements ===', htmlElements);
  
//   htmlElements.form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.log('js is in control');
//     const ageFromInput = htmlElements.form.elements.name.valueAsNumber;
//     console.log('ageFromInput ===', ageFromInput);
//     htmlElements.h1.textContent = `Tavo amzius yra: ${ageFromInput}`;
//     htmlElements.form.reset();
//   });
 
//  htmlEls2.btn.addEventListener('click',() => {
//      console.log('Pavyko');
//      const ageFromInput = htmlEls2.input.value.trim();
//      h1.("Tavo amžius: ",ageFromInput);
//      htmlEls2.input.value = '';
//  });

// 3. Sukurk du input - į vieną įrašysi savo vardą, į kitą - amžių.


// 4. Sukurkite kino teatro kainos apskaičiavimo platformą.

// 5. Kai kuriose šalyse reikia eiti į kariuomenę,

// 6. Įmonė visiems savo darbuotojams duoda Kalėdų bonusą - 50 eurų. 

// 7. Kiek dienų šiais metais? Parašykite programą,

// 8. Parašyk programą, kurioje vartotojas įrašo temperatūra Celsijumi,

