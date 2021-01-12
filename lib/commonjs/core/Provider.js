"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerRef = registerRef;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _MainComponent = _interopRequireDefault(require("../modules/MainComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Provider = () => {
  return /*#__PURE__*/_react.default.createElement(_MainComponent.default, {
    ref: registerRef
  });
};

Provider.ref = null;

function registerRef(ref) {
  Provider.ref = ref;
}

var _default = Provider;
exports.default = _default;
//# sourceMappingURL=Provider.js.map