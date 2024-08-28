import React from 'react';
import SectionHeader from './SectionHeader';

export default {
  title: 'Components/Section Header',
  component: SectionHeader,
  argTypes: {
    headerTitle: {
      description: 'The title text to display in the section header.',
      control: 'text',
      defaultValue: 'Section Title',
    },
    icon: {
      description: 'An optional icon to display alongside the title.',
      control: 'text',
      defaultValue: '',
    },
  },
};

const Template = (args) => <SectionHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  headerTitle: 'Section Title',
  icon: '', // Leave empty if no icon is used
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  headerTitle: 'Section Title',
  icon: 'https://example.com/icon.svg', // Replace with a valid icon URL
};
