import React from 'react';
import { Filters } from './Filters';
import { ReactComponent as PlusIconComponent } from '../../assets/Icons/UI/plus.svg'; // Adjust path as needed
import { ReactComponent as MinusIconComponent } from '../../assets/Icons/UI/minus.svg'; // Adjust path as needed
import { ReactComponent as SubHeaderIconComponent } from '../../assets/Icons/UI/subheader-icon.svg'; // Adjust path as needed

export default {
  title: 'Components/Filters',
  component: Filters,
};

const Template = (args) => <Filters {...args} />;

export const Default = Template.bind({});
Default.args = {
  HeaderLabelText: 'Sample Label',
  PlusIcon: <PlusIconComponent />,
  MinusIcon: <MinusIconComponent />,
  subHeaderIcon: <SubHeaderIconComponent />,
};
