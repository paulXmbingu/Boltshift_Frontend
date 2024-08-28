import React from 'react';
import FeaturedStoreCard from './FeaturedStoreCard';

export default {
  title: 'Components/FeaturedStoreCard',
  component: FeaturedStoreCard,
  argTypes: {
    storeIcon: {
      control: 'text',
      description: 'URL of the store icon.',
      defaultValue: 'https://via.placeholder.com/100',
    },
    storeDescription: {
      control: 'text',
      description: 'Description of the store.',
      defaultValue: 'This store offers a wide range of high-quality products.',
    },
    storeLabel: {
      control: 'text',
      description: 'Label of the store.',
      defaultValue: 'The Best Store',
    },
  },
};

const Template = (args) => <FeaturedStoreCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  storeIcon: 'https://via.placeholder.com/100',
  storeDescription: 'This store offers a wide range of high-quality products.',
  storeLabel: 'The Best Store',
};

export const WithDifferentDetails = Template.bind({});
WithDifferentDetails.args = {
  storeIcon: 'https://via.placeholder.com/100/FF0000/FFFFFF?text=New+Store',
  storeDescription: 'Discover exclusive deals and a variety of products at this new store.',
  storeLabel: 'Exclusive Deals Store',
};
