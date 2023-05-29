import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the title', () => {
    render(<App />);
    const titleElement = screen.getByText('PARKER THORNTON');
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the items', () => {
    render(<App />);
    const aboutMeElement = screen.getByText('ABOUT ME');
    const projectsElement = screen.getByText('PROJECTS');
    const contactMeElement = screen.getByText('CONTACT ME');
    expect(aboutMeElement).toBeInTheDocument();
    expect(projectsElement).toBeInTheDocument();
    expect(contactMeElement).toBeInTheDocument();
  });

  it('renders the projects', () => {
    render(<App />);
    const projectsElement = screen.getByText('PROJECTS');
    expect(projectsElement).toBeInTheDocument();
  });

  it('renders the contact form', () => {
    render(<App />);
    const contactFormElement = screen.getByText('CONTACT FORM');
    expect(contactFormElement).toBeInTheDocument();
  });
});