import {createTable} from '@/templates';
import {$, ExcelComponent} from '@core';

export class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor($root, rowCount) {
    super($root, {name: 'Table', listeners: ['mousedown', 'mouseup']});

    this.rowCount = rowCount;

    this.onMousemove = this.onMousemove.bind(this);
  }


  onMousedown(event) {
    const dataResize = event.target.dataset.resize;

    if (dataResize) {
      const [type] = dataResize.split('=');

      if (type === 'col') {
        const resizer = $(event.target);

        // const resizerParent = resizer.$element.parentNode; => This is bad!

        // const resizerParent = resizer.closest('.column'); => This is better but bad!

        const resizerParent = resizer.closest('[data-type="resizeable-column"]');

        console.log(resizerParent.getBoundingClientRect);

        document.onmousemove = this.onMousemove;
      } else if (type === 'row') {
        console.log('This is row!')
      }
    }
  }


  onMousemove(event) {
    console.log(event.clientX)
  }


  onMouseup() {
    document.onmousemove = null;
  }


  toHTML() {
    return createTable(this.rowCount);
  }
}
