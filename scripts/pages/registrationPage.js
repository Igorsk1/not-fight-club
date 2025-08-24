import { createDomElement, createInput } from "../createDomElement.js";
import { navigate } from "../routing.js";
import { renderControlsPanel } from "../layout.js";
import { savePlayerInfo } from "../localStorage.js";
import { createPlayer } from "../players.js";
import { gameContent } from "../layout.js";

export function registrationPage() {
  const registerContainer = createDomElement({
    classes: ['register-container'],
    parent: gameContent,
  });

  const registerForm = createDomElement({
    classes: ['register-form'],
    parent: registerContainer,
  });

  createDomElement({
    tag: 'p',
    classes: ['register-form-tite'],
    text: 'Create your Hero',
    parent: registerForm,
  });

  const registerLabel = createDomElement({
    tag: 'label',
    classes: ['register-form-label'],
    parent: registerForm,
  });

  createDomElement({
    tag: 'span',
    text: 'Enter name',
    classes: ['register-form-span'],
    parent: registerLabel,
  });

  const input = createInput({
    type: 'text',
    attrs: {
      required: "",
    },
    classes: ['register-form-input'],
    parent: registerLabel,
  });

  function handleRegisterBtn() {
    const name = input.value;
    const player = createPlayer(name);
    savePlayerInfo(player);
    renderControlsPanel();
    navigate('/');
  }

  createDomElement({
    tag: 'button',
    text: 'Create Hero',
    classes: ['register-form-btn'],
    parent: registerForm,
    onClick: () => handleRegisterBtn()
  });

  return registerContainer;
}