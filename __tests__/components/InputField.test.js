import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import InputField from '../../components/InputField';

describe('InputField', () => {
    test('renders correctly with label and value', () => {
        const { getByText, getByPlaceholderText } = render(
            <InputField label="Username" value="john.doe" />
        );

        const labelElement = getByText('Username');
        const inputElement = getByPlaceholderText('Enter your username');

        expect(labelElement).toBeTruthy();
        expect(inputElement).toBeTruthy();
        expect(inputElement.props.value).toBe('john.doe');
    });

    test('calls onChangeText when input value changes', () => {
        const onChangeText = jest.fn();
        const { getByPlaceholderText } = render(
            <InputField label="Username" onChangeText={onChangeText} />
        );

        const inputElement = getByPlaceholderText('Enter your username');

        fireEvent.changeText(inputElement, 'john.doe');

        expect(onChangeText).toHaveBeenCalledTimes(1);
        expect(onChangeText).toHaveBeenCalledWith('john.doe');
    });

    test('calls fieldButtonFunction when field button is pressed', () => {
        const fieldButtonFunction = jest.fn();
        const { getByText } = render(
            <InputField
                label="Username"
                fieldButtonLabel="Submit"
                fieldButtonFunction={fieldButtonFunction}
            />
        );

        const buttonElement = getByText('Submit');

        fireEvent.press(buttonElement);

        expect(fieldButtonFunction).toHaveBeenCalledTimes(1);
    });
});