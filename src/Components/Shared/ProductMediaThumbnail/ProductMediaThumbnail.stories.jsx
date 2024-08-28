import React from 'react';
import { ProductMediaThumbnailMD, ProductMediaThumbnailSM } from './ProductMediaThumbnail';

export default {
  title: 'Components/ProductMediaThumbnail',
  component: ProductMediaThumbnailMD,
  subcomponents: { ProductMediaThumbnailSM },
  parameters: {
    docs: {
      description: {
        component: 'The `ProductMediaThumbnail` components display product thumbnails with interactive functionality for medium and small sizes.',
      },
    },
  },
  argTypes: {
    ThumbNailMedia: {
      control: 'text',
      description: 'URL of the medium-sized product thumbnail image.',
    },
    Media: {
      control: 'text',
      description: 'URL of the small-sized product thumbnail image.',
    },
    MediaAltText: {
      control: 'text',
      description: 'Alternative text for the small-sized product thumbnail image.',
      defaultValue: 'Small User Added Product Media Thumbnail',
    },
    clickedThumbnail: {
      action: 'clickedThumbnail',
      description: 'Callback function triggered when the medium thumbnail is clicked.',
    },
    handleClick: {
      action: 'handleClick',
      description: 'Callback function triggered when the small thumbnail is clicked.',
    },
  },
};

const TemplateMD = (args) => <ProductMediaThumbnailMD {...args} />;
const TemplateSM = (args) => <ProductMediaThumbnailSM {...args} />;

export const Medium = TemplateMD.bind({});
Medium.args = {
  ThumbNailMedia: 'https://i.pinimg.com/736x/eb/ea/4b/ebea4b4488cd4d1d47cc352e9ade2265.jpg',
};

export const Small = TemplateSM.bind({});
Small.args = {
  Media: 'https://i.pinimg.com/736x/2b/21/ac/2b21ac39398f6ede03e66c708610835d.jpg',
  MediaAltText: 'Small Product Thumbnail',
};
