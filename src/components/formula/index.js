import {ExcelComponent} from '@core';

export class Formula extends ExcelComponent {
  static className = 'excel__formula';

  toHTML() {
    return `Formula`
  }
}
