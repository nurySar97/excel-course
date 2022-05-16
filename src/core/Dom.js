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
    if (Element.prototype.append) {
      this.$element.append(node.$element)
    } else {
      this.$element.appendChild(node.$element)
    }
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
  return $($element)
}
