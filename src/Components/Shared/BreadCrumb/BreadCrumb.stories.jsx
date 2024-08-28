import React from 'react';
import BreadCrumb from './BreadCrumb';

export default {
  title: 'Components/BreadCrumb',
  component: BreadCrumb,
  argTypes: {
    Catalog: {
      control: 'text',
      description: 'Text for the catalog link.',
      defaultValue: 'Catalog',
    },
    Cartegory: {
      control: 'text',
      description: 'Text for the category link.',
      defaultValue: 'Category',
    },
    Subcategory: {
      control: 'text',
      description: 'Text for the subcategory link.',
      defaultValue: 'Subcategory',
    },
    ProductName: {
      control: 'text',
      description: 'Text for the current product.',
      defaultValue: 'Product Name',
    },
  },
};

const Template = (args) => <BreadCrumb {...args} />;

export const Default = Template.bind({});
Default.args = {
  Catalog: 'Catalog',
  Cartegory: 'Category',
  Subcategory: 'Subcategory',
  ProductName: 'Product Name',
};

export const WithCategoryOnly = Template.bind({});
WithCategoryOnly.args = {
  Catalog: 'Catalog',
  Cartegory: 'Category',
};

export const WithSubcategoryOnly = Template.bind({});
WithSubcategoryOnly.args = {
  Catalog: 'Catalog',
  Cartegory: 'Category',
  Subcategory: 'Subcategory',
};

export const WithProductOnly = Template.bind({});
WithProductOnly.args = {
  Catalog: 'Catalog',
  Cartegory: 'Category',
  Subcategory: 'Subcategory',
  ProductName: 'Product Name',
};
