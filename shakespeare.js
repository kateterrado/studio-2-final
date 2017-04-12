const navNode = document.querySelector('nav');
const trumpWordBox = document.querySelector('.TrumpWord');
const trumpTweetBox = document.querySelector('.TrumpSpeech');
const trumpTitleBox = document.querySelector('h1');
const pageTop = document.querySelector('#page-top');

const navItems = trumpWords
  .map(
    entry =>
      `<div class="nav-item" data-word="${entry.word}">${entry.word}</div>`

  )
  .slice(0, 10)
  .join('');



let currentWord = 'bigly';

navNode.innerHTML = navItems;

const changeWord = e => {
  if (e.target.parentNode !== navNode) {
    return;
  }

  currentWord = e.target.dataset.word;
  document.body.scrollTop = 0;

  const trumpText = trumpWords.filter(entry => entry.word === currentWord);
  const t = ["#",trumpText[0].word," "].join("");
  console.log(t)
  const pageIdText = document.getElementById(trumpText[0].word);
  console.log(pageIdText.getBoundingClientRect().top)
  const elem_top = pageIdText.getBoundingClientRect().top-200;
  // pageIdText.top = pageIdText.getBoundingClientRect().top
  document.body.scrollTop = elem_top;
  // trumpWordBox.innerHTML = trumpText[0].context;
  // trumpTweetBox.innerHTML = trumpText[0].tweet;
  // trumpTitleBox.innerHTML = trumpText[0].word;
};

const contItems = trumpWords
  .map(
    entry =>
      `<div class="contentParagraph" id="${entry.word}" data-word="${entry.word}">
      <div class="item"> 
      <h3> ${entry.word}</h3>
      <div class="context"> ${entry.context} </div>
      <div class="tweet"> ${entry.tweet} </div>
      </div>

      </div>`

  )
  .slice(0, 100)
  .join('');


  function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}




pageTop.innerHTML = contItems;

window.addEventListener('click', changeWord);