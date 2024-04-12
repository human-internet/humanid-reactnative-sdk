import { Component } from 'react';
import { TextInput } from 'react-native';
import { InputProps, OTPInputViewState } from './OTPInput.interface';
export default class OTPInputView extends Component<InputProps, OTPInputViewState> {
    static defaultProps: InputProps;
    private fields;
    private keyboardDidHideListener?;
    private timer?;
    constructor(props: InputProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    bringUpKeyBoardIfNeeded: () => void;
    getDigits: () => string[];
    private handleKeyboardDidHide;
    private notifyCodeChanged;
    private handleChangeText;
    private handleKeyPressTextInput;
    focusField: (index: number) => void;
    blurAllFields: () => void;
    clearAllFields: () => void;
    renderOneInputField: (_: TextInput, index: number) => JSX.Element;
    renderTextFields: () => JSX.Element[];
    render(): JSX.Element;
}
