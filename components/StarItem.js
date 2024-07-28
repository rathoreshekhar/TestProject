import { useContext } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../config/theme';
import { ThemeContext } from '../context/ThemeContext';

export default StarItem = ({name, image, platform, isSelected, onPress}) => {
  const {theme} = useContext(ThemeContext);
  let activeColors = colors[theme.mode];

  const getIcon = () => {
    switch (platform) {
      case 'LinkedIn':
        return 'logo-linkedin';
      case 'Instagram':
        return 'logo-instagram';
      case 'Facebook':
        return 'logo-facebook';
      default:
        return 'help-circle';
    }
  };
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={{margin: 10}}
      onPress={onPress}>
      <View
        style={{
          top: 0,
          left: 0,
          position: 'absolute',
          justifyContent: 'center',
          zIndex: 100,
        }}>
        <Ionicons name={getIcon()} size={24} color={activeColors.tint} />
      </View>
      <Image
        style={styles.avatar}
        source={{
          uri: image,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '700',
            fontSize: 16,
            color: activeColors.text,
          }}>
          {name}
        </Text>
        {isSelected && (
          <Ionicons
            name="checkmark-circle-outline"
            size={24}
            color={activeColors.tint}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  avatar: {
    height: 130,
    width: 130,
    borderRadius: 2000,
    borderColor: 'white',
    borderWidth: 2,
  },
  done: {
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
