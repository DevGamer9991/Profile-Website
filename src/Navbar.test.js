// In Navbar.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
    const items = [
        { key: 1, cssId: "about-me", title: "About Me", desc: "Hi, I'm Parker Thornton. Since the age of 8, I've been knee-deep in coding and I've spent the better part of my life as a dedicated software developer. For the last 4 years, I've branched out into video editing and production, finding unique ways to blend my tech skills with creative output. Just shy of 18, I'm excited for what the future holds.", imageText: "</>" },
    ];

  it('renders the title', () => {
    render(<Navbar items={items} />);
    const titleElement = screen.getByText('PARKER THORNTON');
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the items', () => {
    render(<Navbar items={items} />);
    const aboutMeElement = screen.getByText('ABOUT ME');
    const projectsElement = screen.getByText('PROJECTS');
    const contactMeElement = screen.getByText('CONTACT ME');
    expect(aboutMeElement).toBeInTheDocument();
    expect(projectsElement).toBeInTheDocument();
    expect(contactMeElement).toBeInTheDocument();
  });
});