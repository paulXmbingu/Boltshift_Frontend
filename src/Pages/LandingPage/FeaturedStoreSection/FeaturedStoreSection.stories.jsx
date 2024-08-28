import React from 'react';
import FeaturedStoreSection from './FeaturedStoreSection';

export default {
  title: 'Sections/FeaturedStoreSection',
  component: FeaturedStoreSection,
  argTypes: {
    HeaderTitle: {
      description: 'Title of the featured store section',
      control: 'text',
      defaultValue: 'Featured Store',
    },
    HeaderIcon: {
      description: 'Icon to display in the header',
      control: 'text',
      defaultValue: 'https://via.placeholder.com/24', // Placeholder icon URL
    },
  },
};

const Template = (args) => <FeaturedStoreSection {...args} />;

export const Default = Template.bind({});
Default.args = {
  HeaderTitle: 'Featured Store',
  HeaderIcon: 'https://via.placeholder.com/24', // Placeholder icon URL
};
