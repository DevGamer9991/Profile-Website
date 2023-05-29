// In Projects.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Projects from './Projects';

describe('Projects', () => {
  it('renders the title', () => {
    render(<Projects />);
    const titleElement = screen.getByText('PROJECTS');
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the projects', () => {
    render(<Projects />);
    const project1Element = screen.getByText('Project 1');
    const project2Element = screen.getByText('Project 2');
    const project3Element = screen.getByText('Project 3');
    expect(project1Element).toBeInTheDocument();
    expect(project2Element).toBeInTheDocument();
    expect(project3Element).toBeInTheDocument();
  });
});