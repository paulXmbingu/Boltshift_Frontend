import React from 'react';
import { DropdownHeaderLoggedinDesktop, DropdownHeaderLoggedinMobile } from './DropdownListHeader';

export default {
  title: 'Components/DropdownHeaderLoggedin',
  component: DropdownHeaderLoggedinDesktop, // Default component to display
  argTypes: {
    UserName: {
      control: 'text',
      description: 'The name of the logged-in user.',
      defaultValue: 'John Doe',
    },
    Email: {
      control: 'text',
      description: 'The email of the logged-in user.',
      defaultValue: 'john.doe@example.com',
    },
  },
};

const DesktopTemplate = (args) => <DropdownHeaderLoggedinDesktop {...args} />;
const MobileTemplate = (args) => <DropdownHeaderLoggedinMobile {...args} />;

export const Desktop = DesktopTemplate.bind({});
Desktop.args = {
  UserName: 'John Doe',
  Email: 'john.doe@example.com',
};

export const Mobile = MobileTemplate.bind({});
Mobile.args = {
  UserName: 'John Doe',
  Email: 'john.doe@example.com',
};
