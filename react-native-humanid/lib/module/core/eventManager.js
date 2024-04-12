function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class EventRegister {
  static addEventListener(eventName, callback) {
    if (eventName !== null && eventName !== void 0 && eventName.length && typeof callback === 'function') {
      EventRegister._Listeners.count++;
      const eventId = 'l' + EventRegister._Listeners.count;
      EventRegister._Listeners.refs[eventId] = {
        name: eventName,
        callback
      };
      return eventId;
    }

    return false;
  }

  static removeEventListener(id) {
    if (id !== null && id !== void 0 && id.length) {
      return delete EventRegister._Listeners.refs[id];
    }

    return false;
  }

  static removeAllListeners() {
    let removeError = false;
    Object.keys(EventRegister._Listeners.refs).forEach(_id => {
      const removed = delete EventRegister._Listeners.refs[_id];
      removeError = !removeError ? !removed : removeError;
    });
    return !removeError;
  }

  static emitEvent(eventName, data) {
    Object.keys(EventRegister._Listeners.refs).forEach(_id => {
      if (EventRegister._Listeners.refs[_id] && eventName === EventRegister._Listeners.refs[_id].name) {
        EventRegister._Listeners.refs[_id].callback(data);
      }
    });
  }
  /*
   * shortener
   */


  static on(eventName, callback) {
    return EventRegister.addEventListener(eventName, callback);
  }

  static rm(eventName) {
    return EventRegister.removeEventListener(eventName);
  }

  static rmAll() {
    return EventRegister.removeAllListeners();
  }

  static emit(eventName, data) {
    EventRegister.emitEvent(eventName, data);
  }

}

_defineProperty(EventRegister, "_Listeners", {
  count: 0,
  refs: {}
});

const ON_CANCEL = 'onCancel';
const ON_SUCCESS = 'onSuccess';
const ON_ERROR = 'onError';
export { EventRegister, ON_CANCEL, ON_SUCCESS, ON_ERROR };
//# sourceMappingURL=eventManager.js.map