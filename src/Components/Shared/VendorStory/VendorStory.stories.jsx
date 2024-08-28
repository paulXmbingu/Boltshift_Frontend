import React from 'react';
import VendorStory from './VendorStory';

export default {
  title: 'Components/VendorStory',
  component: VendorStory,
  argTypes: {
    logo: {
      description: 'URL of the vendor logo image',
      control: 'text',
      defaultValue: 'https://via.placeholder.com/150', // Provide a placeholder URL for demo purposes
    },
    label: {
      description: 'Vendor name or label text',
      control: 'text',
      defaultValue: 'Vendor Name',
    },
  },
};

const Template = (args) => <VendorStory {...args} />;

export const Default = Template.bind({});
Default.args = {
  logo: 'https://via.placeholder.com/150', // Replace with actual vendor logo URL
  label: 'Vendor Name',
};
