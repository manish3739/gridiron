import React, { useEffect } from 'react';
import {
  useColorScheme,
  PermissionsAndroid,
  Platform,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './app/redux/store/createStore';
import { NavigationContainer } from '@react-navigation/native';
import AppLoader from './app/components/AppLoader/AppLoader';
import Navigation from './app/navigation';

const App = () => {

  useEffect(() => {
    if (Platform.OS === "android") {
      PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      ]).then((result) => {
        if (
          result["android.permission.CAMERA"] &&
          result["android.permission.READ_EXTERNAL_STORAGE"] &&
          result["android.permission.RECORD_AUDIO"] &&
          result["android.permission.WRITE_EXTERNAL_STORAGE"]
        ) {
        } else if (
          result["android.permission.CAMERA"] ||
          result["android.permission.READ_EXTERNAL_STORAGE"] ||
          result["android.permission.RECORD_AUDIO"] ||
          result["android.permission.WRITE_EXTERNAL_STORAGE"]
        ) {
        }
      });
    }
  }, []);
  return (
    <Provider store={store}>
        <View style={{flex:1,}}>
            {/* <AppLoader /> */}
            <Navigation />
        </View>
    </Provider>
  );
};


export default App;
