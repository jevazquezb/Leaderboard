const displayPlayer = (player) => {
  const uList = document.querySelector('ul');

  const playerCont = document.createElement('li');
  playerCont.classList.add('font-size');
  playerCont.textContent = `${player.user}: ${player.score}`;

  uList.appendChild(playerCont);
};

export { displayPlayer as default };