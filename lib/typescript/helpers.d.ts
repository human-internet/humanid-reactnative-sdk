import { FlagType } from './modules/Login/Login.interface';
export declare function checkClient(): void;
export declare function getDialCode(countryCode: FlagType): string;
export declare function getCountry(countryCode: FlagType): import("./modules/Login/Login.interface").Country;
export declare function RFPercentage(percent: number): number;
export declare function RFValue(fontSize: number, standardScreenHeight?: number): number;
