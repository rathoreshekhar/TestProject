import { useContext } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../config/theme';
import { ThemeContext } from '../context/ThemeContext';
import { stars } from '../data/data.json';

export default PostItem = ({item}) => {
  const {theme} = useContext(ThemeContext);
  let activeColors = colors[theme.mode];

  let star = stars.find(star => star.id === item.userId);
  const screenWidth = Math.round(Dimensions.get('window').width);
  const styles = StyleSheet.create({
    customListView: {
      padding: 15,
      width: screenWidth - 40,
      flexDirection: 'row',
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: 50,
    },
    infoWrapper: {
      marginLeft: 8,
    },
    namesWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    extraInfoWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    item: {
      backgroundColor: activeColors.primary,
      shadowColor: activeColors.secondary,
      shadowOpacity: 0.3,
      shadowOffset: {height: 0, width: 0},
      marginBottom: 10,
    },
    paragraph: {
      color: activeColors.text,
    },
    contentContainer: {
      paddingHorizontal: 15,
    },
    reactionContainer: {
      flexDirection: 'row',
      flexWrap: 'nowrap',
      alignItems: 'center',
      padding: 10,
    },
    reactionIcon: {
      fontSize: 20,
      padding: 10,
    },
    shareIcon: {
      position: 'absolute',
      fontSize: 14,
      padding: 10,
      marginEnd: 10,
      right: 0,
    },
  });

  const getIcon = () => {
    switch (star.platform) {
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
    <View style={styles.item}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.customListView}>
          <Image
            style={styles.avatar}
            source={{
              uri: star.avatar_url,
            }}></Image>
          <View style={styles.infoWrapper}>
            <View style={styles.namesWrapper}>
              <TouchableOpacity onPress={() => {}}>
                <Text
                  style={{
                    color: activeColors.text,
                    fontSize: 16,
                    fontWeight: '500',
                  }}>
                  {star.name}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.extraInfoWrapper}>
              <Text style={{color: activeColors.text, fontSize: 14}}>
                {item.create_at}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  marginHorizontal: 5,
                  color: activeColors.text,
                }}>
                ·
              </Text>
              <Ionicons name={getIcon()} size={14} color={activeColors.tint} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.paragraph}>{item.content}</Text>
        <Image
          source={{
            uri: item.image,
          }}
          style={{width: '100%', height: 300}}
        />
      </View>

      <View horizontal={true} style={styles.reactionContainer}>
        <TouchableOpacity>
          <Icon
            name="thumbs-up"
            color="#318bfb"
            backgroundColor="#fff"
            style={styles.reactionIcon}></Icon>
        </TouchableOpacity>
        <Text style={{color: activeColors.text, fontSize: 14}}>
          {item.reactions.like}
        </Text>
        <TouchableOpacity>
          <Icon
            name="heart"
            color="#e8304a"
            backgroundColor="white"
            style={styles.reactionIcon}></Icon>
        </TouchableOpacity>
        <Text style={{color: activeColors.text, fontSize: 14}}>
          {item.reactions.love}
        </Text>
        <TouchableOpacity onPress={() => {}} style={styles.shareIcon}>
          <Icon name="share-alt" color="gray">
            <Text style={{fontSize: 12, textAlignVertical: 'center'}}>
              {' '}
              Share
            </Text>
          </Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
};
