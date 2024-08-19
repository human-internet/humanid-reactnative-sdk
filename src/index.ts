import HumanIDProvider from './core/Provider';
import Toast from './modules/Toast'
import options from './core/options';
import {EventRegister, ON_CANCEL, ON_ERROR, ON_SUCCESS} from './core/eventManager';
import {
  IConfigureHumanID,
  IHandleDeepLink,
  ILogIn,
  IOnCancel,
  IOnError,
  IOnSuccess,
  IUnsubscribeAllEventListener
} from './core/core.interface';

const configureHumanID: IConfigureHumanID = (params) => {
  const {clientId, clientSecret, appExtId} = params;

  options.clientId = clientId;
  options.clientSecret = clientSecret;
  options.appExtId = appExtId;
};

const logIn: ILogIn = () => {
  HumanIDProvider.ref?.logIn();
};

const handleDeepLink: IHandleDeepLink = (deepLink, onSuccess, onError) => {
  HumanIDProvider.ref?.handleDeepLink(deepLink, onSuccess, onError);
};

const onCancel: IOnCancel = (callback) => {
  EventRegister.addEventListener(ON_CANCEL, (cancel: boolean) => {
    if (cancel) {
      callback();
    }
  });
};

const onSuccess: IOnSuccess = (callback) => {
  EventRegister.addEventListener(ON_SUCCESS, (exchangeToken: string) => {
    if (exchangeToken) {
      setTimeout(() => {
        Toast.show('You’ve successfully logged in. Your data has been securely erased.', 6000);
      }, 500);
      callback(exchangeToken);
    }
  });
};

const onError: IOnError = (callback) => {
  EventRegister.addEventListener(ON_ERROR, (error: string) => {
    if (error) {
      setTimeout(() => {
        Toast.show(error, 4000);
      }, 500)
      callback();
    }
  });
};

const unsubscribeAllEventListeners: IUnsubscribeAllEventListener = () => {
  EventRegister.removeAllListeners();
};

export {
  configureHumanID,
  handleDeepLink,
  logIn,
  onError,
  onSuccess,
  onCancel,
  unsubscribeAllEventListeners,
  HumanIDProvider
};
