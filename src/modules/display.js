export default function displayPlayer(player) {
  const uList = document.querySelector('ul');

  const playerCont = document.createElement('li');
  playerCont.textContent = `${player.name}: ${player.score}`;

  uList.appendChild(playerCont);
}