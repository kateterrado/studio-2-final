const navNode = document.querySelector('nav');
const trumpWordBox = document.querySelector('.TrumpWord');
const trumpTweetBox = document.querySelector('.TrumpSpeech');
const trumpTitleBox = document.querySelector('h1');

const navItems = trumpWords
  .map(
    entry =>
      `<span class="nav-item" style="margin-right: 8px"data-word="${entry.word}">${entry.word}</span>`
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
  const trumpText = trumpWords.filter(entry => entry.word === currentWord);
  trumpWordBox.innerHTML = trumpText[0].context;
  trumpTweetBox.innerHTML = trumpText[0].tweet;
  trumpTitleBox.innerHTML = trumpText[0].word;
};

window.addEventListener('click', changeWord);