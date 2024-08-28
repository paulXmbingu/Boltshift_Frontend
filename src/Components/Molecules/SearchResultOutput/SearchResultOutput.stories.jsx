import React from 'react';
import SearchResultOutput from './SearchResultOutput';

export default {
  title: 'Components/SearchResultOutput',
  component: SearchResultOutput,
  argTypes: {
    NoOfHits: {
      control: 'text',
      description: 'Number of search results found.',
      defaultValue: '10 results',
    },
    SearchPhrase: {
      control: 'text',
      description: 'The search phrase used.',
      defaultValue: 'Search Phrase Example',
    },
  },
};

const Template = (args) => <SearchResultOutput {...args} />;

export const Default = Template.bind({});
Default.args = {
  NoOfHits: '10 results', // Example number of results
  SearchPhrase: 'Search Phrase Example', // Example search phrase
};
