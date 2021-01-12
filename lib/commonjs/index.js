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
exports.onCancel = exports.onSuccess = exports.onError = exports.logIn = exports.configureHumanID = void 0;

var _eventManager = require("./core/eventManager");

var _options = _interopRequireDefault(require("./core/options"));

var _Provider = _interopRequireDefault(require("./core/Provider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const configureHumanID = params => {
  const {
    appName,
    clientId,
    clientSecret,
    Icon = null
  } = params;
  _options.default.appName = appName;
  _options.default.clientId = clientId;
  _options.default.clientSecret = clientSecret;
  _options.default.Icon = Icon;
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
      callback(exchangeToken);
    }
  });
};

exports.onSuccess = onSuccess;

const onError = callback => {
  _eventManager.EventRegister.addEventListener(_eventManager.ON_ERROR, message => {
    if (message) {
      callback(message);
    }
  });
};

exports.onError = onError;
//# sourceMappingURL=index.js.map