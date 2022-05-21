import {formulaTemplate} from '@/templates';
import {ExcelComponent} from '@core';

export class Formula extends ExcelComponent {
  static className = 'excel__formula';

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input'],
    });
  }


  toHTML() {
    return formulaTemplate()
  }


  onInput(event) {
    console.log('Formula onInput: ', event.target.textContent)
  }
}
