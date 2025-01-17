import { useContext, useEffect, useState } from 'react';
import {
  Appearance,
  ScrollView,
  StyleSheet,
  Switch,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import SettingsItem from '../components/SettingsItem';
import StyledText from '../components/StyledText';
import { colors } from '../config/theme';
import { ThemeContext } from '../context/ThemeContext';
import data from '../data/data.json';
import { addEnabledPlatform, resetState } from '../reducers/UserReducer';

export default SettingsScreen = ({navigation}) => {
  const {theme, updateTheme} = useContext(ThemeContext);
  let activeColors = colors[theme.mode];
  const [isDarkTheme, setIsDarkTheme] = useState(theme.mode === 'dark');
  const [socialPlatforms, setSocialPlatforms] = useState(data.socialPlatforms);
  const userData = useSelector(state => state.userReducer);
  const [enabledPlatforms, setEnabledPlatforms] = useState(
    userData.enabledPlatforms,
  );
  const dispatch = useDispatch();

  const toggleTheme = () => {
    updateTheme();
    setIsDarkTheme(prev => !prev);
  };

  const toggleSocial = name => {
    let updatedData = [...enabledPlatforms];
    if (enabledPlatforms.includes(name)) {
      updatedData = updatedData.filter(
        enabledPlatform => enabledPlatform !== name,
      );
    } else {
      updatedData.push(name);
    }
    setEnabledPlatforms(updatedData);
    dispatch(addEnabledPlatform(updatedData));
  };

  useEffect(() => {
    Appearance.addChangeListener(({colorScheme}) => {
      colorScheme === 'dark' ? setIsDarkTheme(true) : setIsDarkTheme(false);
    });
  }, []);

  useEffect(() => {
    console.log('userData', userData);
  }, [enabledPlatforms]);

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
      style={[{backgroundColor: activeColors.primary}, styles.Container]}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <StyledText style={{color: activeColors.accent}} bold>
        User
      </StyledText>

      <View style={styles.section}>
        <SettingsItem label="Name">
          <StyledText>Shekhar Rathore</StyledText>
        </SettingsItem>
      </View>

      <StyledText style={{color: activeColors.accent}} bold>
        Theme Switch
      </StyledText>

      <View style={styles.section}>
        <SettingsItem label="Dark Mode">
          <Switch
            testID="theme-switch"
            value={isDarkTheme}
            onValueChange={toggleTheme}
            thumbColor={isDarkTheme ? '#fff' : activeColors.tertiary}
            ios_backgroundColor={activeColors.primary}
            trackColor={{
              false: activeColors.primary,
              true: activeColors.accent,
            }}></Switch>
        </SettingsItem>
      </View>
      <StyledText style={{color: activeColors.accent}} bold>
        Social Platforms
      </StyledText>

      <View style={styles.section}>
        {socialPlatforms.map((item, index) => (
          <View key={index}>
            <SettingsItem testID="settings-item" label={item}>
              <Switch
                value={enabledPlatforms.includes(item)}
                onValueChange={() => toggleSocial(item)}
                thumbColor={isDarkTheme ? '#fff' : activeColors.tertiary}
                ios_backgroundColor={activeColors.primary}
                trackColor={{
                  false: activeColors.primary,
                  true: activeColors.accent,
                }}></Switch>
            </SettingsItem>
          </View>
        ))}
      </View>
      <View style={styles.logout}>
        <TouchableOpacity
          testID="logout-button"
          onPress={() => {
            dispatch(resetState());
            navigation.navigate('Login');
          }}>
          <SettingsItem>
            <Ionicons name="log-out-outline" size={24} color="red" />
            <StyledText style={{color: 'red'}}> Logout</StyledText>
          </SettingsItem>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 25,
  },
  section: {
    borderRadius: 30,
    overflow: 'hidden',
    marginTop: 25,
    marginBottom: 25,
  },
  logout: {
    bottom: 0,
    position: 'absolute',
    borderRadius: 30,
    overflow: 'hidden',
    marginTop: 25,
    alignSelf: 'center',
    marginBottom: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
