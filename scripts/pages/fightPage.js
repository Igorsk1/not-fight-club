import { createDomElement, createInput } from "../createDomElement.js";
import { gameContent } from "../layout.js";
import { getPlayerInfo } from "../localStorage.js";
import { getRandomEnemy } from "../players.js";

const zones = ['Head', 'Neck', 'Body', 'Belly', 'Legs'];
let enemy = getRandomEnemy();

export function fightPage() {
  const fightContainer = createDomElement({
    classes: ['battle-container'],
    parent: gameContent,
  });

  const fightField = createDomElement({
    classes: ['fight-field'],
    parent: fightContainer,
  });

  function createPlayer(playerInfo) {
    const playerContainer = createDomElement({
      classes: ['player-container'],
      parent: fightField
    });

    createDomElement({
      tag: 'span',
      text: playerInfo.name || '',
      classes: ['player-name'],
      parent: playerContainer
    });

    createDomElement({
      tag: 'img',
      src: playerInfo.avatar || '',
      alt: 'avatar img',
      classes: ['player-avatar'],
      parent: playerContainer
    });

    const healthbarContainer = createDomElement({
      classes: ['player-healthbar-container'],
      parent: playerContainer
    });

    createInput({
      type: 'range',
      attrs: {
        value: playerInfo.health,
        max: playerInfo.health
      },
      classes: ['player-healthbar-input'],
      parent: healthbarContainer
    });

    const healthbarLevel = createDomElement({
      tag: 'div',
      text: ` / ${playerInfo.health}`,
      classes: ['player-healthbar-level'],
      parent: healthbarContainer
    });

    const currLevel = createDomElement({
      tag: 'span',
      text: `${playerInfo.health}`,
      classes: ['player-healthbar-current'],
    });

    healthbarLevel.prepend(currLevel);

    return playerContainer;
  }

  const player = getPlayerInfo();
  createPlayer(player);

  console.log(player);

  const battleControls = createDomElement({
    classes: ['fight-controls-container'],
    parent: fightField
  });

  createDomElement({
    tag: 'p',
    text: 'Choose 1 defence zone and 2 attack zones',
    classes: ['fight-controls-title'],
    parent: battleControls
  });

  const zonesContainer = createDomElement({
    classes: ['fight-controls-zones'],
    parent: battleControls
  });

  function createZoneSelect(name) {
    const zone = createDomElement({
      classes: [`fight-controls-${name.toLowerCase()}`],
      parent: zonesContainer
    });

    createDomElement({
      tag: 'p',
      text: `${name} Zones`,
      classes: ['fight-controls-title'],
      parent: zone
    });

    zones.forEach((z) => {
      createDomElement({
        tag: 'button',
        text: z,
        classes: ['fight-controls-btn'],
        parent: zone,
      });
    })

    return zone;
  }

  const attackZone = createZoneSelect('Attack');

  let attackZonesCount = 0;
  let defenceZonesCount = 0;

  function handleZoneBtns(e, activeCount) {
    const btn = e.target.closest('.fight-controls-btn');
    if (!btn) return activeCount;
    if (btn.classList.contains('active')) {
      activeCount--;
    } else {
      activeCount++;
    }
    btn.classList.toggle('active');

    return activeCount;
  }

  const defenceZone = createZoneSelect('Defence');

  const fightBtn = createDomElement({
    tag: 'button',
    text: 'Fight',
    classes: ['fight-controls-btn'],
    parent: battleControls,
    onClick: () => {
      startFight(player, enemy, zones);
    }
  });

  fightBtn.setAttribute("disabled", "");

  const popupWrapper = createDomElement({
    classes: ['popup-wrapper', 'hidden'],
    parent: fightContainer,
    onClick: (e) => {
      if (!e.target.closest('.popup')) hidePopup(popupWrapper)
    }
  })

  const popup = createDomElement({
    classes: ['popup'],
    parent: popupWrapper
  })

  const closeBtn = createDomElement({
    classes: ['close-btn'],
    parent: popup,
    onClick: () => hidePopup(popupWrapper)
  })

  createDomElement({
    tag: 'span',
    classes: ['close-btn-line'],
    parent: closeBtn
  })

  createDomElement({
    tag: 'span',
    classes: ['close-btn-line'],
    parent: closeBtn
  })

  createDomElement({
    tag: 'p',
    classes: ['popup-message'],
    parent: popup
  })

  attackZone.addEventListener("click", (e) => {
    attackZonesCount = handleZoneBtns(e, attackZonesCount);
    console.log(attackZonesCount);
    toggleFightBtn();
  });

  defenceZone.addEventListener("click", (e) => {
    defenceZonesCount = handleZoneBtns(e, defenceZonesCount);
    console.log(defenceZonesCount);
    toggleFightBtn();
  });

  function toggleFightBtn() {
    if (attackZonesCount === 1 && defenceZonesCount === 2) {
      fightBtn.removeAttribute("disabled", "");
    } else {
      fightBtn.setAttribute("disabled", "");
    }
  }

  createPlayer(enemy);

  createDomElement({
    classes: ['log-container'],
    parent: fightContainer,
  });

  return fightContainer;
}