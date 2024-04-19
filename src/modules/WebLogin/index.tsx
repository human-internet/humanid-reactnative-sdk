import React, { useContext, useRef, useState } from "react";
import { View, Modal } from "react-native";
import styles from "./styles";
import ModalLoading from "./ModalLoading";
import { Context } from "../../core/Context";
import WebView from "react-native-webview";
import {
  EventRegister,
  ON_CANCEL,
  ON_ERROR,
  ON_SUCCESS,
} from "../../core/eventManager";

function WebLogin(): JSX.Element {
  const {
    webLoginModalVisible,
    setWebLoginModalVisible,
    clearState,
    resetReducer,
    webLoginUrl,
  } = useContext(Context);
  const webViewRef = useRef(null);
  const handleOnCancel = () => {
    EventRegister.emitEvent(ON_CANCEL, true);
    resetReducer();
    clearState();
  };

  const [isLoading, setLoading] = useState(true);

  const handleEventFromWebLogin = (url: string) => {
    if (url.includes("/error")) {
      EventRegister.emitEvent(ON_ERROR, "Login Failed");
      setWebLoginModalVisible(false);
    }
    if (url.includes("/success")) {
      let exchangeToken = url.split("et=")[1];
      EventRegister.emitEvent(ON_SUCCESS, exchangeToken);
      setWebLoginModalVisible(false);
    }
    if (url.includes("code=500")) {
      EventRegister.emitEvent(ON_ERROR, url);
      setWebLoginModalVisible(false);
    }
    if (url.includes("back")) {
      EventRegister.emitEvent(ON_CANCEL, "");
      setWebLoginModalVisible(false);
    }
  };

  return (
    <>
      <Modal
        style={styles.modal}
        visible={webLoginModalVisible}
        onRequestClose={handleOnCancel}
      >
        <View style={styles.container}>
          <View style={styles.toolbar} />
          <WebView
            ref={webViewRef}
            style={{ flex: 1 }}
            source={{
              uri: webLoginUrl,
            }}
            onLoadStart={() => {
              setLoading(true);
            }}
            onLoadEnd={(syntheticEvent) => {
              const { nativeEvent } = syntheticEvent;
              handleEventFromWebLogin(nativeEvent.url);
              setLoading(false);
            }}
          />
          <ModalLoading visible={isLoading} />
        </View>
      </Modal>
    </>
  );
}

export default WebLogin;
