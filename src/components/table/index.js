import {createTable} from '@/templates';
import {ExcelComponent} from '@core';

export class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown', 'mouseup', 'mousemove'],
    });

    this.isMouseMoveActivated = false;
  }


  onMousedown(event) {
    console.log('onMousedown')
    this.isMouseMoveActivated = true
  }


  onMousemove() {
    if (this.isMouseMoveActivated) {
      console.log('onMousemove')
    }
  }


  onMouseup() {
    console.log('onMouseup')
    this.isMouseMoveActivated = false
  }


  toHTML() {
    return createTable(20);
  }
}
