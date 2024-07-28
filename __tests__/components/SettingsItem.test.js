import React from 'react';
import { render } from '@testing-library/react-native';
import SettingsItem from '../../components/SettingsItem';

describe('SettingsItem', () => {
    it('renders without crashing', () => {
        render(<SettingsItem />);
    });

    it('renders the label correctly', () => {
        const label = 'Test Label';
        const { getByText } = render(<SettingsItem label={label} />);
        const labelElement = getByText(label);
        expect(labelElement).toBeTruthy();
    });

    it('renders the children correctly', () => {
        const children = <Text>Test Children</Text>;
        const { getByText } = render(<SettingsItem>{children}</SettingsItem>);
        const childrenElement = getByText('Test Children');
        expect(childrenElement).toBeTruthy();
    });

    it('applies the correct styles', () => {
        const { getByTestId } = render(<SettingsItem />);
        const settingsItem = getByTestId('settings-item');
        expect(settingsItem).toHaveStyle({
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 60,
            paddingHorizontal: 25,
            marginBottom: 2,
        });
    });
});