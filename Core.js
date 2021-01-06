import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {
  logIn,
  onCancel,
  onSuccess,
  onError,
} from '@bobbyecho/react-native-humanid';
import toast from 'react-native-simple-toast';

function Core() {

  const [token, setToken] = React.useState(null);

  React.useEffect(() => {
    onSuccess((exchangeToken) => {
      console.log('SUCCESS', exchangeToken);
      setToken(exchangeToken)
    });

    onError((message) => {
      toast.show(message, toast.SHORT)
      console.log(message)
    });

    onCancel(() => {
      console.log('CANCEL');
    });
  }, []);

  const loginHumanID = () => {
    logIn();
  };

  const retry = () => {
    setToken(null)
  }

  return (
    <View style={styles.view}>
      {!token && (
          <TouchableOpacity onPress={loginHumanID} activeOpacity={0.7}>
            <View style={styles.btn}>
              <Text style={styles.text}>Login</Text>
            </View>
          </TouchableOpacity>
      )}
      {token && (
          <View>
            <Text style={styles.header}>{token}</Text>
            <Text style={styles.retry} onPress={retry}>try again</Text>
          </View>
      )}
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
  header: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17,
    marginVertical: 20,
    marginHorizontal: 20
  },
  retry: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'blue',
    fontSize: 16,
    textDecorationLine: 'underline'
  },
  view: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Core;
