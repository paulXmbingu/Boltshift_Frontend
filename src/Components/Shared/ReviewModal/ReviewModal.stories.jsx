import React from 'react';
import { ReviewModalDesktop } from './ReviewModal';

// Default export with metadata
export default {
    title: 'Shared/ReviewModalDesktop',  // Adjust title as needed for Storybook hierarchy
    component: ReviewModalDesktop,
};

// Define your stories
export const Default = () => <ReviewModalDesktop onClose={() => {}} />;
