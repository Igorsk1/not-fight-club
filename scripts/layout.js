import { createDomElement } from "./utils.js";
import { navigate } from "./routing.js";
import { getPlayerInfo } from "./localStorage.js";

const root = document.getElementById('root');

const gameContainer = createDomElement({
  classes: ['game-container'],
  parent: root,
})

export function renderControlsPanel() {
  const controlsPanel = createDomElement({
    classes: ['controls-panel'],
  })

  const controlBtns = [
    { text: 'Main', onClick: () => navigate("/") },
    { text: "Hero", onClick: () => navigate("/hero") },
    { text: "Settings", onClick: () => navigate("/settings") }
  ]

  controlBtns.forEach((btn) => {
    createDomElement({
      tag: 'button',
      text: btn.text,
      classes: ['controls-btn'],
      onClick: btn.onClick,
      parent: controlsPanel
    });
  })

  gameContainer.prepend(controlsPanel);
}

const player = getPlayerInfo();

if (player) {
  renderControlsPanel();
}

export const gameContent = createDomElement({
  classes: ['game-content'],
  parent: gameContainer,
})