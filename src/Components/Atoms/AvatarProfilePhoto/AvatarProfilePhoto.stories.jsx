import React from 'react';
import { AvatarProfilePhotoSM, AvatarProfilePhotoMD } from './AvatarProfilePhoto';

// Default export for Storybook
export default {
  title: 'Components/AvatarProfilePhoto',
  component: AvatarProfilePhotoSM,
};

// Template for AvatarProfilePhotoSM
const TemplateSM = (args) => <AvatarProfilePhotoSM {...args} />;

// Template for AvatarProfilePhotoMD
const TemplateMD = (args) => <AvatarProfilePhotoMD {...args} />;

// Small Avatar Profile Photo Story
export const Small = TemplateSM.bind({});
Small.args = {
  UserPhoto: 'https://res.cloudinary.com/excit3/image/upload/v1718726412/Boltshift%20Branding/Paul_Mbingu_-_Avatar_-_Casual_-_Full_BG_tbr4ml.png',
};

// Medium Avatar Profile Photo Story
export const Medium = TemplateMD.bind({});
Medium.args = {
  UserPhoto: 'https://res.cloudinary.com/excit3/image/upload/v1718726412/Boltshift%20Branding/Paul_Mbingu_-_Avatar_-_Casual_-_Full_BG_tbr4ml.png',
};
