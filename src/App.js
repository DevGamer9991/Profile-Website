import React from "react";
import styled from "styled-components";

import Navbar from "./Navbar";
import MainInfo from "./MainInfo";
import Item from "./Item";

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
        <Item title="I Write Code." desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." image="images/computer.png"/>
        <Item background="rgba(63,180,251,1)" darkMode={true} title="I Also Write Code." desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." image="images/computer.png" rightToLeft={true} />
      </ItemWrapper>
    </Main>
  );
}

export default App;
