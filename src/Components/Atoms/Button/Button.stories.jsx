// Button.stories.js

import React from 'react';
import {
    Btn_Pri_SM,
    Btn_Pri_XL,
    Btn_Primary_MD,
    Btn_Primary_LG,
    Btn_Sec_Gray_SM,
    Btn_Sec_Color_SM,
    Btn_Sec_Color_XL,
    Btn_Ter_Grey_SM,
    Btn_Ter_LG,
    Btn_Icon_Only_Sec_LG,
    Btn_LinkGray_SM,
} from './Button';

// Storybook configuration
export default {
    title: 'Components/Buttons',
    component: Btn_Pri_SM,
    parameters: {
        docs: {
            description: {
                component: 'This collection includes various button components with different styles, sizes, and optional icons.',
            },
        },
    },
};

// Template for rendering each button component
const Template = (args) => <args.component {...args} />;

// Default story for each button
export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
    component: Btn_Pri_SM,
    ButtonCTA: 'Primary SM',
};

export const PrimaryExtraLarge = Template.bind({});
PrimaryExtraLarge.args = {
    component: Btn_Pri_XL,
    ButtonCTA: 'Primary XL',
};

export const PrimaryMedium = Template.bind({});
PrimaryMedium.args = {
    component: Btn_Primary_MD,
    ButtonCTA: 'Primary MD',
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
    component: Btn_Primary_LG,
    ButtonCTA: 'Primary LG',
};

export const SecondaryGraySmall = Template.bind({});
SecondaryGraySmall.args = {
    component: Btn_Sec_Gray_SM,
    ButtonCTA: 'Secondary Gray SM',
};

export const SecondaryColorSmall = Template.bind({});
SecondaryColorSmall.args = {
    component: Btn_Sec_Color_SM,
    ButtonCTA: 'Secondary Color SM',
};

export const SecondaryColorXL = Template.bind({});
SecondaryColorXL.args = {
    component: Btn_Sec_Color_XL,
    ButtonCTA: 'Secondary Color XL',
};

export const TertiaryGreySmall = Template.bind({});
TertiaryGreySmall.args = {
    component: Btn_Ter_Grey_SM,
    ButtonCTA: 'Tertiary Grey SM',
};

export const TertiaryLarge = Template.bind({});
TertiaryLarge.args = {
    component: Btn_Ter_LG,
    ButtonCTA: 'Tertiary LG',
};

export const IconOnlySecondaryLarge = Template.bind({});
IconOnlySecondaryLarge.args = {
    component: Btn_Icon_Only_Sec_LG,
    Icon: 'Icon.svg',
};

export const LinkGraySmall = Template.bind({});
LinkGraySmall.args = {
    component: Btn_LinkGray_SM,
    ButtonCTA: 'Link Gray SM',
};

// Documentation for individual stories
PrimarySmall.storyName = 'Primary Small Button';
PrimarySmall.parameters = {
    docs: {
        storyDescription: 'A small primary button with optional leading and trailing icons.',
    },
};

PrimaryExtraLarge.storyName = 'Primary Extra Large Button';
PrimaryExtraLarge.parameters = {
    docs: {
        storyDescription: 'An extra-large primary button with optional leading and trailing icons.',
    },
};

// Add similar documentation for other stories as needed

