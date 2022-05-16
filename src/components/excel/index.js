export class Excel {
  constructor(selector='', options={components: []}) {
    this.$el = document.querySelector(selector)
    this.components = options.components;
  }
}
