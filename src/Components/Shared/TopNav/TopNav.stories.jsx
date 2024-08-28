import React from 'react';
import { TopNavLarge, TopNavSmall } from './TopNav';
import { BrandLogoHor } from '../../Atoms/BrandLogo';
import UserAvatar from '../../Atoms/UserAvatar';
import NotificationIcon from '../../Molecules/NotificationIcon';
import SearchInput from '../../Atoms/SearchInput';
import { Btn_Icon_Only_Sec_LG } from '../../Atoms/Button';

export default {
  title: 'Components/TopNav',
  component: TopNavLarge,
  argTypes: {
    userPhoto: {
      description: 'URL of the user avatar photo',
      control: 'text',
      defaultValue: 'https://res.cloudinary.com/excit3/image/upload/v1718726412/Boltshift%20Branding/Paul_Mbingu_-_Avatar_-_Casual_-_Full_BG_tbr4ml.png',
    },
    notificationIcons: {
      description: 'Array of notification icons',
      control: 'array',
      defaultValue: [
        { src: 'path/to/favorite-icon.svg', alt: 'Favorite' },
        { src: 'path/to/cart-icon.svg', alt: 'Cart' },
        { src: 'path/to/bell-icon.svg', alt: 'Bell' },
      ],
    },
    searchInput: {
      description: 'Search input component',
      control: 'boolean',
      defaultValue: true,
    },
    filterIcon: {
      description: 'Filter icon component',
      control: 'boolean',
      defaultValue: true,
    },
  },
};

const TemplateLarge = (args) => <TopNavLarge {...args} />;
const TemplateSmall = (args) => <TopNavSmall {...args} />;

export const Desktop = TemplateLarge.bind({});
Desktop.args = {
  userPhoto: 'https://res.cloudinary.com/excit3/image/upload/v1718726412/Boltshift%20Branding/Paul_Mbingu_-_Avatar_-_Casual_-_Full_BG_tbr4ml.png',
  notificationIcons: [
    { src: 'https://example.com/favorite-icon.svg', alt: 'Favorite' },
    { src: 'https://example.com/cart-icon.svg', alt: 'Cart' },
    { src: 'https://example.com/bell-icon.svg', alt: 'Bell' },
  ],
  searchInput: true,
  filterIcon: true,
};

export const Mobile = TemplateSmall.bind({});
Mobile.args = {
  userPhoto: 'https://res.cloudinary.com/excit3/image/upload/v1718726412/Boltshift%20Branding/Paul_Mbingu_-_Avatar_-_Casual_-_Full_BG_tbr4ml.png',
  notificationIcons: [
    { src: 'https://example.com/favorite-icon.svg', alt: 'Favorite' },
    { src: 'https://example.com/cart-icon.svg', alt: 'Cart' },
    { src: 'https://example.com/bell-icon.svg', alt: 'Bell' },
  ],
  searchInput: true,
  filterIcon: true,
};
