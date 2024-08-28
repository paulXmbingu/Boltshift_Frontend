// ButtonGroup.stories.js

import React from 'react';
import { ButtonGroup } from './ButtonGroup';

// Storybook configuration
export default {
    title: 'Components/ButtonGroup',
    component: ButtonGroup,
    parameters: {
        docs: {
            description: {
                component: 'The `ButtonGroup` component is a button that can include an optional leading icon and a call-to-action (CTA) text. It is styled using the `ButtonGroup.module.css` file.',
            },
        },
    },
};

// Template for rendering the component
const Template = (args) => <ButtonGroup {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {
    ButtonCTA: 'Click Me',
};

// Story with Leading Icon
export const WithLeadingIcon = Template.bind({});
WithLeadingIcon.args = {
    LeadingIcon: 'path/to/leading-icon.svg', // Replace with the actual path to your icon
    ButtonCTA: 'Click Me',
};

// Documentation
Default.storyName = 'Default ButtonGroup';
Default.parameters = {
    docs: {
        storyDescription: 'The default view of the `ButtonGroup` component with just the CTA text.',
    },
};

WithLeadingIcon.storyName = 'ButtonGroup with Leading Icon';
WithLeadingIcon.parameters = {
    docs: {
        storyDescription: 'This version of the `ButtonGroup` includes a leading icon along with the CTA text.',
    },
};
