import React from 'react';
import LandingPage from './LandingPage';
import { Meta, Story } from '@storybook/react';

// Define metadata for the Storybook story
export default {
  title: 'Pages/LandingPage',
  component: LandingPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'LandingPage component that renders the main layout of the landing page including various sections like Hero, Featured Products, and Vendor Stories. It also adapts the navigation based on screen size.',
      },
    },
  },
};

// Define a template for the story
const Template = (args) => <LandingPage {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {};
