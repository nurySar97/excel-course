import {ExcelComponent} from '@core';

export class Header extends ExcelComponent {
  static className = 'excel__header';

  toHTML() {
    return `Header`
  }
}
