import React from 'react';
import {View} from 'react-native';
import AppName from './AppName';
import styles from './styles';

function Logo(): JSX.Element | null {

  return (
    <View style={styles.containerIconAppName}>
      {/* @ts-ignore */}
      <Icon />
      <AppName />
    </View>
  )
}

export default Logo;
