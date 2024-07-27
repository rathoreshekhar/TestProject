import {useContext} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';
import {colors} from '../config/theme';
import {ThemeContext} from '../context/ThemeContext';
import SettingsItem from '../components/SettingsItem';
import StyledText from '../components/StyledText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import StarItem from '../components/StarItem';

export default FollowStars = ({navigation}) => {
  const {theme} = useContext(ThemeContext);
  let activeColors = colors[theme.mode];
  return (
    <SafeAreaView
      style={{
        backgroundColor: activeColors.primary,
        flex: 1,
        justifyContent: 'center',
      }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 25, marginTop: 50}}>
        <View style={{paddingHorizontal: 25, alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 28,
              fontWeight: '500',
              color: activeColors.tint,
              marginBottom: 30,
            }}>
            Follow atleast 2 stars
          </Text>
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            keyExtractor={item => item.toString()}
            numColumns={2}
            renderItem={({item, index}) => (
              <StarItem
                name={'Star ' + index}
                image="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg"
                onPress={() => {}}
                isSelected={index % 2 == 0}
              />
            )}
          />

          <CustomButton
            label={'Done'}
            onPress={() => {
              navigation.navigate('BottomTabs');
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
