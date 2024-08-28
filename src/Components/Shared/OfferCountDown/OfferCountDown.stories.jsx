import React from 'react';
import OfferCountDown from './OfferCountDown';

export default {
  title: 'Components/OfferCountDown',
  component: OfferCountDown,
  parameters: {
    docs: {
      description: {
        component: 'The `OfferCountDown` component displays a countdown timer with days, hours, minutes, and seconds. It automatically decrements the timer each second until it reaches zero.'
      }
    }
  },
  argTypes: {
    days: {
      control: { type: 'number' },
      description: 'The number of days left in the countdown.',
      defaultValue: 2,
    },
    hours: {
      control: { type: 'number' },
      description: 'The number of hours left in the countdown.',
      defaultValue: 23,
    },
    minutes: {
      control: { type: 'number' },
      description: 'The number of minutes left in the countdown.',
      defaultValue: 59,
    },
    seconds: {
      control: { type: 'number' },
      description: 'The number of seconds left in the countdown.',
      defaultValue: 59,
    }
  }
};

const Template = (args) => <OfferCountDown {...args} />;

export const Default = Template.bind({});
Default.args = {
  days: 2,
  hours: 23,
  minutes: 59,
  seconds: 59,
};
