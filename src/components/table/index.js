import {createTable} from '@/templates';
import {ExcelComponent} from '@core';

export class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown', 'mouseup', 'mousemove'],
    });
    this.isMouseMoveBlocked = true;
    this.mouseDownInfo = {left: null, top: 0, clientX: null, clientY: null, parent: null}
  }

  css(element, style) {
    Object.assign(element.style, style);
  }


  onMousedown(event) {
    const [type, index] = event.target.dataset.resize?.split('=') || [];

    if (type === 'col') {
      this.isMouseMoveBlocked = false
      const {clientX, clientY} = event;
      const parent = event.target.offsetParent;
      const {width} = parent.getBoundingClientRect();

      this.mouseDownInfo = {
        clientX,
        clientY,
        parentInfo: {parent, width},
        type,
        index
      };
    }
  }


  onMousemove(event) {
    if (!this.isMouseMoveBlocked) {
      const diff = event.clientX - this.mouseDownInfo.clientX;
      const {parent} = this.mouseDownInfo.parentInfo;
      const currentWidth = this.mouseDownInfo.parentInfo.width + diff + 'px'

      this.css(parent, {width: currentWidth});

      for (let i = 1; i <= 20; ++i) {
        const cell = document.querySelector(`[data-cell=${this.mouseDownInfo.index + i}]`);
        this.css(cell, {width: currentWidth})
      }
    }
  }


  onMouseup(event) {
    this.isMouseMoveBlocked = true;
  }


  toHTML() {
    return createTable(20);
  }
}
