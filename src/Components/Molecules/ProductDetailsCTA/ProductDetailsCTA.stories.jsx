import React from 'react';
import ProductDetailsCTA from './ProductDetailsCTA';
import TailIcon from '../assets/Icons/UI/chevron-right.svg';

export default {
  title: 'Components/ProductDetailsCTA',
  component: ProductDetailsCTA,
  argTypes: {
    // If there were dynamic props, you would define them here
  },
};

const Template = (args) => <ProductDetailsCTA {...args} />;

export const Default = Template.bind({});
Default.args = {
  // If there were props to pass in, they would go here
};
