import {$} from '@core';

export class Excel {
  constructor(selector = '#root', options = {components: []}, rowCount=20) {
    this.$initExcelElement = $(selector);

    this.components = options.components;

    this.rowCount = rowCount;
  }


  getRoot() {
    const $root = $.create('div', 'excel');

    this.components = this.components.map(Component => {
      const $element = $.create('div', Component.className);

      const component = new Component($element, this.rowCount);

      const htmlComponent = component.toHTML();

      $element.html(htmlComponent);

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
