import React from 'react';
import VendorStoriesSection from './VendorStoriesSection';
import { Meta, Story } from '@storybook/react';

// Define metadata for the Storybook story
export default {
  title: 'Sections/VendorStoriesSection',
  component: VendorStoriesSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'The VendorStoriesSection component displays a list of vendor stories, each featuring a logo and a label. It provides a visual representation of various vendors.',
      },
    },
  },
};

// Define a template for the story
const Template = (args) => <VendorStoriesSection {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {};
