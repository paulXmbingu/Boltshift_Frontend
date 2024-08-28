import React from 'react';
import NotificationIcon from './NotificationIcon';

// Default icon URL for example purposes
const defaultIcon = 'https://via.placeholder.com/24';

export default {
  title: 'Components/NotificationIcon',
  component: NotificationIcon,
  argTypes: {
    icon: {
      control: 'text',
      description: 'URL of the notification icon.',
      defaultValue: defaultIcon,
    },
  },
};

const Template = (args) => <NotificationIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: defaultIcon,
};
