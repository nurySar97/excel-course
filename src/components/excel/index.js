export class Excel {
  constructor(selector='#root', options={components: []}) {
    this.$el = document.querySelector(selector)
    this.components = options.components;
  }

  getRoot() {
    const $root = document.createElement('div');

    this.components.forEach(Component => {
      const component = new Component(null);
      $root.insertAdjacentHTML('beforeend', component.toHTML())
    });

    return $root
  }

  render() {
    return this.$el.append(this.getRoot())
  }
}
