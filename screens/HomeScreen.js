import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {ThemeContext} from '../context/ThemeContext';
import {colors} from '../config/theme';

const HomeScreen = () => {
  const {theme, updateTheme} = useContext(ThemeContext);
  let activeColors = colors[theme.mode];
  return (
    <View>
      <Text>Welcome to the Home Screen!</Text>
    </View>
  );
};

export default HomeScreen;
