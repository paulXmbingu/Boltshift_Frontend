// TextareaInputField.stories.js

import React from 'react';
import { TextareaInputField } from './Inputs';
import DefaultHelpIcon from "./Assets/help-circle.svg";

export default {
  title: 'Components/TextareaInputField',
  component: TextareaInputField,
  argTypes: {
    Label: { control: 'text' },
    Asterisk: { control: 'text' },
    HelpIcon: { control: 'text' },
    HintText: { control: 'text' },
    TextArea: { control: 'text' },
    PlaceHolderText: { control: 'text' },
    maxLength: { control: 'number' },
    minLength: { control: 'number' },
    value: { control: 'text' },
    col: { control: 'number' },
    row: { control: 'number' },
    HandleTextAreaChange: { action: 'changed' },
    TextAreaID: { control: 'text' },
    AriaLabel: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    Resizeable: { control: 'boolean' },
  },
  args: {
    Label: 'Description',
    Asterisk: '*',
    HelpIcon: DefaultHelpIcon,
    HintText: 'Hint text.',
    TextArea: 'TextArea',
    PlaceHolderText: 'Place Holder Text',
    col: 40,
    row: 5,
    width: '100%',
    height: 'auto',
    Resizeable: true,
  },
};

const Template = (args) => <TextareaInputField {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: '',
};

export const WithCustomLabel = Template.bind({});
WithCustomLabel.args = {
  Label: 'Custom Label',
  value: '',
};

export const WithHelpIcon = Template.bind({});
WithHelpIcon.args = {
  HelpIcon: DefaultHelpIcon,
  value: '',
};

export const DisabledResize = Template.bind({});
DisabledResize.args = {
  Resizeable: false,
  value: '',
};

// Documentation (optional)
Default.parameters = {
  docs: {
    description: {
      component: 'This component renders a customizable textarea input field with label, hint text, and an optional help icon.',
    },
  },
};
