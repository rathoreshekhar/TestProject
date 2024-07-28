import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import RegisterScreen from '../../screens/RegisterScreen';

describe('RegisterScreen', () => {
    jest.mock('react-native-vector-icons/MaterialIcons', () => 'MaterialIcons');
    jest.mock('react-native-vector-icons/Ionicons', () => 'Ionicons');
    it('renders without crashing', () => {
        render(<RegisterScreen />);
    });

    it('updates input field value when text is entered', () => {
        const { getByTestId } = render(<RegisterScreen />);
        const inputField = getByTestId('username-input');

        fireEvent.changeText(inputField, 'JohnDoe');

        expect(inputField.props.value).toBe('JohnDoe');
    });
});