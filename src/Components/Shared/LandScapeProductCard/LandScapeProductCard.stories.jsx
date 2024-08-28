import React from 'react';
import LandScapeProductCard from './LandScapeProductCard';

export default {
  title: 'Components/LandScapeProductCard',
  component: LandScapeProductCard,
  argTypes: {
    productImage: { control: 'text' },
    productText: { control: 'text' },
    price: { control: 'text' },
  },
};

const Template = (args) => <LandScapeProductCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  productImage: 'https://via.placeholder.com/150', // Placeholder or real image URL
  productText: 'Elegant Wooden Coffee Table',
  price: '12,999',
};
