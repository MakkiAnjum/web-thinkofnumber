const guessBtn = document.querySelector('#guess-btn');
const restartBtn = document.querySelector('#restart-btn');

const msgPlaceholder = document.querySelector('#msg');
const attemptMsgPlaceholder = document.querySelector('#attempt-msg');
const msgBox = document.querySelector('#msg-box');

const guessInput = document.querySelector('#guess-input');

let numberOfGuesses = 0;
let restart = false;

console.log('Guess Btn: ', guessBtn)
console.log('Restart Btn: ', restartBtn)
console.log('Guess Input: ', guessInput)

// generate random 
const generateRandom = () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1
  console.log("random number: ", randomNumber);
  return randomNumber;
};

// handle guess button
const handleGuessBtn = (guessInput, randomNumber) => {
  console.log("Handle guess btn is called", guessInput.value);

  numberOfGuesses++;
  attemptMsgPlaceholder.innerHTML = `You have had ${numberOfGuesses} guesses`;

  const difference = Math.abs(randomNumber - guessInput.value);
  console.log('difference: ', difference)

  if (guessInput.value > randomNumber) {
    msgPlaceholder.innerHTML = 'Guess is too high. Please try again.'
  } else if (guessInput.value < randomNumber) {
    msgPlaceholder.innerHTML = 'Guess is too low. Please try again.'
  } else {
    msgPlaceholder.innerHTML = 'Your guess is correct. <br> Game will be restarted in 5 seconds.';
    msgPlaceholder.style.color = 'white';
    attemptMsgPlaceholder.style.color = 'white';
  }

  if (guessInput.value <= 100 && guessInput.value >= 1) {
    if (difference === 0) {
      msgBox.style.backgroundColor = 'green';
      correctGuess();
    }

    else if (difference < 10) {
      console.log('in red')
      msgBox.style.backgroundColor = 'red';
      msgPlaceholder.style.color = 'white';
      attemptMsgPlaceholder.style.color = 'white';
      return;
    }

    else if (difference > 30) {
      console.log('in blue')
      msgBox.style.backgroundColor = 'blue';
      msgPlaceholder.style.color = 'white';
      attemptMsgPlaceholder.style.color = 'white';
    }

    else {
      console.log('in white')
      msgBox.style.backgroundColor = 'white';
      msgPlaceholder.style.color = 'black';
      attemptMsgPlaceholder.style.color = 'black';
    }
  }
};

// handle restart button
const handleRestartBtn = () => {
  numberOfGuesses = 0;

  console.log("Handle restart btn is called");
  location.reload();
};

const correctGuess = () => {
  setTimeout(() => {
    handleRestartBtn();
  }, 5000);
};

window.onload = function () {
  const randomNumber = generateRandom();

  guessBtn.addEventListener('click', function () {
    handleGuessBtn(guessInput, randomNumber);
  })

  restartBtn.addEventListener('click', handleRestartBtn)
};


// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}
