import React from 'react';
import FilterDropDown from './FilterDropDown';

export default {
  title: 'Components/FilterDropDown',
  component: FilterDropDown,
  argTypes: {
    SortBy: {
      control: 'select',
      description: 'The option selected in the dropdown.',
      options: ['Latest', 'Older', 'Popular'],
      defaultValue: 'Latest',
    },
  },
};

const Template = (args) => {
  const handleChange = (event) => {
    console.log('Selected:', event.target.value);
  };

  return <FilterDropDown {...args} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  SortBy: 'Latest',
};
