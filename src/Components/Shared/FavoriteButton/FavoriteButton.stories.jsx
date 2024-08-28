import React from 'react';
import FavoriteButton from './FavoriteButton';

export default {
  title: 'Components/FavoriteButton',
  component: FavoriteButton,
  argTypes: {
    // No specific argTypes are needed for this component since it manages its own state internally
  },
};

const Template = (args) => <FavoriteButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  // No args needed for this component as state is managed internally
};
