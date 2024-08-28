import React, { useState } from 'react';
import TagCheckboxSM from './Tag';

export default {
  title: 'Components/TagCheckboxSM',
  component: TagCheckboxSM,
  argTypes: {
    Label: {
      control: 'text',
      description: 'The label text for the tag.',
      defaultValue: 'Tag Label',
    },
    checkedTag: {
      control: 'boolean',
      description: 'Determines if the tag is checked.',
      defaultValue: false,
    },
    onChange: {
      action: 'changed',
      description: 'Handler when the tag is clicked.',
    },
  },
};

const Template = (args) => {
  const [checked, setChecked] = useState(args.checkedTag);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    args.onChange && args.onChange(event);
  };

  return <TagCheckboxSM {...args} checkedTag={checked} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  Label: 'Tag Label',
  checkedTag: false,
};
