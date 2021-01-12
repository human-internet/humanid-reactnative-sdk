import { IConfigureHumanID, ILogIn, IOnCancel, IOnError, IOnSuccess } from './core/core.interface';
import HumanIDProvider from './core/Provider';
declare const configureHumanID: IConfigureHumanID;
declare const logIn: ILogIn;
declare const onCancel: IOnCancel;
declare const onSuccess: IOnSuccess;
declare const onError: IOnError;
export { configureHumanID, logIn, onError, onSuccess, onCancel, HumanIDProvider };
