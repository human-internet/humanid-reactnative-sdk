import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import Modal from "react-native-modal";
import { ModalSuccessfulLoginProps } from "./WebLogin.interface";
import { colors } from "../../themes";
import styles from "./styles";


function ModalSuccessfulLogin(props: ModalSuccessfulLoginProps): JSX.Element {
  const { visible } = props;

  return (
    <Modal
      isVisible={visible}
      coverScreen={true}
      backdropOpacity={0.5}
      animationIn="fadeIn"
      animationOut="fadeOut"
    >
      <View style={styles.containerModalLoading}>
        <ActivityIndicator size="large" color={colors.black} />
        <Text
          style={styles.textLoading}
        >{`Verification successful.\nDeleting your data.`}</Text>
      </View>
    </Modal>
  );
}

export default ModalSuccessfulLogin;
