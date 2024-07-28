import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import LoginScreen from '../../screens/LoginScreen';

describe('LoginScreen', () => {
    jest.mock('react-native-vector-icons/MaterialIcons', () => 'MaterialIcons');
    jest.mock('react-native-vector-icons/Ionicons', () => 'Ionicons');
    it('renders without crashing', () => {
        render(<LoginScreen />);
    });

    it('displays the login form', () => {
        const { getByPlaceholderText, getByText } = render(<LoginScreen />);
        
        expect(getByPlaceholderText('Email')).toBeTruthy();
        expect(getByPlaceholderText('Password')).toBeTruthy();
        
        expect(getByText('Login')).toBeTruthy();
    });

    it('updates the email and password fields correctly', () => {
        const { getByPlaceholderText } = render(<LoginScreen />);
        const emailInput = getByPlaceholderText('Email');
        const passwordInput = getByPlaceholderText('Password');

        fireEvent.changeText(emailInput, 'test@example.com');
        fireEvent.changeText(passwordInput, 'password123');

        expect(emailInput.props.value).toBe('test@example.com');
        expect(passwordInput.props.value).toBe('password123');
    });

    it('navigates to the home screen on successful login', () => {
        const navigationMock = { navigate: jest.fn() };
        const { getByText } = render(<LoginScreen navigation={navigationMock} />);
        const loginButton = getByText('Login');

        fireEvent.press(loginButton);

        expect(navigationMock.navigate).toHaveBeenCalledWith('Home');
    });
});