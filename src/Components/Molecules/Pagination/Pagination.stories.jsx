import React from 'react';
import { Pagination } from './Pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,
};

const Template = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {};
