import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SettingsScreen from '../../screens/Settings';

describe('SettingsScreen', () => {
    it('renders without crashing', () => {
        render(<SettingsScreen />);
    });

    it('displays the correct number of settings items', () => {
        const { getAllByTestId } = render(<SettingsScreen />);
        const settingsItems = getAllByTestId('settings-item');
        expect(settingsItems.length).toBe(3); 
    });

    it('toggles the switch when clicked', () => {
        const { getByTestId } = render(<SettingsScreen />);
        const switchElement = getByTestId('theme-switch');
        fireEvent.press(switchElement);
        expect(switchElement.props.value).toBe(true); 
    });

    it('navigates to another screen when logout button is pressed', () => {
        const navigationMock = { navigate: jest.fn() };
        const { getByTestId } = render(<SettingsScreen navigation={navigationMock} />);
        const logoutButton = getByTestId('logout-button');
        fireEvent.press(logoutButton);
        expect(navigationMock.navigate).toHaveBeenCalledWith('Login'); 
    });
});