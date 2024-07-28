import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CustomButton from '../../components/CustomButton';

describe('CustomButton', () => {
    test('renders button with correct label', () => {
        const label = 'Submit';
        const { getByText } = render(<CustomButton label={label} />);
        const button = getByText(label);
        expect(button).toBeTruthy();
    });

    test('button is disabled when disabled prop is true', () => {
        const { getByTestId } = render(<CustomButton disabled={true} />);
        const button = getByTestId('custom-button');
        expect(button.props.disabled).toBe(true);
    });

    test('button is enabled when disabled prop is false', () => {
        const { getByTestId } = render(<CustomButton disabled={false} />);
        const button = getByTestId('custom-button');
        expect(button.props.disabled).toBe(false);
    });

    test('onPress function is called when button is pressed', () => {
        const onPressMock = jest.fn();
        const { getByTestId } = render(<CustomButton onPress={onPressMock} />);
        const button = getByTestId('custom-button');
        fireEvent.press(button);
        expect(onPressMock).toHaveBeenCalled();
    });
});