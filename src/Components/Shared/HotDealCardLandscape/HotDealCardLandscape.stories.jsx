import React from 'react';
import HotDealCardLandscape from './HotDealCardLandscape';
import FireIcon from '../../../assets/Icons/Illustrated/Fire.svg';

export default {
  title: 'Components/HotDealCardLandscape',
  component: HotDealCardLandscape,
  argTypes: {
    imageSrc: { control: 'text' },
    productNameText: { control: 'text' },
    ammount: { control: 'text' },
    noSold: { control: 'text' },
  },
};

const Template = (args) => <HotDealCardLandscape {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageSrc: 'https://via.placeholder.com/150', // Placeholder or real image URL
  productNameText: 'Modern White Velvet Sofa',
  ammount: '63,073',
  noSold: '250',
};
