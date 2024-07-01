import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserAvatar from './UserAvatar';

describe('UserAvatar Component', () => {
  const userPhoto = 'test-photo.jpg';

  test('renders UserAvatar component', () => {
    render(<UserAvatar userPhoto={userPhoto} />);
    const imgElement = screen.getByAltText('User Photo');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', userPhoto);
  });

  test('adds focused class when avatar is focused or clicked', () => {
    render(<UserAvatar userPhoto={userPhoto} />);
    const imgElement = screen.getByAltText('User Photo');
    const divElement = imgElement.parentElement;

    // Test focus
    fireEvent.focus(divElement);
    expect(imgElement).toHaveClass('focused');

    // Test blur
    fireEvent.blur(divElement);
    expect(imgElement).not.toHaveClass('focused');

    // Test click
    fireEvent.click(divElement);
    expect(imgElement).toHaveClass('focused');
  });
});
