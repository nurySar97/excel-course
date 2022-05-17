import {capitalize} from '@core';

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`No $root provided for DomListener!`);
    }

    this.listeners = listeners;

    this.$root = $root;

    this.subscribedListeners = {};
  }

  initDOMListeners() {
    this.listeners.forEach(eventType => {
      const method = getMethodName(eventType);
      let callBack = this[method];

      if (typeof callBack === 'function') {
        callBack = callBack.bind(this);
        this.subscribedListeners[eventType] = callBack;
      }

      this.$root.on(eventType, callBack);
    })
  }

  removeDomListeners() {
    this.listeners.forEach(eventType => {
      this.$root.off(eventType, this.subscribedListeners[eventType])
    });

    this.subscribedListeners = {};
  }
}

function getMethodName(eventType) {
  return 'on' + capitalize(eventType)
}
