import {ExcelComponent} from '@core';

export class Toolbar extends ExcelComponent {
  static className = 'excel__toolbar';

  toHTML() {
    return `Toolbar`
  }
}
