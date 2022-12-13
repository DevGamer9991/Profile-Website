import React, { useEffect, useState } from "react";
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
        <Item title="I Write Code" desc="I know 7 different programing languages and I have made a few projects for my friends." image="images/phone.png" imageText={"</>_"} />
        <Item title="I Run Servers" desc="I run three seperate servers at my home. With 50 different server software." rightToLeft={true} background="rgba(63,180,251,1)" darkMode={true} imageTextSize="50px" imageText="parker@****** $ _" />
        <Projects />
        <ContactMe />
        <Footer />
      </ItemWrapper>
    </Main>
  );
}

export default App;
