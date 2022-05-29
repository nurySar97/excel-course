import {DomListener} from '@core';

export class ExcelComponent extends DomListener {
  constructor($root, options={listeners: [], name: ''}) {
    super($root, options.listeners);
    this.name = options.name;
  }

  toHTML() {
    return `<h1>ExcelComponent</h1>`
  }


  init() {
    this.initDOMListeners();
  }


  destroy() {
    this.removeDomListeners();
  }
}
