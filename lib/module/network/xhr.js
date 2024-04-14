import options from '../core/options';
const baseURL = 'https://core.human-id.org/v0.0.3/mobile';
export default async function xhr(url, params) {
  url = baseURL + url;
  const xhrOptions = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'client-secret': options.clientSecret,
      'client-id': options.clientId
    },
    body: JSON.stringify(params)
  };
  const response = await fetch(url, xhrOptions);

  try {
    response.parsedBody = await response.json();
  } catch {}

  if (!response.ok && response.parsedBody) {
    throw {
      message: response.parsedBody.message,
      code: response.parsedBody.code
    };
  }

  return response.parsedBody;
}
//# sourceMappingURL=xhr.js.map