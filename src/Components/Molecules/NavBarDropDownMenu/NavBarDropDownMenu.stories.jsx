import React from 'react';
import { NavBarDropDownMenu, NavBarDropDownMenuMobileLoggedIn } from './NavBarDropDownMenu';

export default {
  title: 'Components/NavBarDropDownMenu',
  component: NavBarDropDownMenu,
};

const TemplateDesktop = (args) => <NavBarDropDownMenu {...args} />;
const TemplateMobile = (args) => <NavBarDropDownMenuMobileLoggedIn {...args} />;

export const DesktopView = TemplateDesktop.bind({});
DesktopView.args = {};

export const MobileView = TemplateMobile.bind({});
MobileView.args = {};
