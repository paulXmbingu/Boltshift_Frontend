import React from 'react';
import PopularCategoriesSection from './PopularCategoriesSection';
import { Meta, Story } from '@storybook/react';

// Define metadata for the Storybook story
export default {
  title: 'Sections/PopularCategoriesSection',
  component: PopularCategoriesSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'The PopularCategoriesSection component displays various categories with associated icons. It includes a section header and a grid of category cards, each representing different product categories.',
      },
    },
  },
};

// Define a template for the story
const Template = (args) => <PopularCategoriesSection {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {};
