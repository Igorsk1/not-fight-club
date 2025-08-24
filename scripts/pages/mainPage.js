import { createDomElement } from "../utils.js";
import { gameContent } from "../layout.js";
import { navigate } from "../routing.js";

export function mainPage() {
  const mainContainer = createDomElement({
    classes: ['main-container'],
    parent: gameContent,
  });

  createDomElement({
    tag: 'button',
    text: 'Start Fight!',
    classes: ['main-container-btn'],
    onClick: () => {
      navigate('/fight')
    },
    parent: mainContainer,
  });

  return mainContainer;
}