class Dom {

}

export function $() {
  return new Dom();
}

$.create = (tagName = 'div', classNames = '') => {
  const $element = document.createElement(tagName);
  if (classNames) {
    $element.classList.add(classNames);
  }
  return $element
}
