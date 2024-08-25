import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/styles/GlobalStyle';
import theme from '../src/styles/theme';
import {withDesign} from 'storybook-addon-designs'

// Example: Adding a ThemeProvider decorator globally
addDecorator((story) => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        {story()}
    </ThemeProvider>
));

// Example: Adding a decorator for padding or layout
addDecorator((story) => (
    <div style={{ padding: '20px' }}>
        {story()}
    </div>
));

// Export parameters globally, e.g., layout settings
export const parameters = {
    layout: 'centered', // Center all stories by default
};
