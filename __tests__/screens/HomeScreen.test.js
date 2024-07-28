import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen from '../../screens/HomeScreen';

describe('HomeScreen', () => {
    it('renders without crashing', () => {
        render(<HomeScreen />);
    });
});