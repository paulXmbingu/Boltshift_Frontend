import React from 'react';
import PortraitProductCardMD from './PortraitProductCardMD';

export default {
  title: 'Components/PortraitProductCardMD',
  component: PortraitProductCardMD,
  parameters: {
    docs: {
      description: {
        component: 'The `PortraitProductCardMD` component is a medium-sized product card with an image, product label, and price, including an option to add the product to the cart.'
      }
    }
  },
  argTypes: {
    productImage: {
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

const Template = (args) => <PortraitProductCardMD {...args} />;

export const Default = Template.bind({});
Default.args = {
  productImage: 'https://via.placeholder.com/150',
  productLabel: 'Sample Product',
  price: 1000,
};
