import React from "react";
import CheckOutPage from "./CheckOutPage";

// Default export: provides metadata for Storybook
export default {
    title: "Pages/CheckOutPage",  // The name of the component in the Storybook sidebar
    component: CheckOutPage,      // The component being documented
};

// Template for the component
const Template = (args) => <CheckOutPage {...args} />;

// Story for the default state of the component
export const Default = Template.bind({});

// You can add more stories here if needed, with different states or props
