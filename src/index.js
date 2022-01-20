import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Navbar from './Navbar';
import MainInfo from './MainInfo';
import Footer from "./Footer";

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
