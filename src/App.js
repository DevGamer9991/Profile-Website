import React from "react";
import styled from "styled-components";

import Navbar from "./Navbar";
import MainInfo from "./MainInfo";
import Item from "./Item";
import Footer from "./Footer";
import ContactMe from "./ContactMe";
import Projects from "./Projects";

const Main = styled.div`
  
`;

const ItemWrapper = styled.div`
  position: relative;
  top: 100vh;
`;

function App() {
  return (
    <Main>
      <Navbar />
      <MainInfo />
      <ItemWrapper>
        <Item title="I Write Code" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." image="images/phone.png" />
        <Item title="I Also Write Code" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." image="images/computer-server.png" rightToLeft={true} background="rgba(63,180,251,1)" darkMode={true} />
        <Projects />
        <ContactMe />
        <Footer />
      </ItemWrapper>
    </Main>
  );
}

export default App;
