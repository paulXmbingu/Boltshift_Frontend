import React from 'react';
import DiscountTag from './DiscountTag';

export default {
  title: 'Components/DiscountTag',
  component: DiscountTag,
  argTypes: {
    tagText: {
      control: 'text',
      description: 'The text displayed inside the discount tag.',
      defaultValue: 'Opening Sales Discount 50%',
    },
  },
};

const Template = (args) => <DiscountTag {...args} />;

export const Default = Template.bind({});
Default.args = {
  tagText: 'Opening Sales Discount 50%',
};

