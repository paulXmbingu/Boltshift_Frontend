import React from 'react';
import { Star, StarBackground, StarRating1, StarRating2, StarRating3, StarRating4, StarRating5 } from './StarRating';

export default {
  title: 'Components/StarRating',
  component: StarRating1,
  argTypes: {
    // You can define controls for dynamic props here if needed
  },
};

const Template = (args) => (
  <div>
    <StarRating1 {...args} />
    <StarRating2 {...args} />
    <StarRating3 {...args} />
    <StarRating4 {...args} />
    <StarRating5 {...args} />
  </div>
);

export const Ratings = Template.bind({});
Ratings.args = {};
