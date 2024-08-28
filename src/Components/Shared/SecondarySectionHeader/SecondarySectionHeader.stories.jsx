import React from 'react';
import { SecSectionHeader } from './SecondarySectionHeader';

export default {
  title: 'Components/Secondary Section Header',
  component: SecSectionHeader,
  argTypes: {
    headerTitle: {
      description: 'The title text to display in the secondary section header.',
      control: 'text',
      defaultValue: 'Section Title',
    },
  },
};

const Template = (args) => <SecSectionHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  headerTitle: 'Section Title',
};
