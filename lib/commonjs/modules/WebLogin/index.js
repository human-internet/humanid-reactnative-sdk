"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _styles = _interopRequireDefault(require("./styles"));

var _ModalLoading = _interopRequireDefault(require("./ModalLoading"));

var _Context = require("../../core/Context");

var _reactNativeWebview = _interopRequireDefault(require("react-native-webview"));

var _eventManager = require("../../core/eventManager");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function WebLogin() {
  const {
    webLoginModalVisible,
    setWebLoginModalVisible,
    clearState,
    resetReducer,
    webLoginUrl
  } = (0, _react.useContext)(_Context.Context);

  const handleOnCancel = () => {
    _eventManager.EventRegister.emitEvent(_eventManager.ON_CANCEL, true);

    resetReducer();
    clearState();
  };

  const [isLoading, setLoading] = (0, _react.useState)(true);

  const handleEventFromWebLogin = url => {
    if (url.includes('/error')) {
      _eventManager.EventRegister.emitEvent(_eventManager.ON_ERROR, 'Login Failed');

      setWebLoginModalVisible(false);
    }

    if (url.includes('/success')) {
      let exchangeToken = url.split('et=')[1];

      _eventManager.EventRegister.emitEvent(_eventManager.ON_SUCCESS, exchangeToken);

      setWebLoginModalVisible(false);
    }

    if (url.includes('code=500')) {
      _eventManager.EventRegister.emitEvent(_eventManager.ON_ERROR, url);

      setWebLoginModalVisible(false);
    }

    if (url.includes('back')) {
      _eventManager.EventRegister.emitEvent(_eventManager.ON_CANCEL, '');

      setWebLoginModalVisible(false);
    }
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.Modal, {
    style: _styles.default.modal,
    visible: webLoginModalVisible,
    onRequestClose: handleOnCancel
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.default.container
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.default.toolbar
  }), /*#__PURE__*/_react.default.createElement(_reactNativeWebview.default, {
    style: {
      flex: 1
    },
    source: {
      uri: webLoginUrl
    },
    onLoadStart: () => {
      setLoading(true);
    },
    onLoadEnd: syntheticEvent => {
      const {
        nativeEvent
      } = syntheticEvent;
      handleEventFromWebLogin(nativeEvent.url);
      setLoading(false);
    }
  }), /*#__PURE__*/_react.default.createElement(_ModalLoading.default, {
    visible: isLoading
  }))));
}

var _default = WebLogin;
exports.default = _default;
//# sourceMappingURL=index.js.map