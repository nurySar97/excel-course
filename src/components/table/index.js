import {createTable} from '@/templates';
import {$, ExcelComponent} from '@core';

// Table component
export class Table extends ExcelComponent {
// Table root element className;
  static className = 'excel-table';

  constructor($root, rowCount) {
    super($root, {name: 'Table', listeners: ['mousedown']});

    // Table row count
    this.rowCount = rowCount;
  }


  onMousedown(mouseDownEvent) {
    // Take dataResize if mouseDownEvent.target contains data-resize;
    const dataResize = mouseDownEvent.target.dataset.resize;

    // Document element;
    const $documentElement = $(document.documentElement);

    // Check if dataResize has some value;
    if (dataResize) {
      // Change document cursor when mousedown and data-resize has value;
      $documentElement.css({cursor: 'col-resize'});

      //  The default action that belongs to the event will not occur.;
      mouseDownEvent.preventDefault();

      // Split data resize because if data rezize has value it will be equal data-resize="col=A";
      const [type, columIndex] = dataResize.split('=');

      // Take resizer element;
      const resizer = $(mouseDownEvent.target);

      // If resizer type equal "col";
      if (type === 'col') {
        // const resizerParent = resizer.$element.parentNode; => This is bad!
        // const resizerParent = resizer.closest('.column'); => This is better but bad!


        // Take column resizer closest parent;
        const colResizerParent = resizer.closest('[data-type="resizeable-column"]');

        // This returns elem.getBoundingClientRect() values for column resizer parent element;
        const colResizerParentCoords = colResizerParent.getCoords;

        // Subscribe to mousemove event for document element;
        document.onmousemove = mouseMoveEvent => {
          /*
            --mouseMoveEvent.clientX--
            Where take place event on x-axis relative window;
          */

          /*
            --resizerParentCoords.right--
            It returns coordinate x-axis relative to the window where situated resizer parent right;
          */
          const deltaX = mouseMoveEvent.clientX - colResizerParentCoords.right;

          // New column width value in pixels;
          const widthValue = deltaX + colResizerParentCoords.width + 'px';

          // Set new width to resize parent element;
          colResizerParent.css({width: widthValue});

          /*
            To change all cells width need to take all elements which contains data-cell
            (for example data-cell="A") then with forEach cycle set width every element;
          */
          document
              .querySelectorAll(`[data-cell='${columIndex}']`)
              .forEach(elem => $(elem).css({width: widthValue}));
        }

        // For unsubscribe which subscribed when onmousedown need to subscribe mouseup event;
        document.onmouseup = () => {
          // Unsubscribe document mousemove;
          document.onmousemove = null;

          // Remove style from documentElement;
          $documentElement.defaultCss();
        };
        // If resizer type equal "row";
      } else if (type === 'row') {
        // Take row resizer closest parent;
        const rowResizerParent = resizer.closest('[data-type="resizeable-row"]');

        // This returns elem.getBoundingClientRect() values for row resizer parent element;
        const rowResizerParentCoords = rowResizerParent.getCoords;

        // Subscribe to mousemove event for document element;
        document.onmousemove = mouseMoveEvent => {
          /*
            --mouseMoveEvent.clientY--
            Where take place event on y-axis relative window;
          */
          /*
            --resizerParentCoords.bottom--
            It returns coordinate y-axis relative to the window where situated resizer parent bottom;
          */
          const deltaY = mouseMoveEvent.clientY - rowResizerParentCoords.bottom;

          // New cell width value in pixels;
          const heightValue = deltaY + rowResizerParentCoords.height + 'px';

          // Set new width to resize parent element;
          rowResizerParent.css({height: heightValue});
        }

        document.onmouseup = () => {
          document.onmousemove = null;

          $(document.documentElement).css({cursor: 'initial'});
        };
      }
    }
  }


  toHTML() {
    return createTable(this.rowCount);
  }
}
