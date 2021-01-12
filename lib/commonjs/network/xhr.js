"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = xhr;

var _options = _interopRequireDefault(require("../core/options"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const baseURL = 'https://core.human-id.org/v0.0.3/mobile';

async function xhr(url, params) {
  url = baseURL + url;
  const xhrOptions = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'client-secret': _options.default.clientSecret,
      'client-id': _options.default.clientId
    },
    body: JSON.stringify(params)
  };
  const response = await fetch(url, xhrOptions);

  try {
    response.parsedBody = await response.json();
  } catch {}

  if (!response.ok && response.parsedBody) {
    throw new Error(response.parsedBody.message);
  }

  return response.parsedBody;
}
//# sourceMappingURL=xhr.js.map