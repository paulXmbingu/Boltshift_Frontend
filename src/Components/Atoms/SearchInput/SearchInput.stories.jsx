import React, { useState } from 'react';
import SearchInput from './SearchInput';

export default {
  title: 'Components/SearchInput',
  component: SearchInput,
  argTypes: {
    query: {
      control: 'text',
      description: 'The text entered in the search input.',
      defaultValue: '',
    },
  },
};

const Template = (args) => {
  const [query, setQuery] = useState(args.query);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Searching for:', query);
  };

  return (
    <SearchInput
      {...args}
      query={query}
      onInputChange={handleInputChange}
      onSubmit={handleSubmit}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  query: '',
};
