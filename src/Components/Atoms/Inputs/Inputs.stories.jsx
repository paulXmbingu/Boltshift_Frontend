import React from "react";
import { TextareaInputField } from "./Inputs";
import "./Inputs.module.css";

export default {
    title: 'Atomic/TextareaInputField',
    component: TextareaInputField,
    argTypes: {
        label: { 
            control: 'text', 
            defaultValue: 'Your Label Here',
            description: 'The label displayed above the textarea.'
        },
        placeholder: { 
            control: 'text', 
            defaultValue: 'Hint text here...',
            description: 'The placeholder text shown inside the textarea before user input.' 
        },
        required: { 
            control: 'boolean', 
            defaultValue: true,
            description: 'Determines if the textarea is required for form submission.' 
        },
        rows: { 
            control: 'number', 
            defaultValue: 8,
            description: 'The number of visible text lines in the textarea.' 
        },
        cols: { 
            control: 'number', 
            defaultValue: 40,
            description: 'The number of visible character columns in the textarea.' 
        },
        resize: { 
            control: 'select', 
            options: ['none', 'both', 'horizontal', 'vertical'], 
            defaultValue: 'both',
            description: 'Allows control over textarea resizing.' 
        },
        hintText: { 
            control: 'text', 
            defaultValue: 'This is a hint text to help user.',
            description: 'Helper text displayed below the textarea to guide the user.' 
        },
    },
};

const Template = (args) => <TextareaInputField {...args} />;

export const Default = Template.bind({});
Default.args = {};
