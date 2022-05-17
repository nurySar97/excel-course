import {capitalize} from '@core';

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`No $root provided for DomListener!`);
    }

    this.listeners = listeners;

    this.$root = $root;
  }

  initDOMListeners() {
    this.listeners.forEach(eventType => {
      const method = getMethodName(eventType);
      this.$root.on(eventType, this[method])
    })
  }

  removeDomListeners() {

  }
}

function getMethodName(eventType) {
  return 'on' + capitalize(eventType)
}
