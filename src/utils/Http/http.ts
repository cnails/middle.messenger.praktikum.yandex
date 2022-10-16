import { EHTTPMethod, IHTTPOptions, THTTPOptionsExpanded } from "./models";

/**
* На входе: объект. Пример: {a: 1, b: 2, c: {d: 123}, k: [1, 2, 3]}
* На выходе: строка. Пример: ?a=1&b=2&c=[object Object]&k=1,2,3
*/
function queryStringify(data: Record<string, any>) {
  const params = [];
  for (const keyValue of Object.entries(data)) {
      params.push(keyValue.join('='));
  }
  return `?${params.join('&')}`;
}

export class HTTPTransport {
    get = (url: string, options: THTTPOptionsExpanded) => {
      return this.request(url, {...options, method: EHTTPMethod.GET}, options.timeout);
    };

    put = (url: string, options: THTTPOptionsExpanded) => {
      return this.request(url, {...options, method: EHTTPMethod.PUT}, options.timeout);
    }

    post = (url: string, options: THTTPOptionsExpanded) => {
      return this.request(url, {...options, method: EHTTPMethod.POST}, options.timeout);
    }

    delete = (url: string, options: THTTPOptionsExpanded) => {
      return this.request(url, {...options, method: EHTTPMethod.DELETE}, options.timeout);
    }

    request = (url: string, options: IHTTPOptions, timeout?: number) => {
      const {headers = {}, data, method} = options;

      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        
        xhr.open(method, method === EHTTPMethod.GET ? url + queryStringify(data) : url);
        
        if (timeout) {
          xhr.timeout = timeout;
        }

        for (const [key, value] of Object.entries(headers)) {
          xhr.setRequestHeader(key, value);
        }
        
        xhr.onload = function() {
          resolve(xhr);
        };

        xhr.onabort = reject;
        xhr.onerror = reject;
        xhr.ontimeout = reject;
        
        if (method === EHTTPMethod.GET || !data) {
            xhr.send();
        } else {
            xhr.send(data);
        }
    });
  };
}
