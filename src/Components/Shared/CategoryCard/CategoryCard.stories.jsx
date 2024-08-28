import React from 'react';
import CategoryCard from './CategoryCard';
import sampleIcon from '../../../assets/Icons/UI/sample-icon.svg';

export default {
  title: 'Components/CategoryCard',
  component: CategoryCard,
  argTypes: {
    icon: {
      control: 'text',
      description: 'URL of the category icon.',
      defaultValue: sampleIcon,
    },
    name: {
      control: 'text',
      description: 'Name of the category.',
      defaultValue: 'Category Name',
    },
    isAllCategories: {
      control: 'boolean',
      description: 'Whether to apply shadow style for "All Categories".',
      defaultValue: false,
    },
  },
};

const Template = (args) => <CategoryCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: sampleIcon,
  name: 'Category Name',
  isAllCategories: false,
};

export const WithShadow = Template.bind({});
WithShadow.args = {
  icon: sampleIcon,
  name: 'All Categories',
  isAllCategories: true,
};

export const CustomCategory = Template.bind({});
CustomCategory.args = {
  icon: 'https://via.placeholder.com/50', // Replace with a real icon URL if needed
  name: 'Custom Category',
  isAllCategories: false,
};
