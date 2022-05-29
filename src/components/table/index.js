import {createTable} from '@/templates';
import {$, ExcelComponent} from '@core';

export class Table extends ExcelComponent {
  static className = 'excel-table';
  static dataType = 'excel-table';

  constructor($root, rowCount) {
    super($root, {name: 'Table', listeners: ['mousedown']});

    this.rowCount = rowCount;
  }


  onMousedown(mouseDownEvent) {
    const dataResize = mouseDownEvent.target.dataset.resize;

    if (dataResize) {
      mouseDownEvent.preventDefault();
      const [type, columIndex] = dataResize.split('=');

      if (type === 'col') {
        const excelTable = document.querySelector(`[data-type="${Table.dataType}"]`);

        // + excelTable.scrollLeft
        $(document.documentElement).css({cursor: 'col-resize'});

        const resizeLine = $(document.querySelector('[data-type="resize-line"]'));

        const resizer = $(mouseDownEvent.target);

        // const resizerParent = resizer.$element.parentNode; => This is bad!

        // const resizerParent = resizer.closest('.column'); => This is better but bad!

        const resizerParent = resizer.closest('[data-type="resizeable-column"]');

        const resizerParentCoords = resizerParent.getCoords;

        resizeLine.css({
          display: 'block',
          width: '1px',
          height: '100%',
          left: `${resizerParentCoords.right + excelTable.scrollLeft - 1}px`,
          top: 0
        });

        const resizeLineCoords = resizeLine.getCoords;

        document.onmousemove = mouseMoveEvent => {
          const delta = mouseMoveEvent.clientX - resizerParentCoords.right;

          const widthValue = delta + resizerParentCoords.width + 'px';

          const resizeLineLeftValue = resizeLineCoords.left + delta + excelTable.scrollLeft + 'px';

          resizeLine.css({left: resizeLineLeftValue});

          resizerParent.css({width: widthValue});

          document.querySelectorAll(`[data-cell='${columIndex}']`).forEach(elem => {
            const $cell = $(elem);
            $cell.css({width: widthValue});
          });
        }

        document.onmouseup = () => {
          document.onmousemove = null;

          $(document.documentElement).css({cursor: 'initial'});

          resizeLine.defaultCss();
        };
      } else if (type === 'row') {
        console.log('This is row!');
      }
    }
  }


  toHTML() {
    return createTable(this.rowCount);
  }
}
