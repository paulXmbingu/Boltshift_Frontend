import React from 'react';
import { StoreStatusButton } from './ShopStatusButton';

export default {
  title: 'Components/StoreStatusButton',
  component: StoreStatusButton,
  argTypes: {
    statusLabel: {
      control: 'text',
      description: 'The label text indicating the store status.',
      defaultValue: 'We are Open',
    },
  },
};

const Template = (args) => <StoreStatusButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  statusLabel: 'We are Open',
};
