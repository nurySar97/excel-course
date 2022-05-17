import {DomListener} from '@core';

export class ExcelComponent extends DomListener {
  constructor($root, options={listeners: []}) {
    super($root, options.listeners)
  }

  toHTML() {
    return `<h1>ExcelComponent</h1>`
  }

  init() {
    this.initDOMListeners()
  }
}
