import React from 'react';
import { HorTabUnderLineSM, HorTabUnderLineSMSelected } from './Tab';

export default {
  title: 'Components/Horizontal Tabs',
  component: HorTabUnderLineSM,
  argTypes: {
    tabLabel: {
      control: 'text',
      description: 'The label text for the tab.',
      defaultValue: 'Tab Label',
    },
  },
};

const Template = (args) => <HorTabUnderLineSM {...args} />;
const SelectedTemplate = (args) => <HorTabUnderLineSMSelected {...args} />;

export const Default = Template
