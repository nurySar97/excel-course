import {$} from '@core';

export class Excel {
  constructor(selector = '#root', options = {components: []}) {
    this.$initExcelElement = $(selector);

    this.components = options.components;
  }


  getRoot() {
    const $root = $.create('div', 'excel');

    this.components = this.components.map(Component => {
      const $element = $.create('div', Component.className);

      const component = new Component($element);

      $element.html(component.toHTML());

      $root.append($element);

      return component;
    });

    return $root;
  }


  render() {
    this.$initExcelElement.append(this.getRoot());

    this.components.forEach(component => component.init());
  }
}
