import WebView from "react-native-webview";
import React, { useContext, useRef, useState } from "react";
import { Modal, View } from "react-native";

import ModalLoading from "./ModalLoading";
import ModalSuccessfulLogin from "./ModalSuccessfulLogin";
import styles from "./styles";
import { Context } from "../../core/Context";
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
  const [isModalSuccessfulLoginVisible, setIsModalSuccessfulLoginVisible] = useState(false);

  const handleEventFromWebLogin = (url: string) => {
    if (url.includes("/error")) {
      EventRegister.emitEvent(ON_ERROR, "Login Failed");
      setWebLoginModalVisible(false);
    }
    if (url.includes("/success")) {
      let exchangeToken = url.split("et=")[1];
      EventRegister.emitEvent(ON_SUCCESS, exchangeToken);
      setIsModalSuccessfulLoginVisible(false)
      setWebLoginModalVisible(false);
      setLoading(true)
    }
    if (url.includes("code=500")) {
      EventRegister.emitEvent(ON_ERROR, url);
      setWebLoginModalVisible(false);
    }
    if (url.includes("back")) {
      EventRegister.emitEvent(ON_CANCEL, "");
      setWebLoginModalVisible(false);
    }
    if(url.includes("redirect_app")) {
      setTimeout(() => {
        setIsModalSuccessfulLoginVisible(false);
      }, 500)
    }
  };

  const handleLoadStartEvent = (url: string) => {
    if(url?.includes('redirect_app')) {
      setIsModalSuccessfulLoginVisible(true)
    }
    if(url?.includes('login?t=')) {
      setLoading(true)
    }
  }

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
            onLoadStart={(syntheticEvent) => {
              const { nativeEvent } = syntheticEvent
              handleLoadStartEvent(nativeEvent?.url);              
            }}
            onLoadEnd={(syntheticEvent) => {
              const { nativeEvent } = syntheticEvent;
              handleEventFromWebLogin(nativeEvent.url);
              setLoading(false);
            }}
          />
          <ModalLoading visible={isLoading} />
          <ModalSuccessfulLogin visible={isModalSuccessfulLoginVisible} />
        </View>
      </Modal>
    </>
  );
}

export default WebLogin;
