import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Contact from './Contact';

import Navbar from './Home_Components/Navbar';
import MainInfo from './Home_Components/MainInfo';
import Footer from "./Home_Components/Footer";
import ProgramingCards from './Home_Components/Programming_Cards/ProgramingCards';
import Bio from './Home_Components/Bio';
import AboutMe from './Home_Components/AboutMe';

export const MainWrapper = styled.div``;
export const MainContent = styled.div`
  position: absolute;
  top: 90px;
  padding: 0pc;
  margin: 0;
  width: 100vw;
`;

function App() {
  return (
    <MainWrapper>
      <MainContent>
        <MainInfo />
        <ProgramingCards />
        <AboutMe />
        <Bio />
        <Footer />
      </MainContent>
    </MainWrapper>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/*" element={<App />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
