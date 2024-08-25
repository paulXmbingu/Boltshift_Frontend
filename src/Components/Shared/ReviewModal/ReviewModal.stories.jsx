import React from 'react';
import { ReviewModalDesktop } from './ReviewModalDesktop'; // Adjust import path as necessary

// Default export with metadata
export default {
    title: 'Components/ReviewModalDesktop', // Adjust title to match your Storybook hierarchy
    component: ReviewModalDesktop,
};

// Define your stories
export const Default = () => <ReviewModalDesktop onClose={() => {}} />;
