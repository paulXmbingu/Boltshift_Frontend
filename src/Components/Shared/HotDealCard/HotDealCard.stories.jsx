import React from 'react';
import HotDealCard from './HotDealCard';
import FireIcon from '../../../assets/Icons/Illustrated/Fire.svg';

export default {
  title: 'Components/HotDealCard',
  component: HotDealCard,
  argTypes: {
    imageSrc: { control: 'text' },
    productNameText: { control: 'text' },
    ammount: { control: 'text' },
    noSold: { control: 'text' },
  },
};

const Template = (args) => <HotDealCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageSrc: 'https://via.placeholder.com/150', // Replace with a placeholder image or a real image URL
  productNameText: 'Modern White Velvet Sofa',
  ammount: '63,073',
  noSold: '250',
};
