import React from 'react';
import UserAvatar from './UserAvatar';

export default {
  title: 'Components/UserAvatar',
  component: UserAvatar,
  argTypes: {
    userPhoto: {
      control: 'text',
      description: 'URL of the user photo.',
      defaultValue: 'https://via.placeholder.com/100',
    },
  },
};

const Template = (args) => <UserAvatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  userPhoto: 'https://via.placeholder.com/100', // Example placeholder image URL
};
