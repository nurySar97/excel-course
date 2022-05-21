import {toolbarTemplate} from '@/templates';
import {ExcelComponent} from '@core';

export class Toolbar extends ExcelComponent {
  static className = 'excel__toolbar';

  constructor($root) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click'],
    });
  }


  onClick(event) {
    console.log('Toolbar: ', event.target)
  }


  toHTML() {
    return toolbarTemplate();
  }
}
