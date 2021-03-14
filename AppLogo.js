import React from 'react';
import {Image, StyleSheet} from 'react-native';

function AppLogo() {
  return <Image source={require('./react.png')} style={styles.logo} />;
}

const styles = StyleSheet.create({
  logo: {
    width: 75,
    height: 75,
  },
});

export default AppLogo;
