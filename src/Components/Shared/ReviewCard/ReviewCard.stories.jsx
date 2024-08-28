import React from 'react';
import ReviewCard from './ReviewCard';
import CheckIcon from '../../../assets/Icons/UI/check.svg';
import ProductImage from '../../../assets/Images/sample-product.jpg';
import ReviewerPhoto from '../../../assets/Images/reviewer-avatar.jpg';

export default {
  title: 'Components/ReviewCard',
  component: ReviewCard,
  parameters: {
    docs: {
      description: {
        component: 'The `ReviewCard` component displays a customer review along with details about the reviewer and the product being reviewed.',
      },
    },
  },
  argTypes: {
    ReviewerName: { control: 'text', description: 'Name of the reviewer' },
    ReviewerPhoto: { control: 'text', description: 'Photo of the reviewer' },
    ReviewDate: { control: 'text', description: 'Date of the review' },
    Review: { control: 'text', description: 'Text content of the review' },
    ProductImage: { control: 'text', description: 'Image of the reviewed product' },
    ProductNameLabel: { control: 'text', description: 'Name of the reviewed product' },
    PriceLabel: { control: 'text', description: 'Price of the reviewed product' },
  },
};

const Template = (args) => <ReviewCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  ReviewerName: 'Jane Doe',
  ReviewerPhoto: ReviewerPhoto,
  ReviewDate: 'August 28, 2024',
  Review: 'This product is fantastic! The quality exceeded my expectations and the customer service was great.',
  ProductImage: ProductImage,
  ProductNameLabel: 'Luxury Silk Scarf',
  PriceLabel: '2,499',
};
