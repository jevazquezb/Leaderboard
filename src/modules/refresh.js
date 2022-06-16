import removeAllChildElements from './remove_dom.js';
import { retrieveScore } from './api_score.js';
import displayPlayer from './display.js';

export default function refresh(url) {
  const uList = document.querySelector('ul');
  removeAllChildElements(uList);

  const data = retrieveScore(url);
  data.then(players => {
    players.forEach((player) => displayPlayer(player));
  });
}