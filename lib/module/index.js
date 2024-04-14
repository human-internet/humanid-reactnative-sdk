import { EventRegister, ON_CANCEL, ON_ERROR, ON_SUCCESS } from './core/eventManager';
import options from './core/options';
import HumanIDProvider from './core/Provider';
import Toast from './modules/Toast';

const configureHumanID = params => {
  const {
    clientId,
    clientSecret
  } = params;
  options.clientId = clientId;
  options.clientSecret = clientSecret;
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
      setTimeout(() => {
        Toast.show('You’ve successfully logged in. Your data has been securely erased.', 6000);
      }, 500);
      callback(exchangeToken);
    }
  });
};

const onError = callback => {
  EventRegister.addEventListener(ON_ERROR, error => {
    if (error) {
      setTimeout(() => {
        Toast.show(error, 4000);
      }, 500);
      callback();
    }
  });
};

const unsubscribeAllEventListener = () => {
  EventRegister.removeAllListeners();
};

export { configureHumanID, logIn, onError, onSuccess, onCancel, unsubscribeAllEventListener, HumanIDProvider };
//# sourceMappingURL=index.js.map