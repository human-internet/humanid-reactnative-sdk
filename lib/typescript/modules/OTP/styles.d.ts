declare const styles: {
    modal: {
        margin: number;
        width: number;
    };
    logo: {
        resizeMode: "contain";
        width: string;
        height: number;
        alignSelf: "center";
        marginBottom: number;
    };
    keyboardAvoid: {
        flex: number;
        justifyContent: "flex-end";
    };
    container: {
        backfaceVisibility?: "visible" | "hidden" | undefined;
        backgroundColor: import("react-native").ColorValue;
        borderBottomColor?: string | typeof import("react-native").OpaqueColorValue | undefined;
        borderBottomEndRadius?: number | undefined;
        borderBottomLeftRadius?: number | undefined;
        borderBottomRightRadius?: number | undefined;
        borderBottomStartRadius?: number | undefined;
        borderBottomWidth?: number | undefined;
        borderColor?: string | typeof import("react-native").OpaqueColorValue | undefined;
        borderEndColor?: string | typeof import("react-native").OpaqueColorValue | undefined;
        borderLeftColor?: string | typeof import("react-native").OpaqueColorValue | undefined;
        borderLeftWidth?: number | undefined;
        borderRadius?: number | undefined;
        borderRightColor?: string | typeof import("react-native").OpaqueColorValue | undefined;
        borderRightWidth?: number | undefined;
        borderStartColor?: string | typeof import("react-native").OpaqueColorValue | undefined;
        borderStyle?: "solid" | "dotted" | "dashed" | undefined;
        borderTopColor?: string | typeof import("react-native").OpaqueColorValue | undefined;
        borderTopEndRadius?: number | undefined;
        borderTopLeftRadius?: number | undefined;
        borderTopRightRadius?: number | undefined;
        borderTopStartRadius?: number | undefined;
        borderTopWidth?: number | undefined;
        borderWidth?: number | undefined;
        opacity?: number | undefined;
        testID?: string | undefined;
        elevation?: number | undefined;
        alignContent?: "flex-end" | "flex-start" | "center" | "space-between" | "space-around" | "stretch" | undefined;
        alignItems?: "flex-end" | "flex-start" | "center" | "stretch" | "baseline" | undefined;
        alignSelf?: "flex-end" | "flex-start" | "center" | "stretch" | "baseline" | "auto" | undefined;
        aspectRatio?: number | undefined;
        borderEndWidth?: string | number | undefined;
        borderStartWidth?: string | number | undefined;
        bottom?: string | number | undefined;
        display?: "none" | "flex" | undefined;
        end?: string | number | undefined;
        flex?: number | undefined;
        flexBasis?: string | number | undefined;
        flexDirection?: "row" | "column" | "row-reverse" | "column-reverse" | undefined;
        flexGrow?: number | undefined;
        flexShrink?: number | undefined;
        flexWrap?: "wrap" | "nowrap" | "wrap-reverse" | undefined;
        height: string | number;
        justifyContent?: "flex-end" | "flex-start" | "center" | "space-between" | "space-around" | "space-evenly" | undefined;
        left?: string | number | undefined;
        margin?: string | number | undefined;
        marginBottom?: string | number | undefined;
        marginEnd?: string | number | undefined;
        marginHorizontal?: string | number | undefined;
        marginLeft?: string | number | undefined;
        marginRight?: string | number | undefined;
        marginStart?: string | number | undefined;
        marginTop?: string | number | undefined;
        marginVertical?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        overflow?: "visible" | "hidden" | "scroll" | undefined;
        padding?: string | number | undefined;
        paddingBottom?: string | number | undefined;
        paddingEnd?: string | number | undefined;
        paddingHorizontal?: string | number | undefined;
        paddingLeft?: string | number | undefined;
        paddingRight?: string | number | undefined;
        paddingStart?: string | number | undefined;
        paddingTop?: string | number | undefined;
        paddingVertical?: string | number | undefined;
        position?: "absolute" | "relative" | undefined;
        right?: string | number | undefined;
        start?: string | number | undefined;
        top?: string | number | undefined;
        width?: string | number | undefined;
        zIndex?: number | undefined;
        direction?: "inherit" | "ltr" | "rtl" | undefined;
        shadowColor?: string | typeof import("react-native").OpaqueColorValue | undefined;
        shadowOffset?: {
            width: number;
            height: number;
        } | undefined;
        shadowOpacity?: number | undefined;
        shadowRadius?: number | undefined;
        transform?: (import("react-native").PerpectiveTransform | import("react-native").RotateTransform | import("react-native").RotateXTransform | import("react-native").RotateYTransform | import("react-native").RotateZTransform | import("react-native").ScaleTransform | import("react-native").ScaleXTransform | import("react-native").ScaleYTransform | import("react-native").TranslateXTransform | import("react-native").TranslateYTransform | import("react-native").SkewXTransform | import("react-native").SkewYTransform | import("react-native").MatrixTransform)[] | undefined;
        transformMatrix?: number[] | undefined;
        rotation?: number | undefined;
        scaleX?: number | undefined;
        scaleY?: number | undefined;
        translateX?: number | undefined;
        translateY?: number | undefined;
    };
    containerDescForm: {
        flex: number;
    };
    title: {
        textAlign: "center";
        fontSize: number;
        fontFamily: string;
        letterSpacing: number;
        lineHeight: number;
    };
    description: {
        textAlign: "center";
        fontSize: number;
        fontFamily: string;
        letterSpacing: number;
        lineHeight: number;
    };
    phoneNumber: {
        color: string;
        textAlign: "center";
        fontSize: number;
        fontFamily: string;
        letterSpacing: number;
        lineHeight: number;
    };
    textSpace: {
        marginVertical: number;
    };
    resendCode: {
        color: string;
        fontSize: number;
        fontFamily: string;
        letterSpacing: number;
        lineHeight: number;
    };
    containerDescription: {
        flex: number;
        justifyContent: "space-around";
    };
    formContainer: {
        flex: number;
        alignItems: "center";
        justifyContent: "space-around";
    };
    otpView: {
        width: number;
        height: number;
        paddingHorizontal: number;
    };
    otpFieldStyle: {
        color: string;
        borderWidth: number;
        borderBottomWidth: number;
        borderBottomColor: string;
        fontSize: number;
        fontFamily: string;
        width: number;
        height: number;
    };
    otpHighlightStyle: {
        borderBottomColor: string;
    };
};
export default styles;
