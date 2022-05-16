import {ExcelComponent} from '@core';

export class Table extends ExcelComponent {
  static className = 'excel__table';
  toHTML() {
    return `Table`
  }
}
