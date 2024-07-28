import { useContext } from 'react';
import { Text } from 'react-native';
import { colors } from '../config/theme';
import { ThemeContext } from '../context/ThemeContext';

const StyledText = ({children, small, big, style, bold, ...props}) => {
  const {theme} = useContext(ThemeContext);
  let activeColors = colors[theme.mode];
  return (
    <Text
      testID="styled-text"
      style={[
        {
          color: activeColors.accent,
          fontSize: small ? 12 : big ? 24 : 16,
          fontWeight: bold || big ? 'bold' : 'normal',
        },
        style,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export default StyledText;
