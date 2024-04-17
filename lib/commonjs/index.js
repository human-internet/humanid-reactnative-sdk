"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "HumanIDProvider", {
  enumerable: true,
  get: function () {
    return _Provider.default;
  }
});
exports.unsubscribeAllEventListener = exports.onCancel = exports.onSuccess = exports.onError = exports.logIn = exports.configureHumanID = void 0;

var _eventManager = require("./core/eventManager");

var _options = _interopRequireDefault(require("./core/options"));

var _Provider = _interopRequireDefault(require("./core/Provider"));

var _Toast = _interopRequireDefault(require("./modules/Toast"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const configureHumanID = params => {
  const {
    clientId,
    clientSecret
  } = params;
  _options.default.clientId = clientId;
  _options.default.clientSecret = clientSecret;
};

exports.configureHumanID = configureHumanID;

const logIn = () => {
  var _HumanIDProvider$ref;

  (_HumanIDProvider$ref = _Provider.default.ref) === null || _HumanIDProvider$ref === void 0 ? void 0 : _HumanIDProvider$ref.logIn();
};

exports.logIn = logIn;

const onCancel = callback => {
  _eventManager.EventRegister.addEventListener(_eventManager.ON_CANCEL, cancel => {
    if (cancel) {
      callback();
    }
  });
};

exports.onCancel = onCancel;

const onSuccess = callback => {
  _eventManager.EventRegister.addEventListener(_eventManager.ON_SUCCESS, exchangeToken => {
    if (exchangeToken) {
      setTimeout(() => {
        _Toast.default.show('You’ve successfully logged in. Your data has been securely erased.', 6000);
      }, 500);
      callback(exchangeToken);
    }
  });
};

exports.onSuccess = onSuccess;

const onError = callback => {
  _eventManager.EventRegister.addEventListener(_eventManager.ON_ERROR, error => {
    if (error) {
      setTimeout(() => {
        _Toast.default.show(error, 4000);
      }, 500);
      callback();
    }
  });
};

exports.onError = onError;

const unsubscribeAllEventListener = () => {
  _eventManager.EventRegister.removeAllListeners();
};

exports.unsubscribeAllEventListener = unsubscribeAllEventListener;
//# sourceMappingURL=index.js.map