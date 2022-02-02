import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Navbar from './Home_Components/Navbar';
import MainInfo from './Home_Components/MainInfo';
import Footer from "./Home_Components/Footer";
import ProgramingCards from './Home_Components/Programming_Cards/ProgramingCards';
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
      <Navbar />
      <MainContent>
        <MainInfo />
        <ProgramingCards />
        <AboutMe />
        <Footer />
      </MainContent>
    </MainWrapper>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
