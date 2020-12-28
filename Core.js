import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {
  logIn,
  onCancel,
  onSuccess,
  onError,
} from '@bobbyecho/react-native-humanid';

function Core() {
  const loginHumanID = () => {
    logIn();
  };

  React.useEffect(() => {
    onSuccess((exchangeToken) => {
      console.log('SUCCESS', exchangeToken);
    });

    onError((message) => {
      console.log('ERROR', message);
    });

    onCancel(() => {
      console.log('CANCEL');
    });
  }, []);

  return (
    <View style={styles.view}>
      <TouchableOpacity onPress={loginHumanID} activeOpacity={0.7}>
        <View style={styles.btn}>
          <Text style={styles.text}>Login</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 150,
    height: 70,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
  },
  view: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Core;
