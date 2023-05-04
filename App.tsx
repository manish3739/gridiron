import React, { useEffect } from 'react';
import {
  Platform,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './app/redux/store/createStore';
import Navigation from './app/navigation';
import { AuthProvider } from './app/contexts/Auth';
import SplashScreen from 'react-native-splash-screen'

const App = () => {

  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.show();
    }
    setTimeout(() => {
      SplashScreen.hide();
    }, 4000)
  }, [])
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <AuthProvider>
          <Navigation />
        </AuthProvider>
      </View>

    </Provider>
  );
};


export default App;
