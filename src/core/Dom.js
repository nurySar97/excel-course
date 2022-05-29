class Dom {
  constructor(selector) {
    this.$element = typeof selector === 'string'
        ? document.querySelector(selector)
        : selector;
  }


  html(html) {
    if (typeof html === 'string') {
      this.$element.innerHTML = html;
    }

    return this.$element.outerHTML;
  }


  clear() {
    this.html('');

    return this;
  }


  append(node) {
    if (node instanceof Dom) {
      node = node.$element;
    }

    if (Element.prototype.append) {
      this.$element.append(node);
    } else {
      this.$element.appendChild(node);
    }

    return this;
  }


  on(eventType, callback=()=>{}) {
    this.$element.addEventListener(eventType, callback);
    return this
  }


  off(eventType, callback=()=>{}) {
    this.$element.removeEventListener(eventType, callback);
    return this
  }

  css(style) {
    Object.assign(this.$element.style, style)
  }

  defaultCss() {
    this.removeAttribute('style')
  }

  closest(selector ='') {
    return $(this.$element.closest(selector));
  }

  setAttribute(key, value) {
    this.$element.setAttribute(key, value)
  }

  removeAttribute(attr) {
    this.$element.removeAttribute(attr);
  }

  get getCoords() {
    return this.$element.getBoundingClientRect();
  }

  get offsetParent() {
    return $(this.$element.offsetParent);
  }
}


export function $(selector) {
  return new Dom(selector);
}


$.create = (tagName = 'div', classNames = '') => {
  const $element = document.createElement(tagName);

  if (classNames) {
    $element.classList.add(classNames);
  }

  return $($element);
}
