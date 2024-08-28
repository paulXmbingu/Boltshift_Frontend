import React from 'react';
import { AvatarOnlyMDPhoto } from './AvatarOnlyMDPhoto';

// Default export for Storybook
export default {
  title: 'Components/AvatarOnlyMDPhoto',
  component: AvatarOnlyMDPhoto,
};

// Template for rendering the component in Storybook
const Template = (args) => <AvatarOnlyMDPhoto {...args} />;

// Default story for the AvatarOnlyMDPhoto
export const Default = Template.bind({});
Default.args = {};
