"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertDuration = convertDuration;

var _reactNative = require("react-native");

function convertDuration(duration) {
  if (_reactNative.Platform.OS === 'ios') {
    return duration / 1000;
  }

  return duration;
}
//# sourceMappingURL=helpers.js.map