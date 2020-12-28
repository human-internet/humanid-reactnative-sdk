import React from 'react';
import {Image, StyleSheet} from 'react-native';

function AppLogo() {
  return <Image source={require('./ralali.png')} style={styles.logo} />;
}

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
  },
});

export default AppLogo;
