import { createDomElement } from "../utils.js";
import { getPlayerInfo } from "../localStorage.js";
import { gameContent } from "../layout.js";

export function heroPage() {
  const heroContainer = createDomElement({
    classes: ['hero-container'],
    parent: gameContent,
  });

  const heroContent = createDomElement({
    classes: ['hero-content'],
    parent: heroContainer,
  });

  const avatarWrapper = createDomElement({
    classes: ['hero-avatar'],
    parent: heroContent,
  });

  const player = getPlayerInfo();

  createDomElement({
    tag: 'img',
    src: player.avatar || '',
    alt: 'player avatar',
    parent: avatarWrapper,
  })

  const heroInfo = createDomElement({
    classes: ['hero-info'],
    parent: heroContent,
  });

  createDomElement({
    tag: 'span',
    text: player.name || '',
    classes: ['hero-name'],
    parent: heroInfo,
  });

  const heroResults = createDomElement({
    tag: 'span',
    classes: ['hero-results'],
    parent: heroInfo,
  });

  createDomElement({
    tag: 'span',
    text: `Wins: ${player.wins}`,
    classes: ['hero-wins'],
    parent: heroResults,
  });

  createDomElement({
    tag: 'span',
    text: `Losses: ${player.losses}`,
    classes: ['hero-losses'],
    parent: heroResults,
  });

  createDomElement({
    tag: 'button',
    text: 'Change Avatar',
    classes: ['hero-btn'],
    parent: heroInfo,
  });

  return heroContainer;
}