import React from 'react';
import { ReactionPos, ReactionNeg } from './ReactionIcon';

export default {
  title: 'Components/ReactionIcon',
  component: ReactionPos,
  subcomponents: { ReactionNeg },
  parameters: {
    docs: {
      description: {
        component: 'The `ReactionIcon` components display simple positive (+) and negative (-) reaction icons.',
      },
    },
  },
};

const TemplatePos = (args) => <ReactionPos {...args} />;
const TemplateNeg = (args) => <ReactionNeg {...args} />;

export const Positive = TemplatePos.bind({});
Positive.args = {};

export const Negative = TemplateNeg.bind({});
Negative.args = {};
