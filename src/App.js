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

  const [items, setItems] = useState([
    { key: 1, cssId: "about-me", title: "About Me", desc: "Hi, I'm Parker Thornton. Since the age of 8, I've been knee-deep in coding and I've spent the better part of my life as a dedicated software developer. For the last 4 years, I've branched out into video editing and production, finding unique ways to blend my tech skills with creative output. Just shy of 18, I'm excited for what the future holds.", imageText: "</>" },
  ]);

  return (
    <Main>
      <Navbar items={items}/>
      <MainInfo />
      <ItemWrapper>
        {items.map((item) => (
            <>
              {console.log(item.cssId)}
              <Item itemID={item.cssId} key={item.key} {...item} />
            </>
        ))}
        <Projects />
        <ContactMe />
        <Footer />
      </ItemWrapper>
    </Main>
  );
}

export default App;
