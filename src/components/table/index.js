import {createTable} from '@/templates';
import {ExcelComponent} from '@core';

export class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['input'],
    });
  }


  onInput(event) {
    console.log('Cell coords: ', event.target.dataset.cell)
  }


  toHTML() {
    return createTable();
  }
}
