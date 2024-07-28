import { render } from '@testing-library/react-native';
import React from 'react';
import BottomTabNavigator from '../../screens/BottomTabNavigator';

describe('BottomTabNavigator', () => {
  it('renders without crashing', () => {
    render(<BottomTabNavigator />);
  });

  it('renders the FollowStars screen as the first tab', () => {
    const {getByTestId} = render(<BottomTabNavigator />);
    const firstTab = getByTestId('tab-0');
    expect(firstTab).toHaveTextContent('Follow Stars');
  });

  it('renders the HomeScreen screen as the second tab', () => {
    const {getByTestId} = render(<BottomTabNavigator />);
    const secondTab = getByTestId('tab-1');
    expect(secondTab).toHaveTextContent('Posts');
  });

  it('renders the SettingsScreen screen as the third tab', () => {
    const {getByTestId} = render(<BottomTabNavigator />);
    const thirdTab = getByTestId('tab-2');
    expect(thirdTab).toHaveTextContent('Settings');
  });
});
