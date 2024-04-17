import { NetworkResponse } from './network.interface';
export default function xhr<T, R>(url: string, params: T): Promise<NetworkResponse<R>>;
