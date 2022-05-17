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
