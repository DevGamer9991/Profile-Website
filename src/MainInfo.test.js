// In MainInfo.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import MainInfo from './MainInfo';

describe('MainInfo', () => {
  it('renders the title', () => {
    render(<MainInfo />);
    const titleElement = screen.getByText('PARKER THORNTON');
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the subtitle', () => {
    render(<MainInfo />);
    const subtitleElement = screen.getByText('SOFTWARE DEVELOPER | VIDEO EDITOR');
    expect(subtitleElement).toBeInTheDocument();
  });
});