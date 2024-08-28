import React from 'react';
import FeaturedProductCard from './FeaturedProductCard';

export default {
  title: 'Components/FeaturedProductCard',
  component: FeaturedProductCard,
  argTypes: {
    productPhoto: {
      control: 'text',
      description: 'URL of the product image.',
      defaultValue: 'https://via.placeholder.com/150',
    },
    productLabel: {
      control: 'text',
      description: 'Label of the product.',
      defaultValue: 'Modern Velvet Sofa',
    },
  },
};

const Template = (args) => <FeaturedProductCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  productPhoto: 'https://via.placeholder.com/150',
  productLabel: 'Modern Velvet Sofa',
};

export const WithDifferentPhoto = Template.bind({});
WithDifferentPhoto.args = {
  productPhoto: 'https://via.placeholder.com/150/0000FF/808080?text=New+Photo',
  productLabel: 'Luxury Leather Chair',
};
