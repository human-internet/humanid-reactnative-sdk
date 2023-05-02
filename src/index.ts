import HumanIDProvider from './core/Provider';
import Toast from './modules/Toast'
import options from './core/options';
import {EventRegister, ON_CANCEL, ON_ERROR, ON_SUCCESS} from './core/eventManager';
import {
  IConfigureHumanID,
  ILogIn,
  IOnCancel,
  IOnError,
  IOnSuccess,
  IUnsubscribeAllEventListener
} from './core/core.interface';

const configureHumanID: IConfigureHumanID = (params) => {
  const {appName, clientId, clientSecret, Icon = null} = params;

  options.appName = appName;
  options.clientId = clientId;
  options.clientSecret = clientSecret;
  options.Icon = Icon;
};

const logIn: ILogIn = () => {
  HumanIDProvider.ref?.logIn();
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

const unsubscribeAllEventListener: IUnsubscribeAllEventListener = () => {
  EventRegister.removeAllListeners();
}

export {
  configureHumanID,
  logIn,
  onError,
  onSuccess,
  onCancel,
  unsubscribeAllEventListener,
  HumanIDProvider
};
