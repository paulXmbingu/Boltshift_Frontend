import React from 'react';
import {
    Badge_PillColor_SM_LeadIcon_Success,
    Badge_PillOutline_LG_LeadingIcon_BrandColor,
    Badge_PillColor_SM_Gray,
    Badge_PillColor_SM_Brand,
    Badge_PillColor_SM_Error,
    Badge_PillColor_SM_Warning,
    Badge_PillColor_SM_Success,
    Badge_PillColor_SM_GrayBlue,
    Badge_PillColor_SM_BlueLight,
    Badge_PillColor_SM_Blue,
    Badge_PillColor_SM_Indigo,
    Badge_PillColor_SM_Purple,
    Badge_PillColor_SM_Pink,
    Badge_PillColor_SM_Orange,
} from './Badge';

// Default export for Storybook
export default {
    title: 'Components/Badge',
};

// Template for each Badge component
const TemplateIconSuccess = (args) => <Badge_PillColor_SM_LeadIcon_Success {...args} />;
const TemplateOutlineBrand = (args) => <Badge_PillOutline_LG_LeadingIcon_BrandColor {...args} />;
const TemplatePillColorSM = (Component) => (args) => <Component {...args} />;

// Stories
export const PillColorSM_LeadIcon_Success = TemplateIconSuccess.bind({});
PillColorSM_LeadIcon_Success.args = {
    LeadingIcon: 'https://path-to-icon/icon.png',
    Label: 'Success',
};

export const PillOutline_LG_LeadingIcon_BrandColor = TemplateOutlineBrand.bind({});
PillOutline_LG_LeadingIcon_BrandColor.args = {
    LeadingIcon: 'https://path-to-icon/icon.png',
    BadgeLabel: 'Brand',
};

// Pill Color Small Variants
export const PillColorSM_Gray = TemplatePillColorSM(Badge_PillColor_SM_Gray).bind({});
PillColorSM_Gray.args = { BadgeLabel: 'Gray' };

export const PillColorSM_Brand = TemplatePillColorSM(Badge_PillColor_SM_Brand).bind({});
PillColorSM_Brand.args = { BadgeLabel: 'Brand' };

export const PillColorSM_Error = TemplatePillColorSM(Badge_PillColor_SM_Error).bind({});
PillColorSM_Error.args = { BadgeLabel: 'Error' };

export const PillColorSM_Warning = TemplatePillColorSM(Badge_PillColor_SM_Warning).bind({});
PillColorSM_Warning.args = { BadgeLabel: 'Warning' };

export const PillColorSM_Success = TemplatePillColorSM(Badge_PillColor_SM_Success).bind({});
PillColorSM_Success.args = { BadgeLabel: 'Success' };

export const PillColorSM_GrayBlue = TemplatePillColorSM(Badge_PillColor_SM_GrayBlue).bind({});
PillColorSM_GrayBlue.args = { BadgeLabel: 'Gray Blue' };

export const PillColorSM_BlueLight = TemplatePillColorSM(Badge_PillColor_SM_BlueLight).bind({});
PillColorSM_BlueLight.args = { BadgeLabel: 'Blue Light' };

export const PillColorSM_Blue = TemplatePillColorSM(Badge_PillColor_SM_Blue).bind({});
PillColorSM_Blue.args = { BadgeLabel: 'Blue' };

export const PillColorSM_Indigo = TemplatePillColorSM(Badge_PillColor_SM_Indigo).bind({});
PillColorSM_Indigo.args = { BadgeLabel: 'Indigo' };

export const PillColorSM_Purple = TemplatePillColorSM(Badge_PillColor_SM_Purple).bind({});
PillColorSM_Purple.args = { BadgeLabel: 'Purple' };

export const PillColorSM_Pink = TemplatePillColorSM(Badge_PillColor_SM_Pink).bind({});
PillColorSM_Pink.args = { BadgeLabel: 'Pink' };

export const PillColorSM_Orange = TemplatePillColorSM(Badge_PillColor_SM_Orange).bind({});
PillColorSM_Orange.args = { BadgeLabel: 'Orange' };
