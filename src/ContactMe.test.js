// In ContactMe.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactMe from './ContactMe';

describe('ContactMe', () => {
  it('renders the title', () => {
    render(<ContactMe />);
    const titleElement = screen.getByText('CONTACT FORM');
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the social links', () => {
    render(<ContactMe />);
    const discordElement = screen.getByTitle('Discord');
    const linkedinElement = screen.getByTitle('LinkedIn');
    const twitchElement = screen.getByTitle('Twitch');
    const twitterElement = screen.getByTitle('Twitter');
    const instagramElement = screen.getByTitle('Instagram');
    const facebookElement = screen.getByTitle('Facebook');
    const youtubeElement = screen.getByTitle('YouTube');
    const githubElement = screen.getByTitle('GitHub');
    const gitElement = screen.getByTitle('Git');
    expect(discordElement).toBeInTheDocument();
    expect(linkedinElement).toBeInTheDocument();
    expect(twitchElement).toBeInTheDocument();
    expect(twitterElement).toBeInTheDocument();
    expect(instagramElement).toBeInTheDocument();
    expect(facebookElement).toBeInTheDocument();
    expect(youtubeElement).toBeInTheDocument();
    expect(githubElement).toBeInTheDocument();
    expect(gitElement).toBeInTheDocument();
  });
});