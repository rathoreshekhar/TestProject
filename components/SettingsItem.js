import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../config/theme';
import { ThemeContext } from '../context/ThemeContext';
import StyledText from './StyledText';

const SettingsItem = ({children, label}) => {
  const {theme} = useContext(ThemeContext);
  let activeColors = colors[theme.mode];
  return (
    <View
      testID="settings-item"
      style={[
        {
          backgroundColor: activeColors.secondary,
        },
        styles.settingsItem,
      ]}>
      <StyledText style={[{color: activeColors.tertiary}, styles.label]}>
        {label}
      </StyledText>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  settingsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 25,
    marginBottom: 2,
  },
  label: {
    fontStyle: 'italic',
  },
});

export default SettingsItem;
