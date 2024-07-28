import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import StarItem from '../../components/StarItem';

describe('StarItem', () => {
    it('renders correctly with the provided props', () => {
        const name = 'John Doe';
        const image = 'https://example.com/avatar.jpg';
        const platform = 'Facebook';
        const isSelected = true;
        const onPress = jest.fn();

        const { getByText, getByTestId } = render(
            <StarItem
                name={name}
                image={image}
                platform={platform}
                isSelected={isSelected}
                onPress={onPress}
            />
        );

        const nameElement = getByText(name);
        const imageElement = getByTestId('star-item-image');
        const platformElement = getByText(platform);

        expect(nameElement).toBeTruthy();
        expect(imageElement).toBeTruthy();
        expect(platformElement).toBeTruthy();
    });

    it('calls the onPress function when pressed', () => {
        const onPress = jest.fn();

        const { getByTestId } = render(
            <StarItem
                name="John Doe"
                image="https://example.com/avatar.jpg"
                platform="Facebook"
                isSelected={true}
                onPress={onPress}
            />
        );

        const starItem = getByTestId('star-item');
        fireEvent.press(starItem);

        expect(onPress).toHaveBeenCalledTimes(1);
    });
});