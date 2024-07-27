import { useContext } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { colors } from '../config/theme';
import { ThemeContext } from '../context/ThemeContext';

export default function CustomButton({label, onPress}) {
  const {theme} = useContext(ThemeContext);
  let activeColors = colors[theme.mode];

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: activeColors.accent,
        padding: 20,
        borderRadius: 10,
        marginBottom: 30,
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '700',
          fontSize: 16,
          color: '#fff',
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}