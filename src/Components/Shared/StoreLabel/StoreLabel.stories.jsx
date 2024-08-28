import React from 'react';
import StoreLabel from './StoreLabel';
import VerifiedTick from '../../../assets/Icons/Illustrated/Verified tick.svg'; // Adjust the path if necessary

export default {
  title: 'Components/Store Label',
  component: StoreLabel,
  argTypes: {
    StoreName: {
      description: 'The name of the store to display in the label.',
      control: 'text',
      defaultValue: 'Store Name',
    },
  },
};

const Template = (args) => <StoreLabel {...args} />;

export const Default = Template.bind({});
Default.args = {
  StoreName: 'Store Name',
};

export const VerifiedStore = Template.bind({});
VerifiedStore.args = {
  StoreName: 'Verified Store',
};
