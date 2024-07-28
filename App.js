/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Appearance } from 'react-native';

import { Provider } from 'react-redux';
import { getData, storeData } from './config/asyncStorage';
import { ThemeContext } from './context/ThemeContext';
import BottomTabNavigator from './screens/BottomTabNavigator';
import FollowStars from './screens/FollowStars';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import store from './store';

const Stack = createNativeStackNavigator();

const App = () => {
  const [theme, setTheme] = useState({mode: Appearance.getColorScheme()});

  const updateTheme = newTheme => {
    let mode;
    if (!newTheme) {
      mode = theme.mode === 'dark' ? 'light' : 'dark';
      newTheme = {mode};
    }
    setTheme(newTheme);
    storeData('homeTheme', newTheme);
  };

  const fetchStoredTheme = async () => {
    try {
      const themeData = await getData('homeTheme');
      if (themeData) {
        updateTheme(themeData);
      }
    } catch ({message}) {
      alert(message);
    }
  };

  useEffect(() => {
    fetchStoredTheme();

    Appearance.addChangeListener(({colorScheme}) => {
      updateTheme();
      setTheme({mode: colorScheme});
    });
  }, []);

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={{theme, updateTheme}}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              options={{headerShown: false}}
              name="Login"
              component={LoginScreen}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="Register"
              component={RegisterScreen}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="FollowStars"
              component={FollowStars}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="BottomTabs"
              component={BottomTabNavigator}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeContext.Provider>
    </Provider>
  );
};

export default App;
