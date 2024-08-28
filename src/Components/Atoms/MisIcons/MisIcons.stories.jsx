import React from 'react';
import { Star_Yellow_100pc } from './Star_Yellow_100pc';

export default {
  title: 'Icons/Star_Yellow_100pc',
  component: Star_Yellow_100pc,
  argTypes: {
    size: {
      control: 'number',
      description: 'The size of the star icon in pixels.',
      defaultValue: 20,
    },
  },
};

const Template = (args) => <Star_Yellow_100pc {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 20,
};
