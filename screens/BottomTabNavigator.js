import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useContext } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../config/theme';
import { ThemeContext } from '../context/ThemeContext';
import FollowStars from './FollowStars';
import HomeScreen from './HomeScreen';
import SettingsScreen from './Settings';

const Tab = createBottomTabNavigator();
export default function BottomTabNavigator() {
  const {theme, updateTheme} = useContext(ThemeContext);
  let activeColors = colors[theme.mode];

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          backgroundColor: activeColors.secondary,
        },
        headerShown: true,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
            return <Ionicons name={iconName} size={24} color={color} />;
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
            return <Ionicons name={iconName} size={24} color={color} />;
          } else if (route.name === 'Follow') {
            iconName = focused ? 'star' : 'star-outline';
            return <Ionicons name={iconName} size={24} color={color} />;
          }
          return <Ionicons name={iconName} size={24} color={color} />;
        },
        tabBarActiveTintColor: activeColors.accent,
        tabBarInactiveTintColor: activeColors.tertiary,
        tabBarStyle: {
          backgroundColor: activeColors.secondary,
        },
        headerTitleStyle: {
          fontSize: 24,
        },
        headerStyle: {
          backgroundColor: activeColors.secondary,
        },
        headerTintColor: activeColors.tint,
      })}>
      <Tab.Screen
        testID="tab-1"
        name="Home"
        options={() => {
          return {
            headerTitle: 'Posts',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 24,
            },
          };
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        testID="tab-0"
        name="Follow"
        options={() => {
          return {
            headerTitle: 'Follow Stars',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 24,
            },
          };
        }}
        component={FollowStars}
      />
      <Tab.Screen
        testID="tab-2"
        name="Settings"
        component={SettingsScreen}
        options={() => {
          return {
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 24,
            },
          };
        }}
      />
    </Tab.Navigator>
  );
}
