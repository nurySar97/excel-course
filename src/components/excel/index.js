import {$} from '@core';

export class Excel {
  constructor(selector = '#root', options = {components: []}) {
    this.$el = document.querySelector(selector)
    this.components = options.components;
  }

  getRoot() {
    const $root = $.create('div', 'excel');

    this.components.forEach(Component => {
      const $el = $.create('div', Component.className);
      const component = new Component($el);
      $el.html(component.toHTML());
      $root.append($el);
    });

    return $root.$element
  }

  render() {
    return this.$el.append(this.getRoot())
  }
}
