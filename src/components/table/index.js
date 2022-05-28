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
    if (event.target.classList.contains('resize')) {
      console.log(event.offsetX)
      this.isMouseMoveActivated = true
    }
  }


  onMousemove(event) {
    if (this.isMouseMoveActivated) {
      console.log('onMousemove')
    }
  }


  onMouseup(event) {
    this.isMouseMoveActivated = false
    console.log(event.target.offsetTop)
  }


  toHTML() {
    return createTable(20);
  }
}
