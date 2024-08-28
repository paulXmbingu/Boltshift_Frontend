import React from 'react';
import ProductCardLandscapeSM from './ProductCardLandscapeSM';

export default {
  title: 'Components/ProductCardLandscapeSM',
  component: ProductCardLandscapeSM,
  parameters: {
    docs: {
      description: {
        component: 'The `ProductCardLandscapeSM` component is a small landscape product card featuring a product image, label, price, and an "Add to Cart" button.'
      }
    }
  },
  argTypes: {
    ProductImage: {
      control: 'text',
      description: 'URL of the product image to be displayed.',
      defaultValue: 'https://via.placeholder.com/150',
    },
    productLabel: {
      control: 'text',
      description: 'The label or name of the product.',
      defaultValue: 'Sample Product',
    },
    price: {
      control: 'number',
      description: 'The price of the product.',
      defaultValue: 1000,
    }
  }
};

const Template = (args) => <ProductCardLandscapeSM {...args} />;

export const Default = Template.bind({});
Default.args = {
  ProductImage: 'https://via.placeholder.com/150',
  productLabel: 'Sample Product',
  price: 1000,
};
