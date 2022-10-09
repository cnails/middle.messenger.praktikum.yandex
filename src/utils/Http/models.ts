export enum EHTTPMethod {
    GET = 'GET',
    PUT = 'PUT',
    POST = 'POST',
    DELETE = 'DELETE',
}

export type THTTPHeaders = Record<string, any>; 

export interface IHTTPOptions {
    headers?: THTTPHeaders;
    data?: any;
    method: EHTTPMethod;
}

export type THTTPOptionsExpanded = IHTTPOptions & {
    timeout?: number
}
