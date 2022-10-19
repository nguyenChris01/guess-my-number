'use strict';

// Initiliaze Variables
let scoreNum = 20;
let highScore = 0;
let secretNum = Math.trunc(Math.random() * 20) + 1;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('🚫 No Number!');
  }
  // When player wins
  else if (guess === secretNum) {
    displayMessage('🎉 Correct Number');
    document.querySelector('.number').textContent = secretNum;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (scoreNum > highScore) {
      highScore = scoreNum;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // When guess is wrong
  else if (guess !== secretNum) {
    if (scoreNum > 1) {
      displayMessage(guess > secretNum ? '📈 Too High' : '📉 Too Low');
      scoreNum--;
      document.querySelector('.score').textContent = scoreNum;
    } else {
      displayMessage('YOU LOST THE GAME');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  scoreNum = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = scoreNum;

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
