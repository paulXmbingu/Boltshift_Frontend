import React from 'react';
import ProductCatalogCard from './ProductCatalogCard';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'Components/ProductCatalogCard',
  component: ProductCatalogCard,
  parameters: {
    docs: {
      description: {
        component: 'The `ProductCatalogCard` component displays a product image, name, price, and rating in a catalog view. It also includes a link to the product detail page.',
      },
    },
  },
  argTypes: {
    Images: {
      control: 'text',
      description: 'URL of the product image to be displayed.',
      defaultValue: 'https://via.placeholder.com/150',
    },
    Name: {
      control: 'text',
      description: 'The name of the product.',
      defaultValue: 'Sample Product',
    },
    Currency: {
      control: 'text',
      description: 'The currency symbol or code to be displayed before the price.',
      defaultValue: 'Ksh.',
    },
    Price: {
      control: 'number',
      description: 'The price of the product.',
      defaultValue: 1000,
    },
    CounterText: {
      control: 'text',
      description: 'Text showing the number of views or other related information.',
      defaultValue: '200 views',
    },
  },
};

const Template = (args) => (
  <Router>
    <ProductCatalogCard {...args} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  Images: 'https://via.placeholder.com/150',
  Name: 'Sample Product',
  Currency: 'Ksh.',
  Price: 1000,
  CounterText: '200 views',
};
