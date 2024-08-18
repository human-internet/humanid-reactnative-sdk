<p align="center">  
  <img src="https://github.com/human-internet/humanid-reactnative-sdk/blob/main/human-id-logo.png" width="200" height="200">  
</p>  
  
<h1 align="center">HumanID React Native</h1>  
  
<p align="center">  
  <a href="https://badge.fury.io/js/%40human-internet%2Freact-native-humanid">
    <img src="https://badge.fury.io/js/%40human-internet%2Freact-native-humanid.svg" alt="npm version" />
  </a>
  <a href="https://github.com/human-internet/humanid-reactnative-sdk/blob/main/LICENSE">  
    <img src="https://img.shields.io/badge/License-GPL%20v3-blue.svg" alt="license" />  
  </a>  
</p>  
  
<p align="center">  
<a href="https://github.com/human-internet/humanid-documentation/edit/master/README.md">General Documentation</a> •  
<a href="https://github.com/human-internet/humanid-documentation/blob/master/contributing.md">Contributing</a> •   
<a href="https://github.com/human-internet/humanid-documentation/blob/master/gallery.md">Gallery</a> •   
<a href="https://github.com/human-internet/humanid-documentation/blob/master/faq.md">FAQ</a>  
</p>  
  
<p align="center">  
Meet humanID - An anonymous online identity, enabling platforms to offer the speed and comfort of social logins, while guaranteeing absolute privacy and protecting our communities by permanently blocking bots, spams, and trolls.  
</p>  
  
## Requirements  
- React 16.8.2+  
- React Native 0.55.0+  
- react-native-device-info 7.3.1+  
  
  
## Installation  
##### Yarn  
```
yarn add @human-internet/react-native-humanid react-native-device-info  
```  
##### npm  
```  
npm i @human-internet/react-native-humanid react-native-device-info  
```

##### linking assets (IMPORTANT)
```
npx react-native link
```
  
## Credentials Access  
  
Sign up and create an app at our [developer conosole](https://developers.human-id.org)
  
## Configuration  
at your index.js file  
  
```js
import {configureHumanID} from "@human-internet/react-native-humanid";  
import AppLogo from "path/your-app-logo";
  
configureHumanID({  
    appName: "Your application NAme",
    clientSecret: "APP_SECRET",
    clientId: "APP_ID",
    Icon: AppLogo // Icon is JSX.Element
});
  
AppRegistry.registerComponent(appName, () => App);  
```  
  
## How to use  
  
#### Register humanID Provider at your Top Container Application

```js
import {HumanIDProvider} from "@human-internet/react-native-humanid";
  
const App = () => {
    return (
        <View>
            <HumanIDProvider />
        </View>
    );
};
  
export default App; 
```  
  
#### Login  
  
```js
import {logIn} from "@human-internet/react-native-humanid";
  
const HomeScreen = () => {  
    const handleLogin = () => {
        logIn();
    };
    
    return <Button title="Login" onPress={handleLogin} />;
}  
  
export default HomeScreen;  
```  
  
####  Listener onSuccess, onError, onCancel  
We suggest put this method into lifecycle that only live once on your screen, example: <b>componentDidMount</b> if you use class component, otherwise you can use <b>useEffect</b>  
  
```js
import {onCancel, onSuccess, onError} from "@human-internet/react-native-humanid";  
  
const HomeScreen = () => {  
    React.useEffect(() => {
        const unsubscribeSuccess = () => onSuccess((exchangeToken) => {
          console.log("exchangeToken", exchangeToken)
        });
    
        const unsubscribeError = () => onError(() => {
          console.log("error")
        });
    
        const unsubscribeCancel = () => onCancel(() => {
          console.log("canceled")
        });
    
        unsubscribeSuccess();
        unsubscribeError();
        unsubscribeCancel();
    
        return () => {
          unsubscribeSuccess();
          unsubscribeError();
          unsubscribeCancel();
        }
    }, []);
}  
 
export default HomeScreen;
```  

## You're set!
Now you can integrate your React Native app to humanID. See the full [sample](https://github.com/human-internet/humanid-reactnative-sdk/tree/example) here to learn more.

## License
Copyright 2019-2020 Bluenumber Foundation Licensed under the GNU General Public License v3.0
