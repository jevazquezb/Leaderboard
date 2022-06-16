import './styles/reset.css';
import './styles/style.css';

// import newGame from './modules/newgame.js'
import { sendScore } from './modules/api_score.js';
import refresh from './modules/refresh.js';

const gameName = 'My first game';
const baseLink = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

//newGame(gameName, baseLink);

const gameId = '6OWBy4EcFFE5EWjho928';
const scoreLink = `${baseLink}${gameId}/scores/`;

const update = document.querySelector('#refresh');
const userInput = document.querySelector('#user-input');
const scoreInput = document.querySelector('#score-input');
const form = document.querySelector('form');
const addMsg = document.querySelector('#add-msg');

window.addEventListener('load', () => {
  refresh(scoreLink);
});
update.addEventListener('click', () => {
  refresh(scoreLink);
});
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const newScore = sendScore(userInput.value, +scoreInput.value, scoreLink);
  newScore.then((msg) => {
    addMsg.textContent = msg;
    refresh(scoreLink);
  });
  e.target.reset();
  setTimeout(() => addMsg.textContent = '', 5000);  
});
