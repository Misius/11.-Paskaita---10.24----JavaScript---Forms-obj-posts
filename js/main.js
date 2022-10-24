'use strict';
console.log('main.js');




const htmlEls = {
    form: document.forms.createPost,
    title: document.getElementById('title'),
    image: document.getElementById('image'),
    date: document.getElementById('date'),
    author: document.getElementById('author'),
    body: document.getElementById('body'),
    postsContainer: document.getElementById('postsContainer'),
  };
const initPostArr = [
    {title: 'HTML',
    image: '',
    date: '2022-01-05',
    author: '2',
    body: 'Css is design',
    },
    {title: 'HTML',
    image: '',
    date: '2022-01-05',
    author: '2',
    body: 'Css is design',
    },
    {title: 'HTML',
    image: '',
    date: '2022-01-05',
    author: '2',
    body: 'Css is design',
    }
];
initPosts(1).title; // CSS
function initPosts() {
    for (let onePost of initPostArr) {
        generatePost(onePost, htmlEls.postsContainer);
    }

};



const selectOptions = ['', 'James Bond', 'Serbentautas', 'Severijus klaida'];
function whichAuthorArr(id) {
    return selectOptions(3);
}
whichAuthorArr(3);

  
    // <option value="1">Jame Bond</option>
    // <option value="2">Serbentautas</option>
    // <option value="3">Severijus Klaida</option>

function whichAuthor() {
    let id = 2;
    // su if else arba switch
    switch (id) {
        case 1:
            console.log('James Bond');
            return 'James Bond';
        case 2:
            console.log('Serbentautas');
            return 'Serbentautas';
        case 3:
            console.log('Severijus Klaida');
            return 'Severijus Klaida';
    
    }
}

  // console.log('htmlEls ===', htmlEls);
  
  /**
   * Main app function
   */
  function init() {}
  
  // Event Listeners
  
  htmlEls.form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Js is in control');
  
    // sukurti formValues objekta
    const formValues = {
      title: htmlEls.title.value.trim(),
      image: htmlEls.image.value.trim(),
      date: htmlEls.date.value.trim(),
      author: htmlEls.author.value.trim(),
      body: htmlEls.body.value.trim(),
    };
    generatePost(formValues, htmlEls.postsContainer);
    // console.log('formValues ===', formValues);
  });
  
  /*
  <article class="card post">
    <img src="https://picsum.photos/id/1019/5472/3648" alt="sdsd">
    <h3 class="post__title">title</h3>
    <h4 class="post__author">Autorius: </h4>
    <p class="post__date">dsds</p>
    <p class="post__text">sdsd</p>
  </article>
  */
  
  function generatePost(valuesObj, dest) {
    const articleEl = document.createElement('article');
    articleEl.className = 'card post';
    dest.append(articleEl);
  
    // img create
    const imgEl = document.createElement('img');
    imgEl.src = valuesObj.image;
    imgEl.alt = valuesObj.title;
    articleEl.append(imgEl);
  
    crEl('h3', articleEl, 'post__title', valuesObj.title);
    whichAuthor(valuesObj.author);
    crEl('h4', articleEl, 'post__author', valuesObj.author);
    crEl('p', articleEl, 'post__date', valuesObj.date);
    crEl('p', articleEl, 'post__text', valuesObj.body);
    const deleteBtnEl = crEl('button', articleEl, 'deletePost', 'delete');
    deleteBtnEl.addEventListener('click', deletePost);
  }
  
  function deletePost(event) {
    console.log('deletePost funkcija');
    console.log('event.target ===', event.target);
    // istrinti event.target tevini elementa su .remove()
    event.target.parentElement
  }
  
  function crEl(tagName, dest, className, text) {
    const el = document.createElement(tagName);
    if (className) el.className = className;
    if (text || text === 0) el.textContent = text;
    dest.append(el);
    // console.log(el);
    return el;
  }