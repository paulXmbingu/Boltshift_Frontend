import React from "react";
import { TextareaInputField } from "./Inputs";
import "./Inputs.module.css";

export default {
    title: 'Atomic/TextareaInputField',
    component: TextareaInputField,
};

const Template = (args) => <TextareaInputField {...args} />;

export const Default = Template.bind({});
Default.args = {};
