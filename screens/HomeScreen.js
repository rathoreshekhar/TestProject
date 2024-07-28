import React, { useContext, useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text } from 'react-native';

import { useSelector } from 'react-redux';
import PostItem from '../components/PostItem';
import { colors } from '../config/theme';
import { ThemeContext } from '../context/ThemeContext';
import data from '../data/data.json';

const HomeScreen = () => {
  const {theme, updateTheme} = useContext(ThemeContext);
  let activeColors = colors[theme.mode];
  const userData = useSelector(state => state.userReducer);
  const [posts, setPosts] = useState(data.posts);

  useEffect(() => {
    let filteredPosts = data.posts.filter(post => {
      let filteredStars = data.stars.filter(star =>
        userData.enabledPlatforms.includes(star.platform),
      );
      return (
        userData.followingStars.includes(post.userId) &&
        filteredStars.find(star => star.id === post.userId)
      );
    });
    setPosts(filteredPosts);
  }, [userData.enabledPlatforms, userData.followingStars]);

  return (
    <SafeAreaView
      style={{
        backgroundColor: activeColors.primary,
        flex: 1,
        justifyContent: 'center',
      }}>
      <FlatList
        data={posts}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => <PostItem item={item} />}
        ListEmptyComponent={<Text>No posts found</Text>}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
