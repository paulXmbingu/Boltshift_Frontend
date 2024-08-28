import React from 'react';
import { HeroCardDesktop, HeroCardMobile } from './HeroCard';

// You can import additional components or assets if needed
// import { ReactComponent as TailIcon } from '../../../assets/Icons/UI/chevron-right.svg';
// import DiscountTag from '../../Atoms/DiscountTag';
// import HeroPagination from '../HeroPagination';
// import FavoriteButton from '../FavoriteButton';
// import { Btn_Pri_XL } from '../../Atoms/Button';

export default {
  title: 'Components/HeroCard',
  component: HeroCardDesktop,
};

const TemplateDesktop = (args) => <HeroCardDesktop {...args} />;
const TemplateMobile = (args) => <HeroCardMobile {...args} />;

export const DefaultDesktop = TemplateDesktop.bind({});
DefaultDesktop.args = {
  // You can define default args if your component accepts props
};

export const DefaultMobile = TemplateMobile.bind({});
DefaultMobile.args = {
  // You can define default args if your component accepts props
};
