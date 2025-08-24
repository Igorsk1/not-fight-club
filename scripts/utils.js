export function createDomElement(options) {
  const {
    tag = "div",
    classes = [],
    src,
    alt,
    text = "",
    onClick,
    parent,
  } = options;

  const elem = document.createElement(tag);

  if (classes.length > 0) {
    elem.classList.add(...classes);
  }

  elem.textContent = text;

  if (src) {
    elem.src = `${src}`;
  }

  if (alt) {
    elem.alt = `${alt}`;
  }

  if (onClick) {
    elem.addEventListener("click", onClick);
  }

  if (parent) {
    parent.appendChild(elem);
  }

  return elem;
}

export function createInput(options) {
  const {
    type = "text",
    value = "",
    classes = [],
    parent,
    onClick,
    attrs = {},
  } = options;

  const input = document.createElement("input");
  input.type = type;
  input.value = value;

  if (classes.length > 0) {
    input.classList.add(...classes);
  }

  for (const [key, val] of Object.entries(attrs)) {
    input.setAttribute(key, val);
  }

  if (onClick) {
    input.addEventListener("click", onClick);
  }

  if (parent) {
    parent.appendChild(input);
  }

  return input;
}
