import { useContext, useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../components/CustomButton';
import StarItem from '../components/StarItem';
import { colors } from '../config/theme';
import { ThemeContext } from '../context/ThemeContext';
import data from '../data/data.json';
import { addFollowingStar } from '../reducers/UserReducer';

export default FollowStars = ({navigation}) => {
  const {theme} = useContext(ThemeContext);
  let activeColors = colors[theme.mode];
  const [stars, setStars] = useState(data.stars);

  const dispatch = useDispatch();
  const userData = useSelector(state => state.userReducer);
  const [followingIds, setFollowingIds] = useState(userData.followingStars);
  useEffect(() => {
    let filteredStars = data.stars.filter(star =>
      userData.enabledPlatforms.includes(star.platform),
    );
    setStars(filteredStars);
  }, [userData.enabledPlatforms]);

  return (
    <SafeAreaView
      style={{
        backgroundColor: activeColors.primary,
        flex: 1,
        justifyContent: 'center',
      }}>
      <View style={{paddingHorizontal: 25, alignItems: 'center', flex: 1}}>
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
          data={stars}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          ListEmptyComponent={<Text>No stars found</Text>}
          renderItem={({item, index}) => (
            <StarItem
              name={item.name}
              image={item.avatar_url}
              platform={item.platform}
              onPress={() => {
                if (followingIds.includes(item.id)) {
                  setFollowingIds(followingIds.filter(id => id !== item.id));
                } else {
                  setFollowingIds([...followingIds, item.id]);
                }
              }}
              isSelected={followingIds.includes(item.id)}
            />
          )}
        />

        <CustomButton
          label={'Done'}
          disabled={followingIds.length < 2}
          onPress={() => {
            dispatch(addFollowingStar(followingIds));
            navigation.navigate('BottomTabs');
          }}
        />
      </View>
    </SafeAreaView>
  );
};
