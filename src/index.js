import './styles/reset.css';
import './styles/style.css';
import displayPlayer from './modules/display.js';

const players = [
  { name: 'Tom', score: 100 },
  { name: 'Andrés', score: 20 },
  { name: 'David', score: 50 },
  { name: 'Dino', score: 78 },
  { name: 'Daril', score: 125 },
  { name: 'Jesús', score: 77 },
  { name: 'Alfred', score: 42 },
];

players.forEach((player) => displayPlayer(player));
