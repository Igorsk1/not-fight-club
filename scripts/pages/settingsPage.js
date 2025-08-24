import { createDomElement, createInput } from "../utils.js";
import { getPlayerInfo, savePlayerInfo } from "../localStorage.js";
import { gameContent } from "../layout.js";

export function settingsPage() {
  const settingsContainer = createDomElement({
    classes: ['settings-container'],
    parent: gameContent,
  });

  const FieldWrapper = createDomElement({
    classes: ['settings-field-wrapper'],
    parent: settingsContainer,
  });

  createDomElement({
    tag: "span",
    text: "Change player's name",
    classes: ['settings-title'],
    parent: FieldWrapper,
  });

  const player = getPlayerInfo();

  const nameInput = createInput({
    type: "text",
    value: player.name || '',
    classes: ['settings-input'],
    parent: FieldWrapper,
    attrs: {
      disabled: ""
    }
  });

  const editBtn = createDomElement({
    tag: "button",
    text: "Edit",
    classes: ['settings-btn'],
    parent: FieldWrapper,
  });

  function handleEditBtn() {
    if (nameInput.hasAttribute('disabled')) {
      nameInput.removeAttribute("disabled");
      editBtn.textContent = 'Save';
    } else {
      nameInput.setAttribute("disabled", "");
      editBtn.textContent = 'Edit';
      player.name = nameInput.value;
      savePlayerInfo(player);
      console.log(player);
    }
  }

  function handleNameInput() {
    nameInput.addEventListener("input", () => {
      if (nameInput.value.trim().length > 0) {
        editBtn.removeAttribute("disabled");
      } else {
        editBtn.setAttribute("disabled", "");
      }
    });
  }

  nameInput.addEventListener("input", handleNameInput);
  editBtn.addEventListener("click", handleEditBtn);

  return settingsContainer;
}