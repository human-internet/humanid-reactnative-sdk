import React from 'react';
import MainComponent from '../modules/MainComponent';

const Provider = () => {
  return /*#__PURE__*/React.createElement(MainComponent, {
    ref: registerRef
  });
};

Provider.ref = null;
export function registerRef(ref) {
  Provider.ref = ref;
}
export default Provider;
//# sourceMappingURL=Provider.js.map