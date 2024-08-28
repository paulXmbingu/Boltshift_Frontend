import React from 'react';
import HeroPagination from './HeroPagination';

export default {
  title: 'Components/HeroPagination',
  component: HeroPagination,
};

const Template = (args) => <HeroPagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  // No args for this component, but you can add any if needed
};
