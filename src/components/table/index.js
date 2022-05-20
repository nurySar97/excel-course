import {createTable} from '@/templates';
import {ExcelComponent} from '@core';

const storage = JSON.parse(localStorage.getItem('tableData')) || {};

export class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['input'],
    });
  }


  onInput(event) {
    const target = event.target;
    if (target.dataset.cell) {
      storage[target.dataset.cell] = target.textContent;
    }

    localStorage.setItem('tableData', JSON.stringify(storage))
  }


  toHTML() {
    return createTable();
  }
}
