import React from 'react';
import { TestimonialCard_LoggedIn } from './TestimonialCard';
import { AvatarProfilePhotoSM } from '../../Atoms/AvatarProfilePhoto';
import { Badge_PillColor_SM_Success } from '../../Atoms/Badge';
import { StarRating4 } from '../../Molecules/StarRating';
import { ReactionNeg, ReactionPos } from '../ReactionIcon';
import { ProductMediaThumbnailSM } from '../ProductMediaThumbnail';

export default {
  title: 'Components/Testimonial Card/Logged In',
  component: TestimonialCard_LoggedIn,
  argTypes: {
    BuyerName: {
      description: 'Name of the buyer',
      control: 'text',
      defaultValue: 'John Doe',
    },
    UserPhoto: {
      description: 'URL of the user photo',
      control: 'text',
      defaultValue: 'https://example.com/user-photo.jpg',
    },
    DatePurchased: {
      description: 'Date when the product was purchased',
      control: 'text',
      defaultValue: 'August 24, 2024',
    },
    TestimonialTitle: {
      description: 'Title of the testimonial',
      control: 'text',
      defaultValue: 'Amazing Product!',
    },
    TestomonialText: {
      description: 'Text of the testimonial',
      control: 'text',
      defaultValue: 'This product exceeded my expectations. Highly recommend it!',
    },
    Media: {
      description: 'URL of the first media thumbnail',
      control: 'text',
      defaultValue: 'https://example.com/media1.jpg',
    },
    MediaAltText: {
      description: 'Alt text for the first media thumbnail',
      control: 'text',
      defaultValue: 'First media thumbnail',
    },
    Media2: {
      description: 'URL of the second media thumbnail',
      control: 'text',
      defaultValue: 'https://example.com/media2.jpg',
    },
    MediaAltText2: {
      description: 'Alt text for the second media thumbnail',
      control: 'text',
      defaultValue: 'Second media thumbnail',
    },
    // Add more media and alt text fields as needed
  },
};

const Template = (args) => <TestimonialCard_LoggedIn {...args} />;

export const Default = Template.bind({});
Default.args = {
  BuyerName: 'John Doe',
  UserPhoto: 'https://example.com/user-photo.jpg',
  DatePurchased: 'August 24, 2024',
  TestimonialTitle: 'Amazing Product!',
  TestomonialText: 'This product exceeded my expectations. Highly recommend it!',
  Media: 'https://example.com/media1.jpg',
  MediaAltText: 'First media thumbnail',
  Media2: 'https://example.com/media2.jpg',
  MediaAltText2: 'Second media thumbnail',
  // Add more media URLs and alt text if necessary
};

export const WithMultipleMedia = Template.bind({});
WithMultipleMedia.args = {
  BuyerName: 'Jane Smith',
  UserPhoto: 'https://example.com/user-photo2.jpg',
  DatePurchased: 'August 25, 2024',
  TestimonialTitle: 'Great Value!',
  TestomonialText: 'I found this product to be a great value for the price. Will buy again.',
  Media: 'https://example.com/media1.jpg',
  MediaAltText: 'First media thumbnail',
  Media2: 'https://example.com/media2.jpg',
  MediaAltText2: 'Second media thumbnail',
  Media3: 'https://example.com/media3.jpg',
  MediaAltText3: 'Third media thumbnail',
  Media4: 'https://example.com/media4.jpg',
  MediaAltText4: 'Fourth media thumbnail',
  // Add more media URLs and alt text if necessary
};
