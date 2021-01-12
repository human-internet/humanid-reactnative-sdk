import { EventRegister, ON_CANCEL, ON_ERROR, ON_SUCCESS } from './core/eventManager';
import options from './core/options';
import HumanIDProvider from './core/Provider';

const configureHumanID = params => {
  const {
    appName,
    clientId,
    clientSecret,
    Icon = null
  } = params;
  options.appName = appName;
  options.clientId = clientId;
  options.clientSecret = clientSecret;
  options.Icon = Icon;
};

const logIn = () => {
  var _HumanIDProvider$ref;

  (_HumanIDProvider$ref = HumanIDProvider.ref) === null || _HumanIDProvider$ref === void 0 ? void 0 : _HumanIDProvider$ref.logIn();
};

const onCancel = callback => {
  EventRegister.addEventListener(ON_CANCEL, cancel => {
    if (cancel) {
      callback();
    }
  });
};

const onSuccess = callback => {
  EventRegister.addEventListener(ON_SUCCESS, exchangeToken => {
    if (exchangeToken) {
      callback(exchangeToken);
    }
  });
};

const onError = callback => {
  EventRegister.addEventListener(ON_ERROR, message => {
    if (message) {
      callback(message);
    }
  });
};

export { configureHumanID, logIn, onError, onSuccess, onCancel, HumanIDProvider };
//# sourceMappingURL=index.js.map