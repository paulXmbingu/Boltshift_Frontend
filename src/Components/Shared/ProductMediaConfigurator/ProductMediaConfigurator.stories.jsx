import React from 'react';
import ProductMediaConfigurator from './ProductMediaConfigurator';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'Components/ProductMediaConfigurator',
  component: ProductMediaConfigurator,
  parameters: {
    docs: {
      description: {
        component: 'The `ProductMediaConfigurator` component is an interactive product page component allowing users to select product options, view multiple images, and add the product to their cart or buy it directly.',
      },
    },
  },
  argTypes: {
    productPrice: {
      control: 'number',
      description: 'Base price of the product.',
      defaultValue: 9600,
    },
    mainProductImage: {
      control: 'text',
      description: 'URL of the main product image displayed.',
      defaultValue: 'https://i.pinimg.com/736x/eb/ea/4b/ebea4b4488cd4d1d47cc352e9ade2265.jpg',
    },
    quantity: {
      control: 'number',
      description: 'The quantity of the product selected by the user.',
      defaultValue: 1,
    },
    selectedRadio: {
      control: 'select',
      options: ['option1', 'option2', 'option3', 'option4', 'option5'],
      description: 'Selected radio option for color selection.',
      defaultValue: 'option1',
    },
    selectedTag: {
      control: 'select',
      options: ['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6', 'tag7'],
      description: 'Selected tag for size selection.',
      defaultValue: 'tag1',
    },
    productThumbnails: {
      control: 'array',
      description: 'An array of URLs for product thumbnail images.',
      defaultValue: [
        'https://i.pinimg.com/736x/eb/ea/4b/ebea4b4488cd4d1d47cc352e9ade2265.jpg',
        'https://i.pinimg.com/736x/2b/21/ac/2b21ac39398f6ede03e66c708610835d.jpg',
        'https://i.pinimg.com/736x/a7/cd/c8/a7cdc8f41910734cfdeb5c42258a029c.jpg',
        'https://i.pinimg.com/736x/0d/97/c5/0d97c54c0e0f845a6f5741b6b78598b3.jpg',
        'https://i.pinimg.com/736x/8e/57/c0/8e57c01507456463c55da3dcf21c78d2.jpg',
        'https://i.pinimg.com/736x/b9/a4/1c/b9a41c493e385d96a3a470c3662dd6c8.jpg',
        'https://i.pinimg.com/736x/67/ff/16/67ff16257c0fbb21bde0af00c7524a3c.jpg',
        'https://i.pinimg.com/736x/dc/ce/4a/dcce4aefc6aa896485a4942b7ebcfcdb.jpg'
      ],
    },
  },
};

const Template = (args) => (
  <Router>
    <ProductMediaConfigurator {...args} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  productPrice: 9600,
  mainProductImage: 'https://i.pinimg.com/736x/eb/ea/4b/ebea4b4488cd4d1d47cc352e9ade2265.jpg',
  quantity: 1,
  selectedRadio: 'option1',
  selectedTag: 'tag1',
  productThumbnails: [
    'https://i.pinimg.com/736x/eb/ea/4b/ebea4b4488cd4d1d47cc352e9ade2265.jpg',
    'https://i.pinimg.com/736x/2b/21/ac/2b21ac39398f6ede03e66c708610835d.jpg',
    'https://i.pinimg.com/736x/a7/cd/c8/a7cdc8f41910734cfdeb5c42258a029c.jpg',
    'https://i.pinimg.com/736x/0d/97/c5/0d97c54c0e0f845a6f5741b6b78598b3.jpg',
    'https://i.pinimg.com/736x/8e/57/c0/8e57c01507456463c55da3dcf21c78d2.jpg',
    'https://i.pinimg.com/736x/b9/a4/1c/b9a41c493e385d96a3a470c3662dd6c8.jpg',
    'https://i.pinimg.com/736x/67/ff/16/67ff16257c0fbb21bde0af00c7524a3c.jpg',
    'https://i.pinimg.com/736x/dc/ce/4a/dcce4aefc6aa896485a4942b7ebcfcdb.jpg',
  ],
};
