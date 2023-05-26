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
    { id: 1, cssId: "about-me", title: "About Me", desc: "Hi, My name is Parker Thornton. I am a self taught software developer and video editor based in Oklahoma, USA.", imageText: "</>" },
    { id: 2, cssId: "video-editing", title: "Video Editing", desc: "Hi, My name is Parker Thornton. I am a self taught software developer and video editor based in Oklahoma, USA.", rightToLeft: true, background: "rgba(63,180,251,1)", darkMode: true, imageText: ":)" },
    { id: 3, cssId: "new-item", title: "New Item", desc: "This is a new item added dynamically.", imageText: ":D" }
  ]);

  return (
    <Main>
      <Navbar items={items}/>
      <MainInfo />
      <ItemWrapper>
        {items.map((item) => (
            <Item id={item.cssId} key={item.id} {...item} />
        ))}
        <Projects />
        <ContactMe />
        <Footer />
      </ItemWrapper>
    </Main>
  );
}

export default App;
