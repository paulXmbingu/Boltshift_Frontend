import React from 'react';
import { MenuListItem } from './MenuListItem';

export default {
  title: 'Components/MenuListItem',
  component: MenuListItem,
  argTypes: {
    ActionLabel: {
      control: 'text',
      description: 'The label text for the menu item.',
      defaultValue: 'Dashboard',
    },
    MenuIcon: {
      control: 'text',
      description: 'The URL for the menu item icon.',
      defaultValue: 'https://example.com/icon.png',
    },
  },
};

const Template = (args) => <MenuListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  ActionLabel: 'Dashboard',
  MenuIcon: 'https://example.com/icon.png',
};
