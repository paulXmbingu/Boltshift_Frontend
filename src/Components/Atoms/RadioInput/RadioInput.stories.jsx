import React, { useState } from 'react';
import RadioInput from './RadioInput';

export default {
  title: 'Components/RadioInput',
  component: RadioInput,
  argTypes: {
    color: {
      control: 'color',
      description: 'The background color of the radio input.',
      defaultValue: '#000000',
    },
    checked: {
      control: 'boolean',
      description: 'Determines if the radio input is checked.',
      defaultValue: false,
    },
  },
};

const Template = (args) => {
  const [isChecked, setIsChecked] = useState(args.checked);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
    args.onChange && args.onChange(event);
  };

  return <RadioInput {...args} checked={isChecked} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  color: '#000000',
  checked: false,
};
