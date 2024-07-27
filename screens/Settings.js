import {useContext, useEffect, useState} from 'react';
import {
  Appearance,
  ScrollView,
  StyleSheet,
  Switch,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SettingsItem from '../components/SettingsItem';
import StyledText from '../components/StyledText';
import {colors} from '../config/theme';
import {ThemeContext} from '../context/ThemeContext';
import data from '../data/data.json';

export default SettingsScreen = ({navigation}) => {
  const {theme, updateTheme} = useContext(ThemeContext);
  let activeColors = colors[theme.mode];
  const [isDarkTheme, setIsDarkTheme] = useState(theme.mode === 'dark');
  const [socialPlatforms, setSocialPlatforms] = useState(data.socialPlatforms);

  const toggleTheme = () => {
    updateTheme();
    setIsDarkTheme(prev => !prev);
  };

  const toggleSocial = (index) => {
      const updatedData = [...socialPlatforms];
      updatedData[index].isActive = !updatedData[index].isActive;
      setSocialPlatforms(updatedData);
  };

  useEffect(() => {
    Appearance.addChangeListener(({colorScheme}) => {
      colorScheme === 'dark' ? setIsDarkTheme(true) : setIsDarkTheme(false);
    });
  }, []);

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
          <StyledText>Maro</StyledText>
        </SettingsItem>
      </View>

      <StyledText style={{color: activeColors.accent}} bold>
        Theme Switch
      </StyledText>

      <View style={styles.section}>
        <SettingsItem label="Dark Mode">
          <Switch
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
            <SettingsItem label={item.name}>
              <Switch
                value={item.isActive}
                onValueChange={()=>toggleSocial(index)}
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
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
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
