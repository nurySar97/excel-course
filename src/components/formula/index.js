import {ExcelComponent} from '@core';

export class Formula extends ExcelComponent {
  static className = 'excel__formula';

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input'],
    });

    this.name = this.constructor.name;
  }

  toHTML() {
    return `
    <div class="info">fx</div>
    <div class="input" contenteditable spellcheck="false"></div>
    `
  }

  onInput(event) {
    // console.log(this.$root)
    console.log('Formula onInput: ', event.target.textContent)
  }
}
