import React from 'react';
import FilterButton from './FilterButton';
import Filter from '../../assets/Icons/UI/filter-funnel-02.svg';

export default {
  title: 'Components/FilterButton',
  component: FilterButton,
  argTypes: {
    icon: {
      control: 'text',
      description: 'Icon for the FilterButton.',
      defaultValue: Filter,
    },
  },
};

const Template = (args) => <FilterButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: Filter,
};
