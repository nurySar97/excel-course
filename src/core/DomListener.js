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
      const callBack = this.getEventCallback(eventType);

      this.$root.on(eventType, callBack);
    })
  }


  removeDomListeners() {
    this.listeners.forEach(eventType => {
      const callBack = this.getEventCallback(eventType, 'remove');

      this.$root.off(eventType, callBack);
    });

    this.subscribedListeners = {};
  }


  getEventCallback(eventType, type = 'add') {
    const method = getMethodName(eventType);

    let callBack = this[method];

    if (type === 'remove') return callBack;

    if (typeof callBack !== 'function') {
      const message = `Method ${method} is not implemented in ${this.name || ''} component!`;
      throw new Error(message);
    }

    callBack = callBack.bind(this);

    this[method] = callBack;

    return callBack;
  }
}


function getMethodName(eventType) {
  return 'on' + capitalize(eventType)
}
