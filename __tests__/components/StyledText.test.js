import React from 'react';
import { render } from '@testing-library/react-native';
import StyledText from '../../components/StyledText';

describe('StyledText', () => {
    it('renders children correctly', () => {
        const { getByText } = render(<StyledText>Hello World</StyledText>);
        expect(getByText('Hello World')).toBeTruthy();
    });

    it('applies small style correctly', () => {
        const { getByTestId } = render(<StyledText small />);
        expect(getByTestId('styled-text')).toHaveStyle({ fontSize: 12 });
    });

    it('applies big style correctly', () => {
        const { getByTestId } = render(<StyledText big />);
        expect(getByTestId('styled-text')).toHaveStyle({ fontSize: 20 });
    });

    it('applies bold style correctly', () => {
        const { getByTestId } = render(<StyledText bold />);
        expect(getByTestId('styled-text')).toHaveStyle({ fontWeight: 'bold' });
    });

    it('applies custom style correctly', () => {
        const customStyle = { color: 'red', textDecorationLine: 'underline' };
        const { getByTestId } = render(<StyledText style={customStyle} />);
        expect(getByTestId('styled-text')).toHaveStyle(customStyle);
    });

});