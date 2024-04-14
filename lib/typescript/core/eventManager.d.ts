interface Listeners {
    count: number;
    refs: Record<string, any>;
}
declare class EventRegister {
    static _Listeners: Listeners;
    static addEventListener(eventName: string, callback: (parameter?: any) => void): string | false;
    static removeEventListener(id: string): boolean;
    static removeAllListeners(): boolean;
    static emitEvent(eventName: string, data: any): void;
    static on(eventName: string, callback: (parameter?: any) => void): string | false;
    static rm(eventName: string): boolean;
    static rmAll(): boolean;
    static emit(eventName: string, data: any): void;
}
declare const ON_CANCEL = "onCancel";
declare const ON_SUCCESS = "onSuccess";
declare const ON_ERROR = "onError";
export { EventRegister, ON_CANCEL, ON_SUCCESS, ON_ERROR };
